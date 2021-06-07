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
a. 