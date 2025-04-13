import { initDraw } from "@/draw"
import { useEffect, useRef, useState } from "react"
import { IconButton } from "./IconButton"
import { CircleIcon, Pencil, RectangleHorizontalIcon } from "lucide-react"


type Shape = "circle" | "rect" | "pencil"


export function Canvas({ roomId, socket }: { roomId: string, socket: WebSocket }) {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [selectedTool, setSelectedTool] = useState<Shape>("circle")

    useEffect(()=>{
        window.selectedTool= selectedTool;
    },[selectedTool])




    useEffect(() => {

        if (canvasRef.current) {

            initDraw(canvasRef.current, roomId, socket)
        }

    }, [canvasRef])

    return <div style={{
        height: "100vh",
        overflow: "hidden"
    }}>
        <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight}></canvas>
        <TopBar selectedTool={selectedTool} setSelectedTool={setSelectedTool} />
    </div>

}


function TopBar({ selectedTool, setSelectedTool }: { selectedTool: Shape, setSelectedTool: (s: Shape) => void }) {

    return <div style={{ position: "fixed", top: 10, left: 10 }}>
        <div className="flex gap-4">
            <IconButton activated={selectedTool === "pencil"} icon={<Pencil />} onClick={() => { setSelectedTool("pencil") }} />

            <IconButton activated={selectedTool === "rect"} icon={<RectangleHorizontalIcon />} onClick={() => { setSelectedTool("rect") }} />

            <IconButton activated={selectedTool === "circle"} icon={<CircleIcon />} onClick={() => { setSelectedTool("circle") }} />
        </div>
    </div>
}