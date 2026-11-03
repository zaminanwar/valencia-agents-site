import { Cta } from '@/components/cta'
import { Faq } from '@/components/faq'
import { Features } from '@/components/features'
import { Gap } from '@/components/gap'
import { Hero } from '@/components/hero'
import { Steps } from '@/components/steps'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({ path: '/' })

export default function Home() {
  return (
    <>
      <Hero />
      <Gap />
      <Features />
      <Steps />
      <Faq />
      <Cta />
    </>
  )
}
