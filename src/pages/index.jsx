import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Fields } from '@/components/Fields'
import { ReadMoreBox } from '@/components/ReadMoreBox'
import { FeatureVideo } from '@/components/FeatureVideo'
import useTranslation from 'next-translate/useTranslation'

export default function Home() {
  const { t, lang } = useTranslation('common')
  const metaDescription = t('meta-description')

  return (
    <>
      <Head>
        <title>Forsvarsadvokat</title>
        <meta name="description" content={metaDescription} />
        <link
          rel="canonical"
          href="https://forsvarsadvokat.no/"
          key="canonical"
        />
      </Head>
      <Header />

      <main className="mx-auto max-w-screen-2xl sm:p-12 md:px-20 md:pb-20 md:pt-20 lg:pt-0">
        <Hero />

        <Fields />

        <FeatureVideo />
        <Footer />
      </main>
    </>
  )
}
