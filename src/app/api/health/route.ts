import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(
    {
      status: 'ok',
      project: 'OanhRussian',
      timestamp: new Date().toISOString(),
    },
    { status: 200 }
  );
}
