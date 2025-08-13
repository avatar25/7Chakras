import OpenAI from 'openai'

const apiKey = import.meta.env.VITE_OPENAI_API_KEY
export const openai = new OpenAI({ apiKey, dangerouslyAllowBrowser: true })

export async function analyzeChakra(text: string) {
  if (!apiKey) return null
  return openai.responses.create({
    model: 'gpt-4o-mini',
    input: text,
  })
}
