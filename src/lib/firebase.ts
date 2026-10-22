import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";
import { getFirestore, collection, addDoc, type Firestore } from "firebase/firestore";
import type { LeadSubmission } from "@/types";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ?? "",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ?? "",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ?? "",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ?? "",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ?? "",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID ?? "",
};

function getFirestoreClient(): Firestore | null {
  const projectId = firebaseConfig.projectId.trim();
  if (!projectId) {
    return null;
  }

  const app: FirebaseApp =
    getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
  return getFirestore(app);
}

export interface SubmitLeadResult {
  ok: boolean;
  deliveryMode: "firestore" | "staging-fallback";
  documentId?: string;
}

export async function submitDualTrackLead(
  payload: LeadSubmission
): Promise<SubmitLeadResult> {
  const db = getFirestoreClient();

  if (!db) {
    await new Promise<void>((resolve) => {
      setTimeout(() => resolve(), 600);
    });
    console.info("[LeadCapture:StagingFallback]", payload);
    return {
      ok: true,
      deliveryMode: "staging-fallback",
    };
  }

  try {
    const timeoutPromise = new Promise<never>((_, reject) => {
      setTimeout(() => {
        reject(new Error("Firestore write timed out after 8000ms"));
      }, 8000);
    });

    const docRef = await Promise.race([
      addDoc(collection(db, "leads"), payload),
      timeoutPromise,
    ]);

    return {
      ok: true,
      deliveryMode: "firestore",
      documentId: docRef.id,
    };
  } catch (err) {
    console.warn("[LeadCapture:Fallback]", err, payload);
    return {
      ok: true,
      deliveryMode: "staging-fallback",
    };
  }
}
