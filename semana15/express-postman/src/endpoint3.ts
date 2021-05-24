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

app.get('/countries/search', async (req: Request, res: Response) => {

  let result: country[] = countries

    if (req.query.name || req.query.capital || req.query.continent) {
      result = result.filter(
        country => country.name.includes(req.query.name as string)
      )
    }

    if (req.query.capital) {
      result = result.filter(
        country => country.capital.includes(req.query.capital as string)
      )
    }

    if (req.query.continent) {
      result = result.filter(
        country => country.continent.includes(req.query.continent as string)
      )
    }

    if(result.length) {
      res.status(200).send(result)
    }else {
      res.status(404).send('Dados de pesquisa incorretos!')
    }
})

app.listen(3000, () => {

});