import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { upsertContactToGhl } from '@/lib/ghl';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      organization,
      facilityType,
      scale,
      frequency,
      commencement,
    } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    const ghlResult = await upsertContactToGhl({
      name,
      email,
      phone,
      organization,
      facilityType,
      scale,
      frequency,
      commencement,
    });

    try {
      await resend.emails.send({
        from: 'RBA Website <onboarding@resend.dev>',
        to: [process.env.CONTACT_EMAIL_TO || 'rbacommercialservices@gmail.com'],
        subject: `New Quote Request from ${name}`,
        html: `
        <h1>New Quote Request</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || '—'}</p>
        <p><strong>Organization:</strong> ${organization || '—'}</p>
        <hr />
        <h2>Service Details</h2>
        <p><strong>Facility Type:</strong> ${facilityType || '—'}</p>
        <p><strong>Scale (SQ FT):</strong> ${scale || '—'}</p>
        <p><strong>Frequency:</strong> ${frequency || '—'}</p>
        <p><strong>Commencement Date:</strong> ${commencement || '—'}</p>
      `,
      });
    } catch (emailError) {
      console.error('Resend notification failed:', emailError);
    }

    return NextResponse.json({ success: true, ghl: ghlResult });
  } catch (error) {
    console.error('Contact submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    );
  }
}
