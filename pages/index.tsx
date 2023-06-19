import Image from 'next/image'
import { Inter } from 'next/font/google'
import Section1 from '@/components/section1/Index'
import Section2 from '@/components/section2/Index'
import Header from '@/components/header/Index'
import Footer from '@/components/footer/Index'
import Whatsapp from '@/components/whatsapp/Index'
import BackTop from '@/components/backTop/Index'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Header />

    <main>
      <Section1 />
      <Section2 />
      <Whatsapp />
      <BackTop />
    </main>
    
    <Footer />
    </>
  )
}
