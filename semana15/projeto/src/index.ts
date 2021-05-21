import express from 'express'
import cors from 'cors'
import { Request, Response } from 'express-serve-static-core'
import { users } from './mock/users'

const app = express()
app.use(express.json())
app.use(cors())

app.post('/register', (req: Request, res: Response) => {

  const { name, doc, birthday, balance } = req.body
  const newClient = { name, doc, birthday, balance }

  //users.push(newClient)
  try {
    for (const values of users) {
      if (values.doc === req.body.doc) {
        res.send('usuário já existe')
        throw new Error('Usuário já existe')
      }

      users.push(newClient)
      res.send('Usuário cadastrado com sucesso!')
    }
  } catch(error) {
    res.send(error.message)
  }
  //res.send(req.body.doc)
})

app.get('/clients', (req: Request, res: Response) => {

  res.send(users)
})

app.listen(3000, () => {

})