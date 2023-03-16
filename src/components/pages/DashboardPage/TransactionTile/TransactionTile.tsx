import { FC, useState } from 'react'
import ContentCard from '@/components/ui/ContentCard'
import TransactionHeader from './TransactionHeader'
import { useTransactions } from '@/context/contextTransaction'
import TransactionTable from './TransactionTable'

const TransactionTile: FC = () => {
  const { transactions } = useTransactions()
  const [searchKey, setSearchKey] = useState('')
  const [dateRange, setDateRange] = useState<[string, string]>(['', ''])

  function handleSearch(value: string) {
    setSearchKey(value.toLowerCase())
  }

  function handleDateRange(range: [string, string]) {
    setDateRange(range)
  }

  return (
    <ContentCard theme="dark">
      <TransactionHeader
        onSearch={handleSearch}
        onSelectDate={handleDateRange}
      />
      <TransactionTable
        transactions={transactions || []}
        searchKey={searchKey}
        dateRange={dateRange}
      />
    </ContentCard>
  )
}

export default TransactionTile
