import { FC } from 'react'
import { Divider } from 'antd'
import Image from 'next/image'
import userImg from '@/assets/user-icon.png'
import Navigation from './Navigation'
import s from './styles.module.scss'

const Menu: FC = () => {
  return (
    <div className={s.Menu}>
      <Image src={userImg} width={50} height={50} alt="user avatar" />
      <Divider />
      <Navigation />
    </div>
  )
}

export default Menu
