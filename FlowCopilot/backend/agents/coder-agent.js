import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function coderAgent(prompt) {
  const response = await client.chat.completions.create({
    model: "gpt-4.1",
    messages: [
      {
        role: "system",
        content: "You are a senior AI coding agent."
      },
      {
        role: "user",
        content: prompt
      }
    ]
  });

  return response.choices[0].message.content;
}