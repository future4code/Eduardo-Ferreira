import { Request, Response } from "express"
import selectAllUsers from "../queries/select-all-users"
import { user } from "../types/user"

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
   try {
      const users: user[] = await selectAllUsers(
         req.query.name as string,
         req.query.type as string,
         req.query.page as string
      )

      if (!users.length) {
         res.statusCode = 404
         throw new Error("No recipes found")
      }

      res.status(200).send(users)

   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}