import { NextRequest, NextResponse } from "next/server"

const WEBHOOK_URL = "https://services.leadconnectorhq.com/hooks/rDrIW6TO5WawA7pvJ58H/webhook-trigger/e17e4a97-66d6-48cb-ae0c-115b84291046"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone } = body

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone are required" },
        { status: 400 }
      )
    }

    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
      }),
    })

    if (!response.ok) {
      throw new Error(`Webhook responded with status: ${response.status}`)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending lead to webhook:", error)
    return NextResponse.json(
      { error: "Failed to submit lead" },
      { status: 500 }
    )
  }
}
