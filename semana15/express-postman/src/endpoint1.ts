import express, { Request, Response } from 'express'
import { countries } from './countries'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

app.get('/countries/all', async (req: Request, res: Response) => {

  const result = countries.map(country => ({
    id: country.id,
    name: country.name
  }))

  res
  .status(200)
  .send(result)
})

app.listen(3000, () => {
 
});