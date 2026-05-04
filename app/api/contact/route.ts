import { Resend } from "resend"
import { NextResponse } from "next/server"

// export async function GET() {
//   return NextResponse.json({ message: "API is working" })
// }

export async function POST(req: Request) {
  try {
    const resendApiKey = process.env.RESEND_API_KEY
    const receiverEmail = process.env.RECEIVER_EMAIL

    // console.log("API KEY:", resendApiKey)
    // console.log("EMAIL:", receiverEmail)

    if (!resendApiKey || !receiverEmail) {
      return NextResponse.json(
        { success: false, error: "Email service is not configured." },
        { status: 500 }
      )
    }

    const { name, email, phone, company, message } = await req.json()
    const resend = new Resend(resendApiKey)

    const data = await resend.emails.send({
      from: "Branding With SD <onboarding@resend.dev>",
      to: [receiverEmail],
      replyTo: email,
      subject: "New Contact Form Message - Brandingwithsd",
      html: `
      <div style="margin:0;padding:0;background-color:#f4f6f8;font-family:Arial,Helvetica,sans-serif;">
        <table width="100%" cellpadding="0" cellspacing="0" style="padding:20px 0;">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.08);">
                <tr>
                  <td align="center" style="background:#0f172a;padding:25px;">
                    <img src="https://brandingwithsd.vercel.app/logo.png" alt="Branding With SD" width="160" style="display:block;" />
                  </td>
                </tr>
                <tr>
                  <td style="padding:30px 30px 10px 30px;">
                    <h2 style="margin:0;font-size:22px;color:#111827;">📩 New Contact Message</h2>
                    <p style="margin:8px 0 0;color:#6b7280;font-size:14px;">
                      You received a new inquiry from your website.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:20px 30px;">
                    <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;color:#111827;">
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
                        <td style="padding:8px 0;"><strong>Company:</strong></td>
                        <td style="padding:8px 0;">${company || "N/A"}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 30px 30px 30px;">
                    <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:10px;padding:15px;">
                      <p style="margin:0;font-size:14px;color:#374151;"><strong>Message:</strong></p>
                      <p style="margin-top:8px;font-size:14px;color:#111827;line-height:1.6;">
                        ${message}
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="background:#f9fafb;padding:20px;font-size:12px;color:#6b7280;">
                    © ${new Date().getFullYear()} Branding With SD <br/>
                    This email was sent from your website contact form.
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
    `

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
