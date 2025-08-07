// app/contact/page.js
"use client"

export default function ContactPage() {
  return (
    <>
      <h2 className="text-3xl font-semibold mb-4">Contact</h2>
      <form className="space-y-4 max-w-md">
        <input
          type="text"
          placeholder="Name"
          className="w-full border rounded px-3 py-2"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded px-3 py-2"
        />
        <textarea
          placeholder="Message"
          className="w-full border rounded px-3 py-2"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Send
        </button>
      </form>
    </>
  )
}
