import { useState } from 'react'
import { analyzeChakra } from './openai'
import { db } from './db'

function App() {
  const [text, setText] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await analyzeChakra(text)
    await db.entries.add({ chakra: 'root', content: text, createdAt: new Date() })
    setText('')
  }

  return (
    <div className="min-h-screen p-6">
      <h1 className="mb-4 text-3xl font-bold">7Chakras</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <textarea
          className="h-40 rounded border p-2"
          placeholder="How are you feeling today?"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" className="rounded bg-indigo-600 px-4 py-2 text-white">
          Analyze
        </button>
      </form>
    </div>
  )
}

export default App
