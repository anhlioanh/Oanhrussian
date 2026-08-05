import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { env } from '@/config/env';
import { logger } from '@/lib/logger';

export async function GET() {
  let dbStatus: 'connected' | 'error' | 'unconfigured' = 'unconfigured';

  try {
    if (env.SUPABASE_URL && env.SUPABASE_ANON_KEY) {
      const supabase = createClient(env.SUPABASE_URL, env.SUPABASE_ANON_KEY);
      // Kiểm tra thông qua bảng healthcheck tiêu chuẩn
      const { error } = await supabase.from('healthcheck').select('id').limit(1);

      if (!error) {
        dbStatus = 'connected';
      } else {
        // Nếu chưa tạo bảng healthcheck trong SQL editor
        logger.warn('Healthcheck table query returned error', error.message);
        dbStatus = 'error';
      }
    }
  } catch (err) {
    logger.error('Healthcheck DB Connection Exception', err);
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
