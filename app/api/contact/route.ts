import { Resend } from "resend"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const resendApiKey = process.env.RESEND_API_KEY
    const receiverEmail = process.env.RECEIVER_EMAIL

    if (!resendApiKey || !receiverEmail) {
      return NextResponse.json(
        { success: false, error: "Email service is not configured." },
        { status: 500 }
      )
    }

    const { name, email, phone, company, message } = await req.json()
    const resend = new Resend(resendApiKey)

    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>", // ✅ must be this
      to: [receiverEmail],
      replyTo: email,
      subject: "New Contact Form Message",
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    })

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("RESEND ERROR:", error)
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Something went wrong.",
      },
      { status: 500 }
    )
  }
}
