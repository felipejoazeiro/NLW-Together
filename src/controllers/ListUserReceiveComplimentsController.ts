import { Request, Response } from "express";
import { ListUserReceiveCompliments } from "../services/ListUserReceiveComplimentsService";



class ListUserReceiveComplimentsController{
    async handle(req: Request, res: Response){
        const {user_id} = req
        const listUserReceiveComplimentsService = new ListUserReceiveCompliments();

        const compliments = await listUserReceiveComplimentsService.execute(user_id)

        return res.json(compliments)
    }
}

export{ListUserReceiveComplimentsController}