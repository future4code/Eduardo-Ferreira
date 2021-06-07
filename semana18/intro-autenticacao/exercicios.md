#  Aula 46 - Knex.js

## Exercício 1 
***
a. Toericamente é mais viável por questão de segurança. Mas ao mesmo tempo, pode ter um custo de desempenho em tabelas com muitos registros.

b.
```js
  import { v4 } from "uuid";

  export function generateId(): string {
      return v4();
  }

```

<br>

## Exercício 2
***
a. O código em questão está armazenando o nome de uma tabela, acessando um banco de dados através do knex e criando uma query de consulta para a tabela armazenada na const.

b.
```sql
CREATE TABLE User (
	id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
```

c.
```js
const createUser = async (
		id: string, 
		email: string, 
		password: string) => {
	  await connection
	    .insert({
	      id,
	      email,
	      password,
	    })
	    .into(userTableName);
	};
```

<br>

## Exercício 3
***
a. A linha deixa explícito o tipo de dado que está sendo passado por parâmetro.

b.
```ts
type AuthenticationData = {
  id: string;
}

import * as jwt from "jsonwebtoken";

  const expiresIn = "1min";
  const generateToken(input: AuthenticationData): string {
    const token = jwt.sign(
      {
        id: input.id,
      },
      process.env.JWT_KEY as string,
      {
        expiresIn
      }
    );
    return token;
  }
}

``` 

<br>

## Exercício 4
***

a.
```js
app.use('/user/signup', async (req: Request, res: Response) => {

  if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Invalid email");
  }

  // Item c. Validação da senha
  if (!req.body.password || req.body.password.length < 6) {
    throw new Error("Invalid password");
  }

  const id = generateId();

  
  await createUser(id, userData.email, userData.password);

  const token = generateToken({
    id,
  });

  res.status(200).send({
      token,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }

})
```

<br>

## Exercício 5
***

a. 

```js
const getUserByEmail = async(email: string): Promise<any> => {
   const result = await connection
     .select("*")
     .from(userTableName)
     .where({ email });

   return result[0];
  }
}
```

<br>

## Exercício 6
***

a.
```js
app.post("/user/login", async (req: Request, res: Response) => {
  try {
    // Item b. Validação do email
    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }

    const userData = {
      email: req.body.email,
      password: req.body.password,
    };


    const user = await getUserByEmail(userData.email);

    if (user.password !== userData.password) {
      throw new Error("Invalid password");
    }

    
    const token = generateToken({
      id: user.id,
    });

    res.status(200).send({
      token,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```

<br>

## Exercício 7
***

