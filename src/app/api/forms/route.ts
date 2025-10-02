// app/api/forms/route.ts
import { NextResponse } from "next/server";
import { appendToSheet } from "@/lib/gsheets";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { type, ...formData } = body;

    // Prepare row values (dynamic by type)
    const values = [
      new Date().toISOString(),
      type,
      ...Object.values(formData),
    ];

    await appendToSheet(values);

    return NextResponse.json({ success: true, message: "Form submitted!" });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
