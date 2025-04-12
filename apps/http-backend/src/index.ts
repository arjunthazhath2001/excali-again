import express from 'express'
import cors from 'cors'
import { middleware } from './middleware'
import { SignUpSchema, SignInSchema, RoomSchema } from "@repo/common/types"
import bcrypt from 'bcrypt'
import { prismaClient } from '@repo/db/client'
import jwt from 'jsonwebtoken'
import { JwtSecret } from '@repo/backend-common/config'

const app = express()
app.use(cors())
app.use(express.json())



app.post('/signup', async (req, res) => {

    const parsedBody = SignUpSchema.safeParse(req.body)

    if (!parsedBody.success) {
        res.status(401).json({ message: parsedBody.error.issues[0] })
        return
    }

    const { name, email, password } = parsedBody.data

    const hashedPassword = await bcrypt.hash(password, 5)

    try {
        const user = await prismaClient.user.create({
            data: {
                name,
                email,
                password: hashedPassword
            }
        })

        if (user) {
            res.status(200).json({ message: user.id })
        }
    } catch (e) {
        res.status(401).json({ message: "Some error has occured try again later" })
    }



})




app.post('/signin', async (req, res) => {
    const parsedBody = SignInSchema.safeParse(req.body)

    if (!parsedBody.success) {
        res.status(404).json({ message: parsedBody.error.issues[0] })
        return
    }

    const { email, password } = req.body

    try {
        const existingUser = await prismaClient.user.findFirst({
            where: {
                email,
            }
        })

        if (existingUser) {
            const verified = await bcrypt.compare(password, existingUser?.password)
            if (verified) {
                const token = jwt.sign({ userId: existingUser.id }, JwtSecret)
                res.json({ "token": token })
            } else {
                res.json({ message: "Wrong password" })
            }
        } else {
            res.json({ message: "User does not exist. Please signup" })
        }
    } catch (error) {
        res.json({ message: "Error connecting to the database" })
        return
    }

})



app.post('/room', middleware, async (req, res) => {
    const parsedBody= RoomSchema.safeParse(req.body)

    if(!parsedBody.success){
        res.status(400).json({message:parsedBody.error.issues[0]})
        return
    }

    const slug= req.body.name
    const userId= req.userId as string


    try{
        const room = await prismaClient.room.create({
        data:{
            slug,
            adminId:userId
        }
    })

    if(room){
        res.status(200).json({Room:`${room.id} and created at: ${room.createdAt}`})
    }}
    catch(error){
        res.json("Error creating a room. Try later")
    }

})


app.get('/chats/:roomId', async(req,res)=>{
    
    try{const roomId= Number(req.params.roomId)

    const messages= await prismaClient.chat.findMany({
        where:{
            roomId
        },
        orderBy:{
            "id": "desc"
        },
        take:50
    })

    res.json(messages)
    } catch(e){
        res.json({messages:[]})
    }

})



app.listen(3001, () => { console.log("listening at port 3001") })
