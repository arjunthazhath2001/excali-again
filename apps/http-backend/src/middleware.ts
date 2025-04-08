import { Request,Response,NextFunction } from "express";
import {JwtSecret} from "@repo/backend-common/config"

import jwt, { JwtPayload } from 'jsonwebtoken'



declare global{
    namespace Express{
    export interface Request{
        userId?: string
    }
}
}


export function middleware(req:Request,res:Response,next:NextFunction){
    const auth= req.headers.authorization;

    if(!auth || !auth.startsWith("Bearer")){
        res.status(401).json("Wrong auth credentials")
        return
    }

    const token= auth.split(" ")[1] || ""

    const decodedToken= jwt.verify(token,JwtSecret) as JwtPayload

    if(decodedToken){
        req.userId= decodedToken.userId
        next()
    } else{
        res.status(401).json("You are not authorized")
        return
    }

}