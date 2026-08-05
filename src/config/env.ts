function getEnvVar(key: string, defaultValue?: string): string {
  const value = process.env[key] || defaultValue;
  if (!value) {
    throw new Error(`[Env Config Error] Thiếu biến môi trường bắt buộc: ${key}`);
  }
  return value;
}

export const env = {
  SUPABASE_URL: getEnvVar('NEXT_PUBLIC_SUPABASE_URL', 'https://placeholder.supabase.co'),
  SUPABASE_ANON_KEY: getEnvVar('NEXT_PUBLIC_SUPABASE_ANON_KEY', 'placeholder-key'),
  SITE_URL: getEnvVar('NEXT_PUBLIC_SITE_URL', 'https://oanhrussian.vercel.app'),
  NODE_ENV: process.env.NODE_ENV || 'development',
} as const;
