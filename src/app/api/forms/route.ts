// app/api/forms/route.ts
import { NextResponse } from "next/server";
import { appendToSheet } from "@/lib/gsheets";

// More specific typing if you know the form structure
type FormType = "contact" | "registration" | "feedback";

interface FormRequestBody {
  type: FormType;
  name?: string;
  email?: string;
  message?: string;
  // Add other known fields as needed
}

export async function POST(req: Request) {
  try {
    const body = await req.json() as FormRequestBody;
    const { type, ...formData } = body;

    // Prepare row values (dynamic by type)
    const values = [
      new Date().toISOString(),
      type,
      ...Object.values(formData),
    ];

    await appendToSheet(values);

    return NextResponse.json({ success: true, message: "Form submitted!" });
  } catch (error: unknown) {
    console.error("Form submission error:", error);
    
    const errorMessage = error instanceof Error 
      ? error.message 
      : "An unexpected error occurred";
    
    return NextResponse.json(
      { success: false, error: errorMessage }, 
      { status: 500 }
    );
  }
}