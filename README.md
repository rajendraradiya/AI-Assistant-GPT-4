# 🤖 AI Assistant with GPT-4o-mini

A simple full-stack project that integrates **OpenAI GPT-4o-mini** with a **React + TypeScript frontend** and an **Express backend**.  
This app allows users to input questions and get AI-powered responses through a minimal UI.

---

## 🚀 Tech Stack
### Frontend
- React (with TypeScript)
- TailwindCSS (for styling)

### Backend
- Express.js
- OpenAI Node.js SDK

---

## 📂 Project Structure
├── client/ # React + TS frontend

├── src / plugin

│ | ├── Axios.tsx

│ ├── src/


│ │ ├── App.tsx

│ └── package.json

│
├── server/ # Express backend



│ ├── index.ts

│ ├── index.ts

│ ├── routes/

│ └── package.json

│
└── README.md



---
## ⚙️ Setup Instructions

### 1️⃣ Clone Repository
```bash
https://github.com/rajendraradiya/AI-Assistant-GPT-4.git
cd AI-Assistant-GPT-4
```

2️⃣ Install Dependencies

Frontend

```bash
cd frontend
npm install
```
Backend

```bash
cd backend
npm install
```

3️⃣ Add Environment Variables

Frontend

```bash
VITE_API_URL="http://localhost:5000"
```
Backend

```bash
OPENAI_API_KEY="YOUR_OPEN_AI_KEYS"
```
4️⃣ Run the Project

Frontend

```bash
npm run dev
```
Backend

```bash
npm start
```

## 🔌 API Integration

The backend integrates with OpenAI GPT-4o-mini model.
Example Express route:

```bash

app.post("/sendRequest", async (req, res) => {
  try {
    const { message } = req.body;

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini", // or "gpt-4" / "gpt-3.5-turbo"
      messages: [
        {
          role: "system",
          content:
            "You are an assistant",
        },
        { role: "user", content: message },
      ],
    });

    res.json({ data: response.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

```

## 🎨 Frontend UI

A simple React + TypeScript interface:

Input box for user prompt

Submit button

Display AI response

## ✅ Features

Ask AI anything

Simple and clean UI

Backend securely connects with OpenAI

Easily extensible

## 📌 Future Enhancements

Chat history

Authentication

Multiple models support

UI polish with animations

## 📝 License

This project is licensed under the MIT License.



