import { Extract } from "../mock/users"

const deposit = (value: number): Extract => {
  const date = new Date()

  return {
    date: date.toLocaleDateString(),
    description: 'Depósito de dinheiro',
    amount: value
  }
}

module.exports = deposit