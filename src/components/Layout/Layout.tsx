import { FC, ReactElement } from 'react'
import Menu from '../Menu'
import s from './styles.module.scss'

type Props = {
  children: ReactElement
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className={s.Layout}>
      <Menu />
      <main>{children}</main>
    </div>
  )
}

export default Layout
