import { z } from 'zod'

const formValidationSchema = z.object({
  fullName: z.string().optional(),
  subject: z.string().optional(),
  message: z
    .string()
    .min(20, { message: 'Must be 20 or more characters long' })
    .max(450, { message: 'Must be 450 or fewer characters long' }),
  email: z.string().email(),
})

export { formValidationSchema }
