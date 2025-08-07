"use client";
import React, { useState } from 'react';
import Button from '../../components/Button';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    setStatus(res.ok ? 'success' : 'error');
  };

  return (
    <>
      <h2 className="text-3xl font-semibold mb-4">Contact</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <input
          name="name"
          type="text"
          placeholder="Name"
          className="w-full border rounded px-3 py-2"
          value={form.name}
          onChange={handleChange}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full border rounded px-3 py-2"
          value={form.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Message"
          className="w-full border rounded px-3 py-2"
          value={form.message}
          onChange={handleChange}
        />
        <Button type="submit">Send</Button>
      </form>
      {status === 'success' && (
        <p className="mt-4 text-green-600">Message sent successfully!</p>
      )}
      {status === 'error' && (
        <p className="mt-4 text-red-600">Something went wrong. Try again.</p>
      )}
    </>
  );
}
