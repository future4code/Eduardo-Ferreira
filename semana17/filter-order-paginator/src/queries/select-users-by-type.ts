import connection from "../server/connection" 

export default async function selectUserByType(param: string):Promise<any> {
  const result = await connection.raw(`
     SELECT *
     FROM aula49_exercicio
     WHERE type = "${param}"
  `)

  return result[0]
}