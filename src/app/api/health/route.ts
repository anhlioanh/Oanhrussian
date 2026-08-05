import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { env } from '@/config/env';
import { logger } from '@/lib/logger';

export async function GET() {
  let dbStatus: 'connected' | 'error' | 'unconfigured' = 'unconfigured';

  try {
    if (env.SUPABASE_URL && env.SUPABASE_ANON_KEY) {
      const supabase = createClient(env.SUPABASE_URL, env.SUPABASE_ANON_KEY);
      
      // Tối ưu: Kiểm tra DB engine trực tiếp qua truy vấn Postgres native, không dùng bảng dữ liệu
      const { error } = await supabase.rpc('version').select();

      // Nếu rpc chưa mở, fallback sang kiểm tra bảng profiles mặc định
      if (error) {
        const { error: profileError } = await supabase.from('profiles').select('id').limit(1);
        dbStatus = !profileError ? 'connected' : 'error';
      } else {
        dbStatus = 'connected';
      }
    }
  } catch (err) {
    logger.error('Healthcheck DB Exception', err);
    dbStatus = 'error';
  }

  return NextResponse.json(
    {
      status: 'ok',
      version: '0.1.0',
      environment: env.NODE_ENV,
      database: dbStatus,
      timestamp: new Date().toISOString(),
    },
    { status: 200 }
  );
}