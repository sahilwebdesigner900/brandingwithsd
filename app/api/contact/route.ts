import { Resend } from "resend"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const resendApiKey = process.env.RESEND_API_KEY
    const receiverEmail = process.env.RECEIVER_EMAIL

    // ✅ Check ENV
    if (!resendApiKey || !receiverEmail) {
      return NextResponse.json(
        { success: false, error: "Email service is not configured." },
        { status: 500 }
      )
    }

    const { name, email, phone, company, message } = await req.json()

    // ✅ Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      )
    }

    // ✅ Sanitize message (security)
    const cleanMessage = message
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")

    const resend = new Resend(resendApiKey)

    // ✅ SEND EMAIL
    const data = await resend.emails.send({
      from: "Branding With SD <onboarding@resend.dev>",
      to: [receiverEmail],
      replyTo: email,
      subject: "New Contact Form Message - Brandingwithsd",

      html: `
      <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:20px;font-family:Arial, sans-serif;">
        <tr>
          <td align="center">

            <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border:1px solid #ddd;">
              
              <!-- Header -->
              <tr>
                <td align="center" style="background:#111827;padding:20px;">
                  <img src="https://brandingwithsd.vercel.app/logo.png" width="150" alt="Branding With SD" />
                </td>
              </tr>

              <!-- Title -->
              <tr>
                <td style="padding:20px;">
                  <h2 style="margin:0;color:#111;">New Contact Message</h2>
                  <p style="color:#555;font-size:14px;">You received a new message from your website.</p>
                </td>
              </tr>

              <!-- Info -->
              <tr>
                <td style="padding:0 20px;">
                  <table width="100%" cellpadding="5" cellspacing="0" style="font-size:14px;">
                    <tr>
                      <td><strong>Name:</strong></td>
                      <td>${name}</td>
                    </tr>
                    <tr>
                      <td><strong>Email:</strong></td>
                      <td>${email}</td>
                    </tr>
                    <tr>
                      <td><strong>Phone:</strong></td>
                      <td>${phone || "N/A"}</td>
                    </tr>
                    <tr>
                      <td><strong>Company:</strong></td>
                      <td>${company || "N/A"}</td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Message -->
              <tr>
                <td style="padding:20px;">
                  <p><strong>Message:</strong></p>
                  <div style="border:1px solid #ddd;padding:10px;background:#fafafa;">
                    ${cleanMessage}
                  </div>
                </td>
              </tr>

              <!-- Button -->
              <tr>
                <td align="center" style="padding:20px;">
                  <a href="mailto:${email}" 
                    style="background:#2563eb;color:#ffffff;padding:10px 20px;text-decoration:none;">
                    Reply to Client
                  </a>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td align="center" style="background:#f1f1f1;padding:15px;font-size:12px;color:#777;">
                  © ${new Date().getFullYear()} Branding With SD
                </td>
              </tr>

            </table>

          </td>
        </tr>
      </table>
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