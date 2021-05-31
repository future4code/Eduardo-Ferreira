#  Aula 46 - Knex.js

## Exercício 1 

___

<br>

a. O `raw` devolve exatamente o que estamos buscando com a query, ou seja, um array com os dados.

```js
b.

const searchActor = async (name: string): Promise<any> => {
  const result = await connection
    ({a:'Actor'})
    .select({ 
      actor_name: 'a.name', 
  })
  return result
}
```

```js
c.

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
```

<br>

## Exercício 2
___
<br>

a. 

```js
const update = async (id: string, salary: number) => {
    try{
      await connection({a: 'Actor'})
        .where({ id: `${id}`})
        .update({salary: 3333})
        console.log('ok')
    }catch(error){
      console.log('Error')
    }
  }
```

b. 

```js
const update = async (id: string) => {
    try{
      await connection({a: 'Actor'})
        .where({ id: `${id}`})
        .del()
        console.log('ok')
    }catch(error){
      console.log('Error')
    }
  }
```

c. 

```js
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
```

<br>

## Exercício 3
___
<br>

```js
a.
```