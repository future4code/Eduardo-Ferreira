type Extract = {
  amount: number
  date: number
  description: string
}

type User = {
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
    statement: [{
      amount: 5000,
      date: 2105215089068,
      description: "Deposito de Dinheiro"
    }]
  },
  {
    name: "teste",
    doc: "016.640.800-07",
    birthday: "01/12/1958",
    balance: 0,
    statement: [{
      amount: 5000,
      date: 2105215089068,
      description: "Deposito de Dinheiro"
    }]
  }
]

//