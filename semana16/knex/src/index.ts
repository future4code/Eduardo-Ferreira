import express, { Request, Response } from "express";
import knex from "knex"
require('dotenv').config()

const app = express()

const connection = knex({
  client: 'mysql',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_BASE
  }
});

app.get("/actors", (req: Request, res: Response) => {

  const search = async (gender: string): Promise<void> => {
    try {
      const result = await connection({ a: 'Actor' })
        .count('gender')
        .groupBy('a.gender')
        .where('gender', '=', `${gender}`)
      console.log(result)
    } catch (error) {
      console.log(error.message)
      res.send("Erro!")
    }
  }
  search('male')
  res.end()
})

app.listen(3000, () => {
  console.log('Servidor rodando')
})


app.put("/actor/update", (req: Request, res: Response) => {

  const update = async (id: string, salary: number) => {
    try {
      await connection({ a: 'Actor' })
        .where({ id: `${id}` })
        .update({ salary: 3333 })
      console.log('ok')
    } catch (error) {
      console.log('Error')
    }
  }

  update('001', 6659999)
  res.end()
})

app.delete("/actor/delete", (req: Request, res: Response) => {

  const update = async (id: string) => {
    try {
      await connection({ a: 'Actor' })
        .where({ id: `${id}` })
        .del()
      console.log('ok')
    } catch (error) {
      console.log('Error')
    }
  }

  update('001')
  res.end()
})


app.get("/actor/avg", (req: Request, res: Response) => {

  const data = async (gender: string) => {
    try {
      return await connection({ a: 'Actor' })
        .avg('salary')
        .where('gender', '=', `${gender}`)
        console.log('ok')
    } catch (error) {
      console.log('Error')
    }
  }

  data('male').then((res) => {
    console.log(res);
  })
  res.end()
})