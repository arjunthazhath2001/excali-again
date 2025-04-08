import {z} from 'zod'

export const SignUpSchema= z.object({
    name: z.string().max(50),
    email: z.string().email(),
    password: z.string().min(5).max(50)
})


export const SignInSchema = z.object({
    email: z.string().email(),
    password: z.string().min(5).max(50)

})


export const RoomSchema= z.object({
    name: z.string().min(1).max(50)
})


