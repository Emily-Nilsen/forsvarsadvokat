import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
// import { Hero } from '@/components/Hero'
import { VideoHero } from '@/components/VideoHero'
import { Fields } from '@/components/Fields'
import { ReadMoreBox } from '@/components/ReadMoreBox'
import { FeatureVideo } from '@/components/FeatureVideo'

export default function Home() {
  return (
    <>
      <Head>
        <title>Forsvarsadvokat</title>
        <meta name="description" content="Need a page description here" />
      </Head>
      <Header />
      <main>
        <VideoHero />
        <Fields />
        {/* <ReadMoreBox /> */}
        <FeatureVideo />
      </main>
      <Footer />
    </>
  )
}
