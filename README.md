# 栖物集 (Qiwuji) - Dorm Decor & Blueprint Service

A modern, AI-powered web application for student dormitory decoration services. This platform allows students to generate room design concepts using Google Gemini and book professional redecoration services.

## ✨ Features

- **🤖 AI Dorm Consultant**: Uses Google Gemini 2.5 Flash to generate personalized interior design concepts, color palettes, and shopping lists based on student preferences.
- **📅 Easy Booking System**: Streamlined form for booking "Online Blueprint" (¥10) or "Door-to-Door Decoration" (¥60) services.
- **🎨 Inspiration Gallery**: A showcase of transformed dorm rooms.
- **📱 Fully Responsive**: Looks great on mobile and desktop.

## 🛠️ Tech Stack

- **Frontend**: React 19
- **Styling**: Tailwind CSS
- **AI**: Google GenAI SDK (`@google/genai`)
- **Icons**: Lucide React

## 🚀 Getting Started

This project is designed as a lightweight, no-build application using ES Modules.

1. **Clone the repository**
2. **Set up your API Key**
   - You need a valid Google Gemini API Key to use the AI Planner.
   - The app expects `process.env.API_KEY` to be available.
3. **Run the app**
   - You can serve the files using any static server.
   - Example with Python: `python3 -m http.server`
   - Example with Node: `npx serve`

## 📄 License

This project is for educational and demonstration purposes.
