#  Banco de Dados e Introdução a SQL - Exercícios aula 45 <h2>
## Exercício 1

a.
` SHOW DATABASES` -> imprime como resultado o nome do bando de dados. <br><br>
b.` SHOW TABLES` -> imprime as tabelas existentens no banco de dados

## Exercício 2

a. Escreva uma query que crie a atriz Glória Pires, com o id 002, salário R$1.200.000 e data de nascimento 23 de Agosto de 1963

```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);
```

b. O erro de entrada duplicada acontece quando uma chave possue o atributo PRIMARY_KEY. Não é possível ter mais de uma chave na mesma tabela com o mesmo valor. A chave primária é a chave que identifica exclusivamente um registro e é usada em todos os índices.

c. As colunas não correspondem ao número de valores, é necessário adicionar as colunas que estão faltando

```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```

d. Está faltando o campo nome na coluna em questão, é obrigatório a inserção do campo, pois não está sendo permitido NULL. 

``` sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Joana",
  400000,
  "1949-04-18", 
  "male"
);
```

e. O valor de birth_date não corresponde ao tipo da colnuna.

``` sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
```

f. 