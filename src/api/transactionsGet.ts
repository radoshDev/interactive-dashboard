import { TRANSACTIONS_URL } from '@/constants'
import { TransactionResponse } from '@/types'
import { apiGet } from './api'

export const transactionsGet = () => {
  return apiGet<TransactionResponse>(TRANSACTIONS_URL)
}
