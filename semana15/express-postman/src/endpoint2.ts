import express, { Request, Response } from 'express'
import { countries } from './countries'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

type country = {
  "id": number,
  "name": string,
  "capital": string,
  "continent": string
}

app.get('/countries/:id', async (req: Request, res: Response) => {

  const result: country | undefined = countries.find(
    country => country.id === Number(req.params.id)
  )

  if (result) {
    res.status(200).send(result)
  } else {
    res.status(404).send("Not found")
  }
})

app.listen(3000, () => {

});