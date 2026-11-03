import { describe, expect, it } from 'vitest'

import { about } from '@/content/about'
import { closing } from '@/content/closing'
import { contact } from '@/content/contact'
import { faq } from '@/content/faq'
import { fit } from '@/content/fit'
import { gap } from '@/content/gap'
import { hero } from '@/content/hero'
import { howWeWork } from '@/content/how-we-work'
import { insights } from '@/content/insights'
import { method } from '@/content/method'
import { footerColumns, footerNote, headerAction, mobileNav } from '@/content/navigation'
import { newFirm } from '@/content/new-firm'
import { notFound } from '@/content/not-found'
import { processAgent } from '@/content/process-agent'
import { refusals } from '@/content/refusals'
import { services } from '@/content/services'

// Built from code points, so the rule against dashes holds in this file too.
const DASHES = new RegExp(`[${String.fromCharCode(0x2013, 0x2014)}]`)

// Every string in a piece of content, however deeply it is nested.
function strings(value: unknown): string[] {
  if (typeof value === 'string') return [value]
  if (Array.isArray(value)) return value.flatMap(strings)
  if (value && typeof value === 'object') return Object.values(value).flatMap(strings)
  return []
}

const sections = [
  hero,
  gap,
  processAgent,
  fit,
  method,
  refusals,
  newFirm,
  faq,
  closing,
  notFound,
  howWeWork,
  services,
  about,
  contact,
  insights,
]

// Subpage sections live one level down, so their titles and eyebrows are listed by hand.
const subpageLabels = [
  howWeWork.hero.eyebrow,
  howWeWork.problem.title,
  howWeWork.problem.eyebrow,
  howWeWork.principle.title,
  howWeWork.principle.eyebrow,
  ...howWeWork.principle.owners.map((owner) => owner.title),
  howWeWork.stages.title,
  howWeWork.stages.eyebrow,
  ...howWeWork.stages.items.map((stage) => stage.name),
  howWeWork.guarantees.title,
  howWeWork.guarantees.eyebrow,
  ...howWeWork.guarantees.items.map((item) => item.title),
  howWeWork.handover.title,
  howWeWork.handover.eyebrow,
  howWeWork.commercial.title,
  howWeWork.commercial.eyebrow,
  ...howWeWork.commercial.offers.map((offer) => offer.title),
  howWeWork.ontology.title,
  howWeWork.ontology.eyebrow,
  services.hero.eyebrow,
  services.discovery.title,
  services.discovery.eyebrow,
  ...services.discovery.outputs.map((output) => output.title),
  services.implementation.title,
  services.implementation.eyebrow,
  services.includes.title,
  services.includes.eyebrow,
  ...services.includes.items.map((item) => item.title),
  services.refusals.title,
  services.refusals.eyebrow,
  about.hero.eyebrow,
  about.whatWeDo.title,
  about.whatWeDo.eyebrow,
  about.notList.title,
  about.notList.eyebrow,
  ...about.notList.items.map((item) => item.title),
  about.honestly.title,
  about.honestly.eyebrow,
  about.honestly.primaryAction.label,
  about.honestly.secondaryAction.label,
  contact.hero.eyebrow,
  contact.form.title,
  contact.form.eyebrow,
  insights.hero.eyebrow,
  insights.willBe.title,
  insights.willBe.eyebrow,
  insights.willBe.primaryAction.label,
  insights.notLive.title,
  insights.notLive.eyebrow,
  insights.notLive.primaryAction.label,
]

const labels = [
  ...sections.flatMap((section) => ('title' in section ? [section.title] : [])),
  ...sections.flatMap((section) => ('eyebrow' in section ? [section.eyebrow] : [])),
  headerAction.label,
  notFound.action.label,
  hero.primaryAction.label,
  hero.secondaryAction.label,
  ...hero.facts.map((fact) => fact.term),
  closing.primaryAction.label,
  closing.secondaryAction.label,
  method.action.label,
  refusals.action.label,
  newFirm.action.label,
  faq.contact.action.label,
  ...processAgent.items.map((item) => item.title),
  ...fit.traits.map((trait) => trait.title),
  fit.example.label,
  ...mobileNav.map((link) => link.label),
  ...footerColumns.flatMap((column) => [column.title, ...column.links.map((link) => link.label)]),
  ...subpageLabels,
].filter((label) => label !== hero.title)

describe('content', () => {
  it('never uses an em dash or an en dash', () => {
    const offenders = strings([
      ...sections,
      headerAction,
      mobileNav,
      footerColumns,
      footerNote,
    ]).filter((text) => DASHES.test(text))
    expect(offenders).toEqual([])
  })

  it('writes every label in Title Case', () => {
    const offenders = labels.filter((label) => label.split(' ').some((word) => /^[a-z]/.test(word)))
    expect(offenders).toEqual([])
  })

  // Questions read as sentences, the way a visitor would ask them.
  it('asks every FAQ question as a sentence', () => {
    const offenders = faq.items
      .map((item) => item.question)
      .filter((question) => {
        const titleCase = question.split(' ').every((word) => !/^[a-z]/.test(word))
        return titleCase || !question.endsWith('?')
      })
    expect(offenders).toEqual([])
  })

  it('writes the hero headline as one sentence', () => {
    expect(hero.title).toMatch(/^[A-Z][^.]*\.$/)
  })

  it('summarises the same seven stages the method page sets out', () => {
    expect(method.stages.map((stage) => stage.name)).toEqual(
      howWeWork.stages.items.map((stage) => stage.name),
    )
    expect(refusals.items).toEqual(howWeWork.guarantees.items.map((item) => item.title))
  })

  it('keeps FAQ questions unique, because each one is its accordion value', () => {
    const questions = faq.items.map((item) => item.question)
    expect(new Set(questions).size).toBe(questions.length)
  })
})
