'use client'
import { useState } from 'react'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: { 'Content-Type': 'application/json' },
      })

      const data = await res.json()

      if (res.ok) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus(data.error || 'Something went wrong')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <form
      className="flex flex-col sm:flex-row items-start sm:items-center gap-2"
      onSubmit={handleNewsletterSubmit}
    >
      <input
        type="email"
        name="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="w-full sm:w-auto flex-1 px-4 py-2 border rounded focus:outline-none focus:ring-2"
      />
      <button
        type="submit"
        className="px-4 py-2 border rounded transition hover:bg-gray-100"
      >
        Subscribe
      </button>

      {status === 'success' && (
        <p className="text-green-600 text-sm mt-1">Thank you for subscribing!</p>
      )}
      {status && status !== 'success' && status !== 'loading' && (
        <p className="text-red-600 text-sm mt-1">{status}</p>
      )}
    </form>
  )
}
