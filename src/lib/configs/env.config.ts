import { z } from 'zod';

const envSchema = z.object({
  ALCHEMY_API_KEY: z.string().min(1, 'Alchemy API Key is required')
});

const processEnv = {
  ALCHEMY_API_KEY: import.meta.env.VITE_ALCHEMY_API_KEY
} as const;

const parsed = envSchema.safeParse(processEnv);

export const env = {
  alchemyKey: parsed.data?.ALCHEMY_API_KEY,
  isProduction: import.meta.env.PROD ?? false
} as const;
