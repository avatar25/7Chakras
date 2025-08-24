# 🧘‍♂️ 7Chakras – Chakra-Based Self Awareness App

> A mindful journaling tool powered by LLMs that helps you understand and balance your emotional energy through the lens of the 7 chakras.

## 🌈 Overview

**7Chakras** is a private, local-first web app that lets you:
- Reflect on your current emotions and thoughts
- Automatically map your input to one of the 7 chakras
- Get guided prompts powered by LLMs to restore inner balance

Built with love for those seeking clarity, growth, and a deeper connection with their inner self.

## ✨ Tech Stack

- **Frontend**: React, Tailwind CSS, shadcn/ui
- **Local Storage**: Dexie.js (IndexedDB)
- **LLM Integration**: OpenAI API *(optional local Ollama support planned)*
- **Optional Backend**: Node.js + Express (for syncing + analytics if enabled)

## 🧠 LLM Prompting (WIP)

Prompts are structured to understand:
- Emotional tone
- Chakra alignment
- Suggest reflective practices (breathwork, journaling, action)

## 🚀 Setup

### Frontend

```bash
git clone https://github.com/yourusername/7chakras.git
cd 7chakras/frontend
npm install
cp .env.example .env # add your VITE_OPENAI_API_KEY
npm run dev
```

> The app reads `VITE_OPENAI_API_KEY` from `.env` to access the OpenAI API. If the key is missing, AI features are skipped.

### Optional Backend

To enable syncing or analytics, run the optional Node.js backend in another terminal:

```bash
cd ../server
npm install
npm run dev
```

The backend listens on port `3000` by default.
