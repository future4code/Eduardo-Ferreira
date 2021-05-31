import { User } from "../mock/users"

const getUserBycpf = (result: User[], reqParam: string): User | undefined  => {
  const data = result.find(user => reqParam === user.doc)
  return data
}

module.exports = getUserBycpf