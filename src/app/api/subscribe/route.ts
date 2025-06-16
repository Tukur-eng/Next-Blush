// app/api/subscribe/route.ts (Next.js App Router)
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
  }

  try {
    const existing = await prisma.subscriber.findUnique({ where: { email } });

    if (existing) {
      return NextResponse.json({ message: 'You are already subscribed!' });
    }

    await prisma.subscriber.create({
      data: { email },
    });

    return NextResponse.json({ message: 'Subscribed successfully!' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Subscription failed' }, { status: 500 });
  }
}
