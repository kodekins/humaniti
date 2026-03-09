import { NextRequest, NextResponse } from 'next/server'

// ─── OPTIONAL: install nodemailer and configure env vars ──────────────────────
// npm install nodemailer @types/nodemailer
// Add to .env.local:
//   EMAIL_HOST=smtp.gmail.com
//   EMAIL_PORT=587
//   EMAIL_USER=your@gmail.com
//   EMAIL_PASS=your-app-password
//   EMAIL_TO=hello@humanitiai.com

interface ContactPayload {
  name:    string
  email:   string
  company: string
  service: string
  budget:  string
  message: string
}

function validatePayload(data: unknown): data is ContactPayload {
  if (!data || typeof data !== 'object') return false
  const d = data as Record<string, unknown>
  return (
    typeof d.name    === 'string' && d.name.trim().length > 0 &&
    typeof d.email   === 'string' && /\S+@\S+\.\S+/.test(d.email) &&
    typeof d.message === 'string' && d.message.trim().length > 0
  )
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    if (!validatePayload(body)) {
      return NextResponse.json(
        { error: 'Invalid payload — name, email, and message are required.' },
        { status: 400 }
      )
    }

    const { name, email, company, service, budget, message } = body

    // ── EMAIL SENDING (uncomment and configure env vars to enable) ────────────
    /*
    const nodemailer = await import('nodemailer')

    const transporter = nodemailer.createTransporter({
      host:   process.env.EMAIL_HOST,
      port:   Number(process.env.EMAIL_PORT),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from:    `"Humaniti AI Contact" <${process.env.EMAIL_USER}>`,
      to:      process.env.EMAIL_TO,
      replyTo: email,
      subject: `[Humaniti AI] New inquiry from ${name} — ${service || 'General'}`,
      html: `
        <div style="font-family: monospace; max-width: 600px; padding: 32px;">
          <h2 style="color: #c8ff00; margin-bottom: 24px;">NEW PROJECT INQUIRY</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #888;">Name</td><td style="padding: 8px 0;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #888;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #888;">Company</td><td style="padding: 8px 0;">${company || '—'}</td></tr>
            <tr><td style="padding: 8px 0; color: #888;">Service</td><td style="padding: 8px 0;">${service || '—'}</td></tr>
            <tr><td style="padding: 8px 0; color: #888;">Budget</td><td style="padding: 8px 0;">${budget || '—'}</td></tr>
          </table>
          <div style="margin-top: 24px; padding: 20px; background: #f5f5f5; border-left: 3px solid #c8ff00;">
            <p style="color: #333; white-space: pre-wrap; margin: 0;">${message}</p>
          </div>
        </div>
      `,
    })
    */

    // ── LOGGING (always runs, useful for development) ─────────────────────────
    console.log('📬 New contact submission:', {
      name, email, company, service, budget,
      message: message.substring(0, 100) + '...',
      timestamp: new Date().toISOString(),
    })

    // ── OPTIONAL: Add to Airtable / CRM ──────────────────────────────────────
    // const airtableKey  = process.env.AIRTABLE_API_KEY
    // const airtableBase = process.env.AIRTABLE_BASE_ID
    // if (airtableKey && airtableBase) {
    //   await fetch(`https://api.airtable.com/v0/${airtableBase}/Leads`, {
    //     method: 'POST',
    //     headers: { 'Authorization': `Bearer ${airtableKey}`, 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ fields: { Name: name, Email: email, Company: company, Service: service, Budget: budget, Message: message } }),
    //   })
    // }

    return NextResponse.json(
      { success: true, message: 'Submission received. We\'ll be in touch within 24 hours.' },
      { status: 200 }
    )
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json(
      { error: 'Internal server error. Please email us at hello@humanitiai.com' },
      { status: 500 }
    )
  }
}

// Only allow POST
export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}
