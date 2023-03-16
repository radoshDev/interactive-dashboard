import { Dispatch, FC, SetStateAction, useMemo } from 'react'
import dayjs from 'dayjs'
import { Select } from 'antd'
import CircleIcon from '@/components/ui/icons/CircleIcon'
import { useTransactions } from '@/context/contextTransaction'
import { COLORS } from '@/styles/theme'
import { Option } from '@/types'
import s from './styles.module.scss'

type Props = {
  selectedYear: number
  setSelectedYear: Dispatch<SetStateAction<number>>
}

const AnalyticsHeader: FC<Props> = ({ selectedYear, setSelectedYear }) => {
  const { transactions } = useTransactions()
  const options = useMemo<Option[]>(() => {
    return (transactions || [])
      .reduce((acc, curr) => {
        const year = dayjs(curr.date).year()

        if (acc.findIndex((option) => option.value === year) > -1) return acc

        return [...acc, { value: year, label: `${year}` }]
      }, [] as Option[])
      .sort((a, b) => (a.value < b.value ? -1 : 0))
  }, [transactions])

  return (
    <div className={s.AnalyticsHeader}>
      <h4 className={s.title}>Analytics</h4>
      <div className={s.tips}>
        <div className={s.item}>
          <CircleIcon style={{ color: COLORS.purple }} />
          <div className={s.caption}>Income</div>
        </div>
        <div className={s.item}>
          <CircleIcon style={{ color: COLORS.lightBlue }} />
          <div className={s.caption}>Outcome</div>
        </div>
      </div>
      <Select
        value={selectedYear}
        onSelect={setSelectedYear}
        className={s.select}
        options={options}
      />
    </div>
  )
}

export default AnalyticsHeader
