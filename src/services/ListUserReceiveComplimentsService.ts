import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"
import { UserRepositories } from "../repositories/UserRepositories"




class ListUserReceiveCompliments{
    async execute(user_id){
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories)

        const compliments = await complimentsRepositories.find({
            where:{
                user_receiver : user_id
            }, relations: ["userSender", "userReceiver","tag"]
        })
        return compliments
    }
}

export {ListUserReceiveCompliments}