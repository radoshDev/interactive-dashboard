import { FC, useMemo } from 'react'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from 'chart.js'
import { COLORS } from '@/styles/theme'
import { MONTHS } from '@/constants'
import { useTransactions } from '@/context/contextTransaction'
import dayjs from 'dayjs'
import s from './styles.module.scss'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const labels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

type Props = {
  selectedYear: number
}

type DataSet = {
  month: string
  value: number
}

const AnalyticsChar: FC<Props> = ({ selectedYear }) => {
  const { transactions } = useTransactions()
  const options: ChartOptions<'bar'> = useMemo(
    () => ({
      responsive: true,
      scales: {
        x: {
          grid: {
            display: false,
          },
          ticks: {
            color: COLORS.lightPurple,
          },
        },
        y: {
          ticks: {
            color: COLORS.lightPurple,
            padding: 16,
          },
          grid: {
            color: COLORS.lightPurple,
            tickBorderDash: [4, 4],
          },
          border: {
            color: 'transparent',
            dash: [4, 4],
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          backgroundColor: '#464687',
          cornerRadius: {
            bottomLeft: 0,
            bottomRight: 8,
            topLeft: 8,
            topRight: 8,
          },
          caretSize: 0,
          caretPadding: 10,
          xAlign: 'left',
          yAlign: 'top',
          padding: { x: 18, y: 16 },
          callbacks: {
            title: (ctx) => `${MONTHS[ctx[0].label]} ${selectedYear}`,
            label: () => '',
            footer: (ctx) => `$${ctx[0].formattedValue}`,
          },
        },
      },
      parsing: {
        xAxisKey: 'month',
        yAxisKey: 'value',
      },
    }),
    [selectedYear]
  )

  const [incomeData, outcomeData] = useMemo<[DataSet[], DataSet[]]>(() => {
    const income: Record<string, number> = {}
    const outcome: Record<string, number> = {}
    if (!transactions) return [[], []]
    for (const transaction of transactions) {
      const isSelectedYear = dayjs(transaction.date).year() === selectedYear
      if (!isSelectedYear) continue

      const month = dayjs(transaction.date).format('MMM')
      const isOutcome = transaction.amount.startsWith('-')
      if (isOutcome) {
        outcome[month] = (outcome[month] || 0) + +transaction.amount.slice(1)
      } else {
        income[month] = (income[month] || 0) + +transaction.amount
      }
    }
    const incomeDataSet: DataSet[] = Object.entries(income).map((data) => ({
      month: data[0],
      value: data[1],
    }))
    const outcomeDataSet: DataSet[] = Object.entries(outcome).map((data) => ({
      month: data[0],
      value: data[1],
    }))
    return [incomeDataSet, outcomeDataSet]
  }, [selectedYear, transactions])

  const data: ChartData<'bar', DataSet[], string> = {
    labels,
    datasets: [
      {
        label: 'Income',
        data: incomeData,
        backgroundColor: COLORS.purple,
        borderRadius: 99,
        barPercentage: 0.5,
        categoryPercentage: 0.4,
      },
      {
        label: 'Outcome',
        data: outcomeData,
        backgroundColor: COLORS.lightBlue,
        borderRadius: 99,
        barPercentage: 0.5,
        categoryPercentage: 0.4,
      },
    ],
  }

  return <Bar options={options} data={data} className={s.AnalyticChar} />
}

export default AnalyticsChar
