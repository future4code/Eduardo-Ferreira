export type Extract = {
  amount: number
  date: string
  description: string
}

export type User = {
  name: string
  doc: string
  birthday: string
  balance?: number
  statement?: Extract[]
}

// Interage com pagar conta, adicionar saldo e transferência interna

export const users: User[] = [
  {
    name: "teste",
    doc: "016.640.800-07",
    birthday: "01/12/1958",
    balance: 0,
    statement: []
  },
  {
    name: "teste",
    doc: "016.640.800-07",
    birthday: "01/12/1958",
    balance: 0,
    statement: []
  }
]

//