// app/api/contact/route.js
import { NextResponse } from 'next/server';

export async function POST(request) {
  const { name, email, message } = await request.json();
  // TODO: send email or save to DB
  console.log('Contact form:', { name, email, message });
  return NextResponse.json({ success: true });
}
