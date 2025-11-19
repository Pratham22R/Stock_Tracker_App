# 🚀 Signalist — Modern AI-Powered Stock Market App

<div align="center">
  <a href="https://signalist-dev.vercel.app/" target="_blank">
    <img src="public/readme/cover1.png" alt="Project Banner" width="900" height="450"/>
  </a>

  <br /><br />

  <div>
    <img src="https://img.shields.io/badge/-Next.js-black?style=for-the-badge&logoColor=white&logo=next.js&color=black"/>
    <img src="https://img.shields.io/badge/-Better Auth-black?style=for-the-badge&logoColor=white&logo=betterauth&color=black"/>
    <img src="https://img.shields.io/badge/-Shadcn-black?style=for-the-badge&logoColor=white&logo=shadcnui&color=black"/>
    <img src="https://img.shields.io/badge/-Inngest-black?style=for-the-badge&logoColor=white&logo=inngest&color=black"/>
    <br/>
    <img src="https://img.shields.io/badge/-MongoDB-black?style=for-the-badge&logoColor=white&logo=mongodb&color=00A35C"/>
    <img src="https://img.shields.io/badge/-CodeRabbit-black?style=for-the-badge&logoColor=white&logo=coderabbit&color=9146FF"/>
    <img src="https://img.shields.io/badge/-TailwindCSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=38B2AC"/>
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6"/>
  </div>

  <br />

  <h3 align="center">AI-Powered Stock Tracking, Alerts, Insights & Real-Time Market Intelligence</h3>

  <a href="https://signalist-dev.vercel.app/" target="_blank">
    🔥 <b>Live Demo</b>
  </a>
</div>

---

## 📋 Table of Contents
- ✨ [Introduction](#introduction)
- ⚙️ [Tech Stack](#tech-stack)
- 🔋 [Features](#features)
- 🤸 [Quick Start](#quick-start)
- 📡 [Environment Variables](#environment-variables)
- 🧱 [Architecture Overview](#architecture-overview)
- 📎 [Assets](#assets)
- 🚀 [More](#more)

---

## ✨ Introduction

Signalist is a powerful, modern, AI-enhanced stock market platform built with **Next.js**, **Better Auth**, **Inngest**, and **Finnhub**.

It enables users to:

- Track real-time price movements  
- Manage a custom watchlist  
- Receive automated AI-generated market summaries  
- Explore deep company insights  
- Monitor news, trends, alerts, technicals, & fundamentals  

Built with **clean architecture**, **server actions**, and **event-driven workflows**, Signalist is ideal for anyone who wants a production-ready, modern financial platform.

---

## ⚙️ Tech Stack

### **Frontend**
- Next.js 15 (App Router)
- Shadcn/UI
- TailwindCSS
- TypeScript

### **Backend**
- Next.js Server Actions
- Better Auth
- MongoDB + Mongoose
- Nodemailer
- Inngest (workflows & background jobs)
- Gemini AI (summaries & insights)

### **APIs**
- Finnhub (market data)
- Gemini (AI)
- Custom workflow triggers via Inngest

---

## 🔋 Features

### 🧭 **Dashboard & Market Tracking**
- Real-time stock quotes  
- Candlestick & historical charts  
- Volume/price/performance indicators  

### 🔍 **Powerful Search**
- Debounced intelligent lookup  
- Exchange-type aware symbol search  
- Deduped symbol results  

### ⭐ **Watchlist**
- Star-based add/remove button  
- Instant backend syncing  
- Personalized watchlist view  

### 🔔 **Alerts & Automation**
- Daily AI-powered summaries  
- Price movement alerts  
- Volume spike alerts  
- Inngest-driven workflows  

### 🧠 **AI Features**
- Gemini-based market digest  
- Auto-generated company summaries  
- Sentiment scoring  

### 📊 **Company Insights**
- Company profile  
- PE, EPS, revenue, fundamentals  
- News, filings, analyst ratings  

### 🛠️ **Admin Tools (Optional)**
- Publish news  
- Manage stock metadata  
- User activity tracking  

---

## 🤸 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/Pratham22R/Stock_Tracker_App.git
cd pratham22r-stock_tracker_app
```
### 2. Install Dependencies 
```bash
npm install
```
### 3. Create Environment Variables
```bash
NODE_ENV='development'
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# FINNHUB
NEXT_PUBLIC_FINNHUB_API_KEY=
FINNHUB_BASE_URL=https://finnhub.io/api/v1

# MONGODB
MONGODB_URI=

# BETTER AUTH
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=http://localhost:3000

# GEMINI
GEMINI_API_KEY=

# NODEMAILER
NODEMAILER_EMAIL=
NODEMAILER_PASSWORD=
```
### 4. Run the App
```bash
npm run dev 
```

### 5. Run Inngest Dev Mode
```bash
npx inngest-cli@latest dev
```
### 6. Visit The Site Locally
```bash
http://localhost:3000
```
---

## 📡 Environment Variables

| Variable | Purpose |
|---------|---------|
| `FINNHUB_API_KEY` | Fetching real-time stock market data |
| `GEMINI_API_KEY` | AI-powered summaries & insights |
| `MONGODB_URI` | Database connection |
| `BETTER_AUTH_*` | Authentication handling |
| `NODEMAILER_*` | Email alerts/notifications |
| `INNGEST_*` | Background workflows |

---

## 🧱 Architecture Overview

### 🧩 Frontend
- React Server Components (RSC)
- TailwindCSS + Shadcn/UI
- Modular and reusable components
- Chart widgets & visualizations
- Optimized search with debouncing & symbol deduping

### 🤖 Backend
- Next.js Server Actions  
- Type-safe API wrappers  
- Nodemailer transactional email service  
- Secure access layer for stock/AI APIs  

### ⚡ Workflows (Inngest)
- Daily AI-generated market digest  
- Scheduled alerts pipeline  
- Earnings & news triggers  
- Event-driven watchlist alert system  

### 📦 Database Layer
- MongoDB + Mongoose schemas  
- Optimized querying & indexes  
- Collections for user profiles, watchlists, logs  
- Minimal I/O round trips  

### 🔐 Authentication
Powered by **Better Auth**, including:
- Password login  
- OAuth-ready integration  
- Secure session & token management  

---

## 📎 Assets

All image and visual assets used throughout the project can be found inside:


This includes cover images, banners, icons, and documentation visuals.

---

## 🚀 More

### 👨‍💻 Contributing
Contributions, issues, and feature requests are welcome!

This project is ideal for:

- Developers learning Next.js & full-stack patterns  
- Builders of finance/stock platforms  
- Engineers exploring event-driven architecture (Inngest)  
- Developers leveraging AI automation in real-world apps  

### ⭐ Show Support
If you like **Signalist**, please consider giving the repo a **star** 🌟  
Your support helps the project grow and reach more developers!

---
