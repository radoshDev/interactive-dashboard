import { FC } from 'react'
import { Button } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/router'
import s from './styles.module.scss'
import { navigation } from '@/routes/navigation'

const Navigation: FC = () => {
  const router = useRouter()
  return (
    <nav className={s.Navigation}>
      {navigation.map(({ Icon, path, title }) => (
        <Link key={path} href={path} title={title}>
          <Button
            className={`${s.iconBtn} ${
              router.pathname === path ? s.active : ''
            }`}
            type="text"
            shape="circle"
            icon={<Icon />}
          />
        </Link>
      ))}
    </nav>
  )
}

export default Navigation
