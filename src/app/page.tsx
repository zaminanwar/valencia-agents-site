import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { Faq } from '@/components/faq'
import { Hero } from '@/components/hero'
import { Process } from '@/components/process'
import { Services } from '@/components/services'
import { UseCases } from '@/components/use-cases'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({ path: '/' })

export default function Home() {
  return (
    <>
      <Hero />
      <UseCases />
      <Services />
      <Process />
      <About />
      <Faq />
      <Contact />
    </>
  )
}
