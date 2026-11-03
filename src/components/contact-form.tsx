'use client'

import { useMemo, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { CONTACT_EMAIL, contact } from '@/content/contact'

export function ContactForm() {
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [message, setMessage] = useState('')
  const [copied, setCopied] = useState(false)

  const draft = useMemo(() => {
    const lines = [
      `Name: ${name || '(not given)'}`,
      `Company: ${company || '(not given)'}`,
      '',
      message,
    ]
    return lines.join('\n')
  }, [name, company, message])

  const mailto = useMemo(() => {
    const subject = encodeURIComponent('Valencia Agents: A Process To Talk About')
    const body = encodeURIComponent(draft)
    return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
  }, [draft])

  async function copyDraft() {
    try {
      await navigator.clipboard.writeText(
        `To: ${CONTACT_EMAIL}\nSubject: Valencia Agents: A Process To Talk About\n\n${draft}`,
      )
      setCopied(true)
      window.setTimeout(() => setCopied(false), 3000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="flex max-w-2xl flex-col gap-6">
      <p className="text-pretty text-muted-foreground">{contact.formNote}</p>
      <div className="border-l-2 border-primary bg-card p-5">
        <p className="text-pretty text-muted-foreground">{contact.placeholderNote}</p>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="contact-name">Your Name</Label>
        <Input
          id="contact-name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          autoComplete="name"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="contact-company">Company</Label>
        <Input
          id="contact-company"
          type="text"
          value={company}
          onChange={(event) => setCompany(event.target.value)}
          autoComplete="organization"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="contact-message">The Process You Want To Talk About</Label>
        <Textarea
          id="contact-message"
          rows={6}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="What the process is, where it lives today (documents, email), and what goes wrong with it."
        />
      </div>

      <div className="flex flex-wrap gap-3">
        <Button size="lg" render={<a href={mailto}>Open Draft In Your Mail App</a>} />
        <Button type="button" size="lg" variant="outline" onClick={copyDraft}>
          {copied ? 'Copied' : 'Copy Draft Text'}
        </Button>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="font-medium">Draft Preview</h3>
        <pre className="overflow-x-auto rounded-lg border bg-card p-5 text-sm whitespace-pre-wrap">
          {`To: ${CONTACT_EMAIL}\nSubject: Valencia Agents: A Process To Talk About\n\n${draft}`}
        </pre>
      </div>
    </div>
  )
}
