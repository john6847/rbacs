import { NextResponse } from 'next/server';
import { Resend } from 'resend';

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
        commencement 
    } = body;

    const { data, error } = await resend.emails.send({
      from: 'RBA Website <onboarding@resend.dev>',
      to: [process.env.CONTACT_EMAIL_TO || 'rbacommercialservices@gmail.com'], // Fallback or env var
      subject: `New Quote Request from ${name}`,
      html: `
        <h1>New Quote Request</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Organization:</strong> ${organization}</p>
        <hr />
        <h2>Service Details</h2>
        <p><strong>Facility Type:</strong> ${facilityType}</p>
        <p><strong>Scale (SQ FT):</strong> ${scale}</p>
        <p><strong>Frequency:</strong> ${frequency}</p>
        <p><strong>Commencement Date:</strong> ${commencement}</p>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Server Internal Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
