'use client'

import { useState } from 'react'

import { siteConfig } from '@/config/site'
import { contactContent } from '@/content/contact'

const FIELD_CLASS =
  'h-12 w-full rounded-xl bg-background px-4 text-base tracking-tight text-foreground placeholder:text-muted-foreground/70 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none'

const LABEL_CLASS = 'text-base tracking-tight'

type Draft = { name: string; email: string; job: string; company: string; message: string }

function Field({
  id,
  label,
  placeholder,
  type = 'text',
  autoComplete,
  value,
  onChange,
}: {
  id: keyof Draft
  label: string
  placeholder: string
  type?: 'text' | 'email'
  autoComplete?: string
  value: string
  onChange: (value: string) => void
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={`contact-${id}`} className={LABEL_CLASS}>
        {label}
      </label>
      <input
        id={`contact-${id}`}
        name={id}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={FIELD_CLASS}
      />
    </div>
  )
}

// No backend: Submit opens the message as a draft in the visitor's mail app.
export function ContactForm() {
  const { form } = contactContent
  const [draft, setDraft] = useState<Draft>({
    name: '',
    email: '',
    job: '',
    company: '',
    message: '',
  })
  const set = (key: keyof Draft) => (value: string) =>
    setDraft((prev) => ({ ...prev, [key]: value }))

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const body = [
      `${form.name.label}: ${draft.name}`,
      `${form.email.label}: ${draft.email}`,
      `${form.job.label}: ${draft.job}`,
      `${form.company.label}: ${draft.company}`,
      '',
      draft.message,
    ].join('\n')
    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-5 rounded-3xl bg-muted p-6 sm:p-8">
      <Field
        id="name"
        label={form.name.label}
        placeholder={form.name.placeholder}
        autoComplete="name"
        value={draft.name}
        onChange={set('name')}
      />
      <Field
        id="email"
        label={form.email.label}
        placeholder={form.email.placeholder}
        type="email"
        autoComplete="email"
        value={draft.email}
        onChange={set('email')}
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="job"
          label={form.job.label}
          placeholder={form.job.placeholder}
          autoComplete="organization-title"
          value={draft.job}
          onChange={set('job')}
        />
        <Field
          id="company"
          label={form.company.label}
          placeholder={form.company.placeholder}
          autoComplete="organization"
          value={draft.company}
          onChange={set('company')}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="contact-message" className={LABEL_CLASS}>
          {form.message.label}
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          placeholder={form.message.placeholder}
          value={draft.message}
          onChange={(event) => set('message')(event.target.value)}
          className="w-full rounded-xl bg-background px-4 py-3 text-base tracking-tight text-foreground placeholder:text-muted-foreground/70 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
        />
      </div>
      <button
        type="submit"
        className="h-12 w-full rounded-xl bg-primary text-base font-medium tracking-tight text-primary-foreground transition-colors hover:bg-primary/85 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
      >
        {form.submit}
      </button>
      <p className="text-sm tracking-tight text-muted-foreground">{form.note}</p>
    </form>
  )
}
