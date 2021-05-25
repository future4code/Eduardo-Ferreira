#  Aprofundamento SQL - Exercícios aula 46
## Exercício 1 
___
<br>

a. Deleta a coluna de salário.

b. O comando altera o nome da coluna para 'sex' e o tipo de dado para 'VARCHAR(6)' com no máximo 6 caracteres.

c. O comando altera o nome da coluna 'gender' para 'gender' e o tipo de dado para 'VARCHAR(255)' com no máximo 255 caracteres.

```
d. ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```

<br>

## Exercício 2
___
<br>

```sql
a. UPDATE Actor SET NAME = "Nome Alterado", birth_date = "2015-05-15" WHERE id = "003"
```

``` sql
b. UPDATE Actor SET name = UPPER(name) WHERE name = "Juliana Paes"

UPDATE Actor SET name = "Juliana Paes" WHERE name = "Juliana Paes"
```

``` sql
c. UPDATE Actor SET name = "Teste", salary = 5121221, birth_date = "2011-11-11",gender = "tanto faz" WHERE id = "005"
```

```
d. No caso de um id inexistente, o SQL não retornou nenhum erro, porém, também não fez alteração alguma.

Registros afetados: 0
```

<br>

## Exercício 3
___
<br>

``` sql
a. DELETE FROM Actor WHERE name = "Fernanda Montenegro"
```

``` sql
b. DELETE FROM Actor WHERE gender = "male" AND salary > 1000000
```

<br>

## Exercício 4
___
<br>

