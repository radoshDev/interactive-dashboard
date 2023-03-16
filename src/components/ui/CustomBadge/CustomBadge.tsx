import { FC } from 'react'
import cn from 'classnames'
import s from './styles.module.scss'

type Props = {
  text: string
  type: 'positive' | 'negative'
}

const CustomBadge: FC<Props> = ({ text, type }) => {
  return <div className={cn(s.CustomBadge, s[type])}>{text}</div>
}

export default CustomBadge
