export interface TransactionResponse {
  transactions: Transaction[]
}

export interface Transaction {
  id: string
  date: string
  amount: string
  currency: string
  category: string
  creditorName: string
}

export type TransactionsData = {
  transactions: Transaction[] | null
  error: string | null
}

export type Option = {
  value: number
  label: string
}
