import { NextResponse } from "next/server";

export function GET() {
    const data = 'User Details API';
    return NextResponse.json(data, { status: 200 });
}
  