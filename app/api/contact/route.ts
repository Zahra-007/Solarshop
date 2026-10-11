import { NextResponse } from "next/server";

interface ContactRequestBody {
  name?: string;
  email?: string;
  phone?: string;
  interest?: string;
  message?: string;
  monthlyBill?: string;
  website?: string; // Honeypot field
}

export async function POST(request: Request) {
  try {
    const body: ContactRequestBody = await request.json();

    // 1. Honeypot check (silently drop bot submissions)
    if (body.website && body.website.trim() !== "") {
      return NextResponse.json(
        { success: true, message: "Thank you for reaching out! We will be in touch shortly." },
        { status: 200 }
      );
    }

    const { name, email, phone, interest, message, monthlyBill } = body;

    // 2. Validation
    if (!name || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please enter your full name." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || message.trim().length < 5) {
      return NextResponse.json(
        { success: false, error: "Please include a message or details about your property." },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || "hello@solarshop.com.au";

    // 3. Send via Resend API if key is configured
    if (resendApiKey && resendApiKey.startsWith("re_")) {
      const emailPayload = {
        from: "Solarshop Inquiries <onboarding@resend.dev>",
        to: [toEmail],
        reply_to: email.trim(),
        subject: `New Solar Inquiry: ${name.trim()} (${interest || "General Quote"})`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2d8bb; border-radius: 12px; background: #fffdf6;">
            <div style="background: #1f4d2c; padding: 16px 20px; border-radius: 8px; margin-bottom: 20px;">
              <h2 style="color: #fbf7ea; margin: 0; font-size: 20px;">New Consultation Request</h2>
            </div>
            <table style="width: 100%; border-collapse: collapse; font-size: 15px; color: #2a2a1c;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; width: 140px;">Name:</td>
                <td style="padding: 8px 0;">${escapeHtml(name.trim())}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:${escapeHtml(email.trim())}">${escapeHtml(email.trim())}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Phone:</td>
                <td style="padding: 8px 0;">${phone ? escapeHtml(phone.trim()) : "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Interest:</td>
                <td style="padding: 8px 0;">${interest ? escapeHtml(interest) : "General Solar Assessment"}</td>
              </tr>
              ${
                monthlyBill
                  ? `<tr>
                      <td style="padding: 8px 0; font-weight: bold;">Estimated Monthly Bill:</td>
                      <td style="padding: 8px 0;">$${escapeHtml(monthlyBill)}/mo</td>
                    </tr>`
                  : ""
              }
            </table>
            <div style="margin-top: 20px; padding: 16px; background: #fbf7ea; border-radius: 8px; border: 1px solid #e2d8bb;">
              <strong style="display: block; margin-bottom: 8px; color: #1f4d2c;">Message / Property Details:</strong>
              <p style="margin: 0; white-space: pre-wrap; color: #2a2a1c;">${escapeHtml(message.trim())}</p>
            </div>
            <p style="font-size: 12px; color: #5f5b43; margin-top: 24px; text-align: center;">
              Submitted via Solarshop Web Portal
            </p>
          </div>
        `,
      };

      const resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailPayload),
      });

      if (!resendRes.ok) {
        const errorData = await resendRes.json();
        console.error("Resend API Error:", errorData);
        // We log error but don't crash client experience
      }
    } else {
      console.log(
        "[Solarshop Dev Mode] New Contact Inquiry Received:",
        JSON.stringify({ name, email, phone, interest, message, monthlyBill }, null, 2)
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your quote request has been received. Our team will contact you within 24 business hours.",
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred. Please try again or call us directly." },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
