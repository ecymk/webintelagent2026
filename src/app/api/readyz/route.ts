import { NextResponse } from "next/server";

export const dynamic = "force-static";

export async function GET() {
  return NextResponse.json(
    {
      status: "ready",
      service: "dawn-executive-ops",
      domain: "dawn.webintelagent.com",
      firebaseConfigured: Boolean(
        process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID?.trim()
      ),
    },
    { status: 200 }
  );
}
