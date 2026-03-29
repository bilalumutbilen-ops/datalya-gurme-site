import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // burada iyzico işlemini yapacaksın (şimdilik mock geçiyoruz)

    return NextResponse.json({
      success: true,
      message: "Initialize başarılı",
    });

  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Bir hata oluştu" },
      { status: 500 }
    );
  }
}