import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const uptimeStart = Date.now();

export async function GET() {
  let dbStatus = 'disconnected';

  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (supabaseUrl && supabaseAnonKey) {
      const supabase = createClient(supabaseUrl, supabaseAnonKey);
      const { error } = await supabase.from('').select('*').limit(1);
      // Lỗi 42P01 là bảng không tồn tại -> Đã kết nối thành công tới Postgres engine
      if (!error || error.code === '42P01' || error.message.includes('relation')) {
        dbStatus = 'connected';
      }
    }
  } catch {
    dbStatus = 'error';
  }

  return NextResponse.json(
    {
      status: 'ok',
      version: '0.1.0',
      environment: process.env.NODE_ENV || 'development',
      database: dbStatus,
      uptime: `${Math.floor((Date.now() - uptimeStart) / 1000)}s`,
      timestamp: new Date().toISOString(),
    },
    { status: 200 }
  );
}
