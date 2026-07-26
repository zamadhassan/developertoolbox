'use client';

import { useState } from 'react';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2).max(80),
  email: z.string().email(),
  subject: z.string().min(4).max(120),
  message: z.string().min(10).max(4000),
  consent: z.literal(true),
});

export function ContactForm({ email }: { email: string }) {
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');
  return (
    <form
      className="card mt-8 grid max-w-2xl gap-4 p-6"
      onSubmit={(event) => {
        event.preventDefault();
        const data = Object.fromEntries(new FormData(event.currentTarget));
        if (data.company) {
          setStatus('Thanks. If a reply is needed, we will follow up by email.');
          setError('');
          return;
        }
        const result = schema.safeParse({ ...data, consent: data.consent === 'on' });
        if (!result.success) {
          setError('Please complete all required fields with valid information.');
          setStatus('');
          return;
        }
        const body = [
          `Name: ${result.data.name}`,
          `Email: ${result.data.email}`,
          '',
          result.data.message,
        ].join('\n');
        const mailto = `mailto:${email}?subject=${encodeURIComponent(result.data.subject)}&body=${encodeURIComponent(body)}`;
        setError('');
        setStatus('Opening your email app so you can review and send the message.');
        window.location.href = mailto;
      }}
    >
      <input name="company" className="hidden" tabIndex={-1} autoComplete="off" />
      <label className="grid gap-2">
        Name
        <input name="name" className="rounded-xl border border-white/10 bg-black/30 p-3" />
      </label>
      <label className="grid gap-2">
        Email
        <input
          name="email"
          type="email"
          className="rounded-xl border border-white/10 bg-black/30 p-3"
        />
      </label>
      <label className="grid gap-2">
        Subject
        <input name="subject" className="rounded-xl border border-white/10 bg-black/30 p-3" />
      </label>
      <label className="grid gap-2">
        Message
        <textarea
          name="message"
          className="min-h-40 rounded-xl border border-white/10 bg-black/30 p-3"
        />
      </label>
      <label className="flex gap-3 text-sm text-[var(--text-secondary)]">
        <input name="consent" type="checkbox" /> I understand this will open my email app and no
        secrets or sensitive tool input should be included.
      </label>
      {error ? (
        <p role="alert" className="text-red-200">
          {error}
        </p>
      ) : null}
      {status ? (
        <p role="status" className="text-primary">
          {status}
        </p>
      ) : null}
      <button className="w-fit rounded-full bg-primary px-5 py-2.5 font-semibold text-black">
        Open Email Draft
      </button>
    </form>
  );
}
