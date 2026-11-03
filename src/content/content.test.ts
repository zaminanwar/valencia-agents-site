import { describe, expect, it } from 'vitest'

import { about } from '@/content/about'
import { contact } from '@/content/contact'
import { cta } from '@/content/cta'
import { faq } from '@/content/faq'
import { features } from '@/content/features'
import { gap } from '@/content/gap'
import { hero } from '@/content/hero'
import { howWeWork } from '@/content/how-we-work'
import { insights } from '@/content/insights'
import { footerColumns, footerNote, headerAction, mobileNav } from '@/content/navigation'
import { notFound } from '@/content/not-found'
import { services } from '@/content/services'
import { steps } from '@/content/steps'

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
  features,
  steps,
  faq,
  cta,
  notFound,
  howWeWork,
  services,
  about,
  contact,
  insights,
]

// Subpage sections live one level down, so their titles and eyebrows are listed by hand.
const subpageLabels = [
  howWeWork.hero.eyebrow.lead,
  howWeWork.hero.eyebrow.emphasis,
  howWeWork.problem.title,
  howWeWork.problem.eyebrow.lead,
  howWeWork.problem.eyebrow.emphasis,
  howWeWork.principle.title,
  howWeWork.principle.eyebrow.lead,
  howWeWork.principle.eyebrow.emphasis,
  ...howWeWork.principle.owners.map((owner) => owner.title),
  howWeWork.stages.title,
  howWeWork.stages.eyebrow.lead,
  howWeWork.stages.eyebrow.emphasis,
  ...howWeWork.stages.items.map((stage) => stage.name),
  howWeWork.guarantees.title,
  howWeWork.guarantees.eyebrow.lead,
  howWeWork.guarantees.eyebrow.emphasis,
  ...howWeWork.guarantees.items.map((item) => item.title),
  howWeWork.handover.title,
  howWeWork.handover.eyebrow.lead,
  howWeWork.handover.eyebrow.emphasis,
  howWeWork.commercial.title,
  howWeWork.commercial.eyebrow.lead,
  howWeWork.commercial.eyebrow.emphasis,
  ...howWeWork.commercial.offers.map((offer) => offer.title),
  howWeWork.ontology.title,
  howWeWork.ontology.eyebrow.lead,
  howWeWork.ontology.eyebrow.emphasis,
  services.hero.eyebrow.lead,
  services.hero.eyebrow.emphasis,
  services.discovery.title,
  services.discovery.eyebrow.lead,
  services.discovery.eyebrow.emphasis,
  ...services.discovery.outputs.map((output) => output.title),
  services.implementation.title,
  services.implementation.eyebrow.lead,
  services.implementation.eyebrow.emphasis,
  services.includes.title,
  services.includes.eyebrow.lead,
  services.includes.eyebrow.emphasis,
  ...services.includes.items.map((item) => item.title),
  services.refusals.title,
  services.refusals.eyebrow.lead,
  services.refusals.eyebrow.emphasis,
  about.hero.eyebrow.lead,
  about.hero.eyebrow.emphasis,
  about.whatWeDo.title,
  about.whatWeDo.eyebrow.lead,
  about.whatWeDo.eyebrow.emphasis,
  about.notList.title,
  about.notList.eyebrow.lead,
  about.notList.eyebrow.emphasis,
  ...about.notList.items.map((item) => item.title),
  about.honestly.title,
  about.honestly.eyebrow.lead,
  about.honestly.eyebrow.emphasis,
  about.honestly.primaryAction.label,
  about.honestly.secondaryAction.label,
  contact.hero.eyebrow.lead,
  contact.hero.eyebrow.emphasis,
  contact.form.title,
  contact.form.eyebrow.lead,
  contact.form.eyebrow.emphasis,
  insights.hero.eyebrow.lead,
  insights.hero.eyebrow.emphasis,
  insights.willBe.title,
  insights.willBe.eyebrow.lead,
  insights.willBe.eyebrow.emphasis,
  insights.willBe.primaryAction.label,
  insights.notLive.title,
  insights.notLive.eyebrow.lead,
  insights.notLive.eyebrow.emphasis,
  insights.notLive.primaryAction.label,
]

const labels = [
  ...sections.flatMap((section) => ('title' in section ? [section.title] : [])),
  ...sections.flatMap((section) =>
    'eyebrow' in section ? [section.eyebrow.lead, section.eyebrow.emphasis] : [],
  ),
  headerAction.label,
  notFound.action.label,
  cta.primaryAction.label,
  cta.secondaryAction.label,
  steps.primaryAction.label,
  steps.secondaryAction.label,
  faq.contact.action.label,
  ...features.items.map((item) => item.title),
  ...features.extras.map((item) => item.title),
  ...steps.items.map((step) => step.title),
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

  it('emphasises words that are really in the hero headline', () => {
    expect(hero.title).toContain(hero.titleEmphasis)
  })

  it('keeps FAQ questions unique, because each one is its accordion value', () => {
    const questions = faq.items.map((item) => item.question)
    expect(new Set(questions).size).toBe(questions.length)
  })
})
