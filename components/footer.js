import Container from './container'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 ">
      <Container>
        <div className="container mx-auto px-4 pt-5">
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-100 font-semibold py-1">
                MultiShop
              </div>
              
              <div className="text-sm text-gray-100 font-semibold py-1">
                Agência 500 Milhas.
              </div>
            </div>
          </div>
        </div>


      </Container>
    </footer>
  )
}
