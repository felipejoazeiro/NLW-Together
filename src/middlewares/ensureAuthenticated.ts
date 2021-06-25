import { Request,Response,NextFunction } from "express";
import {verify} from 'jsonwebtoken'

interface IPayload{
    sub: string;
}

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction){
    //verificar se usuario admin

    const authToken = req.headers.authorization

    if(!authToken){
        return res.status(401).end()
    }

    const [,token] = authToken.split(' ')

    try{
        const {sub} = verify(token,"98eebf837f87c03068f968e36c411246") as IPayload;
        
        req.user_id = sub
        
        return next()
    }catch(err){
        return res.status(401).end
    }



}