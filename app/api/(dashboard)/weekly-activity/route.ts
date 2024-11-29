import { FALLBACK_ERROR_MESSAGE } from "@/lib/constants";
import { dummyWeeklyTransactions } from "@/lib/dummyData";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json(
      { transactions: dummyWeeklyTransactions },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { message: FALLBACK_ERROR_MESSAGE },
      { status: 500 }
    );
  }
}
