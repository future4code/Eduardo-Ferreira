#  Aula 46 - Knex.js
<br>

## Exercício 1 
***
a. Uma chave estrangeira é um campo que aponta para a chanve primária de outra tabela ou da mesma. Tem como objetivo estabelecer uma relação.

```sql
b.

INSERT INTO Rating
(id, comment, rate, movie_id) VALUES 
("001", "filme muito ruim", 3.7, "003"),
("002", "filme muito ruim", 3.7, "003"),
("003", "filme mais ou menos", 5.9, "002")
```

c. Como o id do filme não existe, o SQL retorna um erro informando que houve uma restrição no comando devido a uma `foreign key` não ter sido encontrada. 

```sql
d. 

ALTER TABLE Films DROP COLUMN Rating
```
e. Ao tentar deletar um filme que possue dados inseridos em sua tabela de referência, o SQL retorna um erro. O erro diz que não possível atualizar uma 'linha' pai, pois a uma restrição de chave estrangeira que falhou.

<br>

## Exercício 2
***
a. A tabela está criando uma relação de N:M, ou seja, um filme poderá ter uma relação com multiplos atores, assim como atores, poderão ter uma relação com multiplos filmes.

```sql
b.

INSERT INTO MovieCast 
(movie_id, actor_id) VALUES
("003", "004"),
("003", "005"),
("005", "005"),
("002", "004"),
("002", "003"),
("003", "004")
```

c. Ao tentar criar uma relação com uma com um ator inexistente, o SQL retorna um erro. O erro diz que não possível atualizar uma 'linha' filho, pois a uma restrição de chave estrangeira que falhou.

d. Ao tentar deletar um ator que possue dados inseridos em sua tabela de referência, o SQL retorna um erro. O erro diz que não possível atualizar uma 'linha' pai, pois a uma restrição de chave estrangeira que falhou.