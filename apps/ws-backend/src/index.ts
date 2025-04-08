import { WebSocket, WebSocketServer } from 'ws';
import { JwtSecret } from '@repo/backend-common/config';
import jwt from 'jsonwebtoken'
import { prismaClient } from "@repo/db/client"

const wss = new WebSocketServer({ port: 8080 });

interface User {
    ws: WebSocket,
    rooms: string[]
    userId: string
}

const users: User[] = []

function checkUser(token: string): string | null {
    try{
        const decoded = jwt.verify(token, JwtSecret)

    if (typeof decoded === "string") {
        return null
    }

    if (!decoded || !decoded.userId) {
        return null
    }

    return decoded.userId
    } catch(e){
        return null
    }
}



wss.on('connection', function connection(ws, request) {

    const url = request.url

    if (!url) {
        return
    }

    const queryParams = new URLSearchParams(url.split('?')[1])

    const token = queryParams.get("token") || "";
    const userId = checkUser(token)

    if (userId == null) {
        ws.close()
        return
    }

    users.push({
        userId,
        rooms:[],
        ws
    })


    ws.on('message', async function message(data) {

        const parsedData = JSON.parse(data as unknown as string)


        //intent is to join_room and the data needed to perform that intent is roomId
        if(parsedData.type==="join_room"){
            const user= users.find(x=>x.ws===ws)

            if(!user){
                return
            }

            user?.rooms.push(parsedData.roomId)
            
        }

        //intent is to leave_room and the data needed to perform that intent is roomId

        if(parsedData.type==="leave_room"){
            const user= users.find(x=>x.ws===ws)

            if(!user){
                return
            }

            user.rooms= user?.rooms.filter(x=> x !=parsedData.roomId)  //going forward user.rooms [] will only have those roomIds which he dint exit 
        }


        //intent is to send a chat and the data needed to perform that intent is ---> roomId, message


        if(parsedData.type==="chat"){

            const roomId= parsedData.roomId
            const message= parsedData.message

            await prismaClient.chat.create({
                data:{
                    message,
                    userId,
                    roomId
                }
            })


            users.forEach(user=>{
                if(user.rooms.includes(roomId)){
                    user.ws.send(JSON.stringify({
                        type:"chat",
                        message:message,
                        roomId
                    }))
                }
            })
        }


    });

});