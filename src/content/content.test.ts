import { describe, expect, it } from 'vitest'

import { aboutContent } from '@/content/about'
import { contactContent } from '@/content/contact'
import { faq } from '@/content/faq'
import { heroContent } from '@/content/hero'
import { legalNotice } from '@/content/legal-notice'
import { footerColumns, footerNote, headerAction, headerNav, mobileNav } from '@/content/navigation'
import { notFound } from '@/content/not-found'
import { processContent } from '@/content/process'
import { servicesContent } from '@/content/services'
import { useCasesContent } from '@/content/use-cases'

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
  heroContent,
  useCasesContent,
  servicesContent,
  processContent,
  aboutContent,
  faq,
  contactContent,
  legalNotice,
  notFound,
]

// Labels read the way the template writes them: a capital first letter, then sentence case.
const labels = [
  ...sections.flatMap((section) => ('title' in section ? [section.title] : [])),
  ...sections.flatMap((section) => ('eyebrow' in section ? [section.eyebrow] : [])),
  headerAction.label,
  notFound.action.label,
  heroContent.primaryAction.label,
  heroContent.secondaryAction.label,
  useCasesContent.action.label,
  processContent.action.label,
  ...useCasesContent.items.map((item) => item.title),
  ...servicesContent.items.map((item) => item.title),
  contactContent.action.label,
  contactContent.form.submit,
  ...mobileNav.map((link) => link.label),
  ...footerColumns.map((column) => column.title),
]

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

  it('starts every label with a capital letter', () => {
    const offenders = labels.filter((label) => !/^[A-Z]/.test(label))
    expect(offenders).toEqual([])
  })

  it('writes the hero headline as one sentence', () => {
    expect(heroContent.title).toMatch(/^[A-Z][^.]*\.$/)
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

  it('keeps FAQ questions unique, because each one names its disclosure', () => {
    const questions = faq.items.map((item) => item.question)
    expect(new Set(questions).size).toBe(questions.length)
  })

  it('points every header link at a section or a page', () => {
    for (const link of headerNav) expect(link.href).toMatch(/^\/(#[a-z-]+)?$/)
  })
})
