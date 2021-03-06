import { Request,Response,NextFunction } from "express";
import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories";

export async function ensureAdmin(req: Request, res: Response, next: NextFunction){
    
    const {user_id} = req
    console.log(user_id)

    const userRepositories = getCustomRepository(UserRepositories) 

    const {admin} = await userRepositories.findOne(user_id)
    //verificar se usuario admin


    if(admin){
        return next()
    }

    return res.status(401).json({
        error: "Unauthorized",
    })
}