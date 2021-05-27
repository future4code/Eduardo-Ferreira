import express, { Request, Response } from "express";
import knex from "knex"
require('dotenv').config()

const app = express()

const connection = knex({
  client: 'mysql',
  connection: {
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_BASE
  }
});

app.get("/actors", async (req: Request, res: Response) => {

  try{
    const result = await connection({a:'Actor', b:'Films'})
    .select({ 
      actor_name: 'a.name', 
      film_title: 'b.title' 
    })
    console.log(result)
  }catch(error){
    console.log(error.message)
    res.send("Erro!")
  } 


  res.end()
})

app.listen(3000, () => {
  console.log('Servidor rodando')
})