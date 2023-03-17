import { NextPage } from 'next'
import { Transaction } from '@/types'
import { getTransactions } from '@/services/getTransactions'
import { ErrorMessages } from '@/constants'
import DashboardPage from '@/components/pages/DashboardPage'
import { TransactionsContext } from '@/context/contextTransaction'

type Props = {
  transactions: Transaction[] | null
  error: string | null
}

const Home: NextPage<Props> = ({ transactions, error }) => {
  return (
    <TransactionsContext.Provider value={{ transactions, error }}>
      <DashboardPage />
    </TransactionsContext.Provider>
  )
}
Home.getInitialProps = async () => {
  try {
    const transactions = await getTransactions()
    return { transactions, error: null }
  } catch (error) {
    return { transactions: null, error: ErrorMessages.TRANSACTIONS }
  }
}
export default Home
