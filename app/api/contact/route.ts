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

    const { name, email, phone, businessType, message } = await req.json()

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
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#0f172a;padding:20px 10px;">
          <tr>
            <td align="center">
              <!-- MAIN CONTAINER -->
              <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 10px 40px rgba(0,0,0,0.2);">
                <!-- HEADER -->
                <tr>
                  <td align="center" style="padding:20px;">
                    <img src="https://brandingwithsd.vercel.app/logo.png" width="160" alt="Branding With SD" style="display:block;" />
                  </td>
                </tr>
                <!-- TITLE -->
                <tr>
                  <td style="padding:30px 30px 10px 30px;">
                    <h2 style="margin:0;font-size:24px;color:#111827;">📩 New Contact Message</h2>
                    <p style="margin-top:8px;color:#6b7280;font-size:15px;">
                      You received a new inquiry from your website.
                    </p>
                  </td>
                </tr>
                <!-- INFO CARD -->
                <tr>
                  <td style="padding:20px 30px;">
                    <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9fafb;border-radius:12px;padding:20px;font-size:14px;color:#111827;">
                      <tr>
                        <td style="padding:8px 0;"><strong>Name:</strong></td>
                        <td style="padding:8px 0;">${name}</td>
                      </tr>
                      <tr>
                        <td style="padding:8px 0;"><strong>Email:</strong></td>
                        <td style="padding:8px 0;">${email}</td>
                      </tr>
                      <tr>
                        <td style="padding:8px 0;"><strong>Phone:</strong></td>
                        <td style="padding:8px 0;">${phone || "N/A"}</td>
                      </tr>
                      <tr>
                        <td style="padding:8px 0;"><strong>Business Type:</strong></td>
                        <td style="padding:8px 0;">${businessType || "N/A"}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <!-- MESSAGE BOX -->
                <tr>
                  <td style="padding:0 30px 30px 30px;">
                    <div style="background:#f3f4f6;border:1px solid #e5e7eb;border-radius:12px;padding:20px;">
                      <p style="margin:0 0 10px 0;font-size:15px;color:#374151;"><strong>Message:</strong></p>
                      <p style="margin:0;font-size:15px;color:#111827;line-height:1.6;">
                        ${cleanMessage}
                      </p>
                    </div>
                  </td>
                </tr>
                <!-- CTA BUTTON -->
                <tr>
                  <td align="center" style="padding:10px 30px 30px 30px;">
                    <a href="mailto:${email}" 
                      style="display:inline-block;background:#2563eb;color:#ffffff;padding:14px 28px;border-radius:8px;font-size:14px;font-weight:bold;text-decoration:none;">
                      Reply to Client
                    </a>
                  </td>
                </tr>
                <!-- FOOTER -->
                <tr>
                  <td align="center" style="background:#f9fafb;padding:20px;font-size:12px;color:#6b7280;">
                    © ${new Date().getFullYear()} Brandingwith SD <br/>
                    This email was sent from your website contact form.
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