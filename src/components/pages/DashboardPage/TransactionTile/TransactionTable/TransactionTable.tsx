import { FC, useMemo, memo } from 'react'
import { Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { Transaction } from '@/types'
import CustomBadge from '@/components/ui/CustomBadge'
import dayjs from 'dayjs'
import { withDollarSing } from '@/helpers/withDollarSing'
import s from './styles.module.scss'

type Props = {
  transactions: Transaction[]
  searchKey: string
  dateRange: [string, string]
}

const columns: ColumnsType<Transaction> = [
  {
    title: 'Creditor Name',
    dataIndex: 'creditorName',
    key: 'creditorName',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    render: (date) => dayjs(date).format('ddd,D MMM YYYY'),
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
    render: withDollarSing,
  },
  {
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
    render: (text) => <CustomBadge text={text} type="positive" />,
  },
]

const TransactionTable: FC<Props> = ({
  transactions,
  searchKey,
  dateRange,
}) => {
  const filteredBySearchTransactions = useMemo(
    () =>
      transactions.filter(
        (transaction) =>
          transaction.creditorName.toLowerCase().includes(searchKey) ||
          transaction.category.toLowerCase().includes(searchKey)
      ),
    [searchKey, transactions]
  )

  const filteredTransactions = useMemo(() => {
    return filteredBySearchTransactions.filter(({ date }) => {
      const [startDate, endDate] = dateRange
      const transactionDate = dayjs(date)

      const isEqualStart = transactionDate.isSame(startDate, 'day')
      const isGreaterThanStart = transactionDate.isAfter(startDate, 'day')
      const isEqualEnd = transactionDate.isSame(endDate, 'day')
      const isLessThanEnd = transactionDate.isBefore(endDate, 'day')

      if (!startDate && !endDate) return true
      if (!startDate) return isEqualEnd || isLessThanEnd
      if (!endDate) return isEqualStart || isGreaterThanStart

      return (
        (isEqualStart || isGreaterThanStart) && (isEqualEnd || isLessThanEnd)
      )
    })
  }, [dateRange, filteredBySearchTransactions])
  return (
    <Table
      rowKey="id"
      pagination={{ hideOnSinglePage: true, pageSize: 3 }}
      columns={columns}
      dataSource={filteredTransactions}
      className={s.TransactionTable}
      locale={{ emptyText: 'Not Found Transactions' }}
    />
  )
}

export default memo(TransactionTable)
