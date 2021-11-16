import Head from 'next/head'
import Layout from '../components/layout'
import Container from '../components/container'
import HeroSection from '../components/hero-section'
import ListTravel from '../components/listTravel'
import { useRouter } from 'next/dist/client/router'
import Contact from '../components/contact'

export default function Home({ event }) {
  const router = useRouter()
  const tour = event.record.tour
  console.log('tour', tour)
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

          <div className="mt-10 mb-32 ">
            <div className="flex justify-center items-center flex-wrap bg-blue-lightest gap-7">
              {
                tour.map((evt, index) => (
                  <ListTravel key={index} detail={evt} />
                ))
              }
            </div>
          </div>


          <div className="mt-8 mb-26">
            <div className="flex justify-center items-center flex-wrap bg-blue-lightest gap-7">
              <Contact />
            </div>
          </div>

        </Container>
      </Layout>
    </>
  )
}


export async function getStaticProps() {
  const response = await fetch(
    `https://api.jsonbin.io/v3/b/618d6b7a763da443125f87c5/latest`,
    {
      headers: {
        'X-Master-Key': '$2b$10$TOrHgWmk1zec7tmk3cNUIOqh3l0MhpHq9lDMPI90ujlICacjBKH4K'
      }
    }
  )
  const event = await response.json()

  return {
    props: { event },
  }
}