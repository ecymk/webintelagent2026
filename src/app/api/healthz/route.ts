import { NextResponse } from "next/server";

export const dynamic = "force-static";

export async function GET() {
  return NextResponse.json(
    {
      status: "ok",
      service: "dawn-executive-ops",
      domain: "dawn.webintelagent.com",
    },
    { status: 200 }
  );
}
