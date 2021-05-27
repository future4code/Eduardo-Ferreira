import knex from "knex"
require('dotenv').config()

const connection = knex({
  client: 'mysql',
  connection: {
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_BASE
  }
});

/* if(knex){
  console.log(knex)
} */

connection({a:'Actor'}).select({ title: 'a.title' })

console.log();