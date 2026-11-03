import { Closing } from '@/components/closing'
import { Faq } from '@/components/faq'
import { Fit } from '@/components/fit'
import { Gap } from '@/components/gap'
import { Hero } from '@/components/hero'
import { Method } from '@/components/method'
import { NewFirm } from '@/components/new-firm'
import { ProcessAgent } from '@/components/process-agent'
import { Refusals } from '@/components/refusals'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({ path: '/' })

export default function Home() {
  return (
    <>
      <Hero />
      <Gap />
      <ProcessAgent />
      <Fit />
      <Method />
      <Refusals />
      <NewFirm />
      <Faq />
      <Closing />
    </>
  )
}
