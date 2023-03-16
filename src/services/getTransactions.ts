import { transactionsGet } from '@/api/transactionsGet'
import { Transaction } from '@/types'

export const getTransactions = async (): Promise<Transaction[]> => {
  const response = await transactionsGet()
  return response.data.transactions.sort((a, b) =>
    new Date(a.date).getTime() > new Date(b.date).getTime() ? -1 : 0
  )
}
