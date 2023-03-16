import { FC, useMemo, memo } from 'react'
import cn from 'classnames'
import ArrowIcon from '@/components/ui/icons/ArrowIcon'
import ContentCard from '@/components/ui/ContentCard'
import CustomBadge from '@/components/ui/CustomBadge'
import s from './styles.module.scss'
import { useTransactions } from '@/context/contextTransaction'
import { toCurrencyFormat } from '@/helpers/toCurrencyFormat'
import { toPercentFormat } from '@/helpers/toPercentFormat'
import dayjs from 'dayjs'

type Props = {
  type: 'income' | 'outcome'
}

const TotalTile: FC<Props> = ({ type }) => {
  const { transactions } = useTransactions()
  const totalValue = useMemo(() => {
    return (transactions || []).reduce((acc, curr) => {
      const isOutcomeAmount = curr.amount.startsWith('-')
      if (type === 'outcome' && isOutcomeAmount) {
        return acc + Math.abs(+curr.amount)
      }
      if (type === 'income' && !isOutcomeAmount) {
        return acc + +curr.amount
      }
      return acc
    }, 0)
  }, [transactions, type])
  const { current, previous } = useMemo(() => {
    return (transactions || []).reduce(
      (acc, curr) => {
        const prevMonth = dayjs(new Date()).subtract(1, 'month')
        const isCurrentMoth = dayjs(curr.date).isSame(new Date(), 'month')
        const isPreviousMoth = dayjs(curr.date).isSame(prevMonth, 'month')

        if (!isCurrentMoth && !isPreviousMoth) return acc

        const isOutcomeAmount = curr.amount.startsWith('-')
        if (type === 'outcome' && isOutcomeAmount) {
          return isCurrentMoth
            ? {
                current: acc.current + Math.abs(+curr.amount),
                previous: acc.previous,
              }
            : {
                current: acc.current,
                previous: acc.previous + Math.abs(+curr.amount),
              }
        }
        if (type === 'income' && !isOutcomeAmount) {
          return isCurrentMoth
            ? { current: acc.current + +curr.amount, previous: acc.previous }
            : { current: acc.current, previous: acc.previous + +curr.amount }
        }
        return acc
      },
      { current: 0, previous: 0 }
    )
  }, [transactions, type])

  const currentMonthRaise = current / previous - 1 || 0

  return (
    <ContentCard theme="dark">
      <div className={cn(s.TotalTile, { [s.outcome]: type === 'outcome' })}>
        <div className={s.square}>
          <ArrowIcon />
        </div>
        <div className={s.content}>
          <div className={s.title}>Total {type}</div>
          <div className={s.amount}>
            {toCurrencyFormat(totalValue, 'USD', 3)}
          </div>
        </div>
        <CustomBadge
          type={type === 'income' ? 'positive' : 'negative'}
          text={toPercentFormat(currentMonthRaise)}
        />
      </div>
    </ContentCard>
  )
}

export default memo(TotalTile)
