import express, { Request, Response } from 'express'
import { countries } from './countries'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())


app.put('/countries/edit/:id', async (req: Request, res: Response) => {

  try {
    const { name, capital } = req.body
    const index: number = countries.findIndex(country => Number(req.params.id) === country.id)

    if (index === -1) {
      throw new Error("O id informado não existe!")
    }

    if (!name || !capital) {
      throw new Error("Dados incompletos!")
    }

    countries[index].name = name
    countries[index].capital = capital
    res.status(200).send(req.body)

  } catch (error) {
    res.status(404).send(error.message)
  }

})

app.listen(3000, () => {

});