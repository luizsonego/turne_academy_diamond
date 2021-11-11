import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import Container from '../components/container'
import HeroSection from '../components/hero-section'
import BubbleBg from '../components/animations/bubbleBg'
import List from '../components/list'
import ListTravel from '../components/listTravel'
import GalleryImage from '../components/galleryImage'

export default function Home() {

  return (
    <>
      <Layout>
        <Head>
          <title>Turnê MultiShop Brasil</title>
          <meta name="description" content="Turnê MultiShop Brasil" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <HeroSection />

        <Container>

          <div className="mt-10 mb-10 h-60">

          </div>

          <div className="mt-10 mb-32 ">
            <ListTravel />
          </div>

          <div className="mt-32 mb-10 ">
            <GalleryImage />
          </div>

        </Container>

      </Layout>
    </>
  )
}
