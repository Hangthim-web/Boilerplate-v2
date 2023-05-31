import { z } from 'zod'

export const createPostDto = z.object({
    body: z.object({
        name: z.string({
            required_error: 'name is required',
        }),
        address: z.string({
            required_error: 'address is required',
        }),
        email: z
            .string({
                required_error: 'email is required',
            })
            .email('not a valid email'),
    }),
})
