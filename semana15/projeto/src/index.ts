import express from 'express'
import cors from 'cors'
import { Request, Response } from 'express-serve-static-core'
import { users } from './mock/users'

const birthdayAge = require('./helpers/birthday')
const getUserBycpf = require('./helpers/getUserBycpf')

const app = express()
app.use(express.json())
app.use(cors())

let result = users

app.post('/register', (req: Request, res: Response) => {

  const { name, doc, birthday } = req.body
  const newClient = { name, doc, birthday }

  birthdayAge('23/05/1992');
  try {
    if (birthdayAge(birthday) < 18) {
      throw new Error('Ooops! Você ainda não é maior de idade! :)')
    }
    for (const values of users) {
      if (values.doc === doc) {
        throw new Error('Usuário já existe')
      }
    }
    result.push(newClient)
    res.send('Usuário cadastrado')
  } catch (error) {
    res.send(error.message)
  }
})

app.get('/clients', (req: Request, res: Response) => {
  res.send(result)

})

app.get('/search/:cpf', (req: Request, res: Response) => {
  const data = getUserBycpf(result, req.params.cpf)
  try {
    if (data === undefined) {
      throw new Error('O usuário não existe ou o cpf foi digitado incorretamente.')
    }
    res.send(data)
  } catch (error) {
    res.send(error.message)
  }
  res.end()
})

app.put('/client/deposit', (req: Request, res: Response) => {
  const name = req.query.name
  const doc = req.query.cpf
  const value = Number(req.query.value)

  const data = getUserBycpf(result, doc)

  try {
    if (data === undefined) {
      throw new Error('O cpf não existe!')
    }
    if (data.name !== name) {
      throw new Error('Nome do cliente inválido!')
    }
    data.balance = value
    res.send(data)
  } catch (error) {
    res.send(error.message)
  }

  res.end()
})

app.listen(3000, () => {

})