 "use client";

import { WS_URL } from "@/config";
import { useEffect, useRef, useState } from "react"
import { Canvas } from "./Canvas";

export function RoomCanvas({roomId}:{roomId:string}) {


    const [socket,setSocket] = useState<WebSocket | null>(null);


    useEffect(()=>{
        const ws= new WebSocket(`${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1NWZkM2YxZi04NTA4LTRmZTAtYmQ2Mi1jNjIwMzExZTk4YTEiLCJpYXQiOjE3NDQ0Nzk2NTN9.DjKqBKZYU_5wGwZ9CX0aleyplZsn0FY_gSjYnbYLPRk`)

        ws.onopen=()=>{
            setSocket(ws);
            const data=JSON.stringify({
                type:"join_room",
                roomId
            })
            console.log(data)
            ws.send(data)
        }
    },[])


    if(!socket){
        return <div className="text-white">
            Connecting server...
        </div>

    }


    return <div>
            <Canvas roomId={roomId} socket={socket}/>
    </div>


}