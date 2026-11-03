import { About } from '@/components/about'
import { Benefits } from '@/components/benefits'
import { Contact } from '@/components/contact'
import { Faq } from '@/components/faq'
import { Hero } from '@/components/hero'
import { Problem } from '@/components/problem'
import { Process } from '@/components/process'
import { Services } from '@/components/services'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({ path: '/' })

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Benefits />
      <Services />
      <Process />
      <About />
      <Faq />
      <Contact />
    </>
  )
}
