import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"
import { UserRepositories } from "../repositories/UserRepositories"




class ListUserSenderComplimentsService{
    async execute(user_id){
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories)

        const compliments = await complimentsRepositories.find({
            where:{
                user_sender : user_id
            }
        })

        return compliments
    }
}

export {ListUserSenderComplimentsService}