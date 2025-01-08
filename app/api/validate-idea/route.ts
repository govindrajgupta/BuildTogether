import { NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req: Request) {
  try {
    const { idea } = await req.json()

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are an experienced startup advisor. Your task is to provide constructive feedback on startup ideas. Analyze the idea for its strengths, weaknesses, potential market, and suggest improvements."
        },
        {
          role: "user",
          content: `Please analyze this startup idea and provide feedback: ${idea}`
        }
      ],
      max_tokens: 500,
    })

    const feedback = completion.choices[0].message.content

    return NextResponse.json({ feedback })
  } catch (error) {
    console.error('Error in idea validation:', error)
    return NextResponse.json({ error: 'Failed to validate idea' }, { status: 500 })
  }
}

