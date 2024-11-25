import { dummyCards } from "@/lib/dummyData";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    { message: null, cards: dummyCards },
    { status: 200 }
  );
}
