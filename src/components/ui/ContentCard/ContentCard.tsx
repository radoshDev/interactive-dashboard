import { FC, ReactNode } from 'react'
import cn from 'classnames'
import s from './styles.module.scss'

type Props = {
  theme: 'dark' | 'light'
  children: ReactNode
  className?: string
}

const ContentCard: FC<Props> = ({ theme, children, className }) => {
  return (
    <div
      className={cn(s.ContentCard, className, { [s.dark]: theme === 'dark' })}
    >
      {children}
    </div>
  )
}

export default ContentCard
