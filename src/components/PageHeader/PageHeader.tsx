import Head from 'next/head'
import { FC, ReactNode } from 'react'
import s from './styles.module.scss'

type Props = {
  title: string
  children: ReactNode
}

const PageHeader: FC<Props> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div className={s.PageHeader}>
        <h1 className={s.title}>{title}</h1>
        <div className={s.content}>{children}</div>
      </div>
    </>
  )
}

export default PageHeader
