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