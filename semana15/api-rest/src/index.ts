//import { users } from './mock/users'

/** CONFIGS */

import express, { Request, Response } from 'express'
import { users } from './mock/users'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

type Users = {
  "id": number,
  "name": string,
  "email": string,
  "type": string,
  "age": number
}

let result: Users[] = users
/** Exercício 1 */

app.get('/users', (req: Request, res: Response) => {
  
  res.status(200).send(users)

})

/** Exercício 2 */

app.get('/users/:type', (req: Request, res: Response) => {

  const convert = req.params.type.toLowerCase()
  
  if (convert === 'admin' || convert === 'normal') {
    if (convert == 'admin') {
      result = result.filter(user => user.type === 'ADMIN')
    }

    if (convert == 'normal') {
      result = result.filter(user => user.type === 'NORMAL')
    }
    res.status(200).send(result)
  }else {
    res.status(404).send("Nada foi encontrado!")
  }
})

/** Exercício 3 */

app.get('/search', (req: Request, res: Response) => {

  if(Object.values(req.query).length !== 0){
    result = result.filter(user => user.name.includes(req.query.name as string))
    if(result.length === 0){
      res.status(404).send("Nada foi encontrado!")
    }else{
      res.status(200).send(result)
    }
  }else{
    res.status(404).send("Nada foi encontrado!")
  }

})

/** Exercício 4 */

app.post('/create/user', (req: Request, res: Response) => {

  const {id, name, email, type, age} = req.body

  const newUser = { id, name, email, type, age}

  result.push(newUser)

  res.status(200).send('ok')
})


/** ESTABELECE CONEXÃO COM A PORTA 3000 */

app.listen(3000, () => {
  console.log('Server is running in port 3000') 
})