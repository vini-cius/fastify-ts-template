import { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'
import z from 'zod'

export async function helloWorld(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get(
    '/',
    {
      schema: {
        tags: ['hello-world'],
        summary: 'Hello World',
        response: {
          200: z.object({
            message: z.string(),
          }),
        },
      },
    },
    async (_, reply) => {
      return reply.send({
        message: 'Hello World',
      })
    }
  )
}
