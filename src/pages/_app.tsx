import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import '@/styles/globals.scss'
import { ConfigProvider } from 'antd'
import { theme } from '@/styles/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ConfigProvider>
  )
}
