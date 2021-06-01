import connection from "../server/connection"

export default async function selectAllUsers(name?: string, type?: string, page?: string): Promise<any> {
  let result = null;
  let limit = 5
  let offset = (Number(page) * 5)

  if(page){
    result = await connection.raw(`
     SELECT *
     FROM aula49_exercicio
     ORDER BY id ASC
     LIMIT ${limit} OFFSET ${offset}
  `)
  }
  else if (name) {
    result = await connection.raw(`
     SELECT *
     FROM aula49_exercicio
     WHERE name = "${name}"
     ORDER BY name ASC
     LIMIT 5
  `)
  } else if (type) {
    result = await connection.raw(`
     SELECT *
     FROM aula49_exercicio
     WHERE type = "${type}"
     ORDER BY name ASC
     LIMIT 5
  `)
  } else {
    result = await connection.raw(`
    SELECT *
    FROM aula49_exercicio
    ORDER By email ASC
    LIMIT 5
 `)
  }

  return result[0]
}