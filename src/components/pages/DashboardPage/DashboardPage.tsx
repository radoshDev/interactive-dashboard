import { FC, ReactNode } from 'react'
import { Alert } from 'antd'
import PageHeader from '@/components/PageHeader'
import { useTransactions } from '@/context/contextTransaction'
import TotalTile from './TotalTile'
import TransactionTile from './TransactionTile'
import AnalyticsTile from './AnalyticsTile'
import s from './styles.module.scss'

const DashboardPage: FC = () => {
  const { transactions, error } = useTransactions()

  let content: ReactNode
  if (error) content = <Alert message={error} type="error" showIcon />
  else if (transactions?.length === 0)
    content = (
      <Alert message="There are no transaction yet" type="info" showIcon />
    )
  else
    content = (
      <>
        <div className={s.DashboardTiles}>
          <div className={s.DashboardTotal}>
            <TotalTile type="income" />
            <TotalTile type="outcome" />
          </div>
          <div className={s.transaction}>
            <TransactionTile />
          </div>
          <div className={s.analytics}>
            <AnalyticsTile />
          </div>
        </div>
      </>
    )

  return <PageHeader title="Dashboard">{content}</PageHeader>
}

export default DashboardPage
