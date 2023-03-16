import { TransactionsData } from '@/types'
import { createContext, useContext } from 'react'

export const TransactionsContext = createContext<TransactionsData>({
  transactions: null,
  error: null,
})

export const useTransactions = () => useContext(TransactionsContext)
