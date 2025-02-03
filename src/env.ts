import z from 'zod'

const schema = z.object({
  SERVER_PORT: z.coerce.number().default(3333),
  DATABASE_URL: z.string(),
  JWT_SECRET: z.string(),
})

export const env = schema.parse(process.env)
