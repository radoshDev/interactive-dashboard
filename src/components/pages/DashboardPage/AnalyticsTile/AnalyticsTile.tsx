import { FC, useState, memo } from 'react'
import ContentCard from '@/components/ui/ContentCard'
import AnalyticsHeader from './AnalyticsHeader'
import AnalyticsChar from './AnalyticsChar'

const AnalyticsTile: FC = () => {
  const [selectedYear, setSelectedYear] = useState(2018)
  return (
    <ContentCard theme="dark">
      <AnalyticsHeader
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
      />
      <AnalyticsChar selectedYear={selectedYear} />
    </ContentCard>
  )
}

export default memo(AnalyticsTile)
