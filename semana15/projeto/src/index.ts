import express from 'express'
import cors from 'cors'
import { Request, Response } from 'express-serve-static-core'
import { users } from './mock/users'

const app = express()
app.use(express.json())
app.use(cors())

app.post('/register', (req: Request, res: Response) => {
  
  const birthdayAge = require('./helpers/birthday')
  let result = users
  const { name, doc, birthday } = req.body
  const newClient = { name, doc, birthday }

  birthdayAge('23/05/1992');
  try {
    if(birthdayAge(birthday) < 18){
      throw new Error('Ooops! Você ainda não é maior de idade! :)')
    }
    for (const values of users){
      if (values.doc === doc) {
        throw new Error('Usuário já existe')
      }
    }
    result.push(newClient)
    res.send('Usuário cadastrado')
  } catch(error) {
    res.send(error.message)
  }
})

app.post('/search', (req: Request, res: Response) => {
  try{
    
  }catch{

  } 
})

app.get('/clients', (req: Request, res: Response) => {

  res.send(users)
})

app.listen(3000, () => {

})