import { getCustomRepository } from "typeorm"
import {compare} from "bcryptjs"
import {sign} from "jsonwebtoken"
import { UserRepositories } from "../repositories/UserRepositories"

interface IAuthenticateRequest{
    email: string,
    password: string
}

class AuthenticateUserService{
    async execute({email, password}: IAuthenticateRequest){
        const userRepositories = getCustomRepository(UserRepositories)
        //verificars e o email existe
        const user = await userRepositories.findOne({
            email
        })
        if(!user){
            throw new Error("Email/PassWord incorrect")
        }
        //verificar se senha está correta
        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch){
            throw new Error("Email/PassWord incorrect")
        }
        //Gerar Token
        const token = sign({
            email: user.email
        },"98eebf837f87c03068f968e36c411246",{
            subject: user.id,
            expiresIn: "1d"
        })
        return token
    }
}

export{AuthenticateUserService}