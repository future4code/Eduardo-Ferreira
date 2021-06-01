import { Request, Response } from "express"
import selectUserByType from "../queries/select-users-by-type"
import { user } from "../types/user"

export const getUserByType = async(req: Request, res: Response): Promise<void> =>{
  try {
     const users: user[] = await selectUserByType(req.params.type as string)

     if(!users.length){
        res.statusCode = 404
        throw new Error("No recipes found")
     }

     res.status(200).send(users)
     
  } catch (error) {
     console.log(error)
     res.send(error.message || error.sqlMessage)
  }
}

