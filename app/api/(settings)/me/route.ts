import { FALLBACK_ERROR_MESSAGE } from "@/lib/constants";
import { dummyAccount } from "@/lib/dummyData";
import { AccountDataRequest } from "@/lib/types";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json({ account: dummyAccount }, { status: 200 });
  } catch {
    return NextResponse.json(
      { message: FALLBACK_ERROR_MESSAGE },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    const userData: AccountDataRequest = await req.json();

    // Omit password from response
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...secureData } = userData.account;

    return NextResponse.json({ account: secureData }, { status: 200 });
  } catch {
    return NextResponse.json(
      { message: FALLBACK_ERROR_MESSAGE },
      { status: 500 }
    );
  }
}
