import Meta from '../components/meta'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
      <Meta />

      <div className="min-h-screen box-content ">
        <main>{children}</main>
      </div>
      <br />
      <Footer />
    </>
  )
}