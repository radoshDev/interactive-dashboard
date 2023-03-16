import { ChangeEvent, FC, useState, memo } from 'react'
import CalendarIcon from '@/components/ui/icons/CalendarIcon'
import DropdownArrowIcon from '@/components/ui/icons/DropdownArrowIcon'
import { Input, DatePicker } from 'antd'
import s from './styles.module.scss'

type RangeValue = Parameters<
  NonNullable<React.ComponentProps<typeof DatePicker.RangePicker>['onChange']>
>[0]

type Props = {
  onSearch: (val: string) => void
  onSelectDate: (range: [string, string]) => void
}

const TransactionHeader: FC<Props> = ({ onSearch, onSelectDate }) => {
  const [inputValue, setInputValue] = useState('')

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value)
  }

  function handleDateChange(values: RangeValue) {
    const startDate = values?.[0]?.toISOString() || ''
    const endDate = values?.[1]?.toISOString() || ''
    onSelectDate([startDate, endDate])
  }

  return (
    <div className={s.TransactionHeader}>
      <h4 className={s.title}>Transaction</h4>
      <Input.Search
        placeholder="Search for anything...."
        className={s.search}
        size="large"
        value={inputValue}
        onChange={handleChange}
        onSearch={onSearch}
        allowClear
      />
      <div className={s.pickerWrapper}>
        <CalendarIcon />
        <DatePicker.RangePicker
          size="large"
          format="D MMM"
          className={s.picker}
          separator="-"
          suffixIcon={<DropdownArrowIcon />}
          onChange={handleDateChange}
        />
      </div>
    </div>
  )
}

export default memo(TransactionHeader)
