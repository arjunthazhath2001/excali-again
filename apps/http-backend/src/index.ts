import express from 'express'
import cors from 'cors'
import { middleware } from './middleware'
import {SignUpSchema,SignInSchema,RoomSchema} from "@repo/common/types"

const app= express()
app.use(cors())
app.use(express.json())



app.post('/signup', async (req,res)=>{

    const parsedBody= SignUpSchema.safeParse(req.body)

    if(!parsedBody.success){
        res.status(401).json({message:parsedBody.error.issues[0]})
    }

})


app.post('/signin', async (req,res)=>{
    
})


app.post('/room', middleware, async (req,res)=>{

    
})






app.listen(3001, ()=>{console.log("listening at port 3001")})
