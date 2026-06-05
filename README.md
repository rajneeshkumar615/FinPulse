# 📈 FinPulse — Paper Trading Platform

> A full-stack simulated stock trading web application inspired by Zerodha's Kite platform, built with the MERN stack. Practice trading strategies, manage portfolios, and track holdings — all in a risk-free, paper-trading environment.

<p align="left">
  <img src="https://img.shields.io/badge/Stack-MERN-61DAFB?style=for-the-badge&logo=react" />
  <img src="https://img.shields.io/badge/Status-In%20Development-orange?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Type-Paper%20Trading-green?style=for-the-badge" />
  <img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge" />
</p>

---

## 👨‍💻 Author

**Rajneesh Kumar**
- 🐙 GitHub: [@rajneeshkumar615](https://github.com/rajneeshkumar615)
- 💼 LinkedIn: [linkedin.com/in/rajneesh-kumar615](https://www.linkedin.com/in/rajneesh-kumar615/)

---

## 🧾 About The Project

**FinPulse** replicates the core experience of a real-world stock brokerage platform. Users can browse a dashboard of stocks with simulated market data, place buy/sell orders, monitor their portfolio, and review transaction history — all without risking real capital.

Built as a production-inspired full-stack MERN application, this project demonstrates real-world software engineering skills: RESTful API design, MongoDB schema modeling, React component architecture, and a responsive brokerage-style UI.

> ⚠️ **Disclaimer:** This is a paper trading / simulation platform. It is **not** connected to any live stock exchange, broker, or real-time market data feed. All prices and market data are mock/static values for demonstration purposes only.

---

## ✅ Implemented Features

> These features are **fully built and functional** in the current version.

### 🖥️ Frontend (React)
- **Responsive Dashboard UI** — Zerodha Kite-inspired layout with navigation, market overview panels, and stock listings
- **Orders Interface** — UI for placing and reviewing buy/sell orders
- **Holdings View** — Display of currently held stocks with quantity and average price
- **Positions View** — Intraday/short-term positions panel with P&L display
- **Component Architecture** — Modular React components for scalability and reuse

### ⚙️ Backend (Node.js + Express)
- **RESTful API Server** — Structured Express.js API with organized route and controller layers
- **Orders API** — Endpoints to create and retrieve buy/sell orders
- **Holdings API** — Endpoints to fetch and manage user holdings
- **Positions API** — Backend logic for tracking open positions
- **Mock Market Data** — Static/seeded stock data served via API to simulate a market feed

### 🗄️ Database (MongoDB + Mongoose)
- **User Schema** — Structured model for account data
- **Order Schema** — Captures symbol, quantity, price, order type (buy/sell), and timestamp
- **Holdings Schema** — Tracks owned stocks, average buy price, and quantity
- **Positions Schema** — Models open intraday/short-term positions

### 🔐 Authentication
- **Basic Auth Setup** — Initial authentication structure in place (signup/login flow)

---

## 🚧 Roadmap — Planned Features

> The following features are **not yet implemented**. They represent the next phases of development to evolve this into a production-grade fintech application.

### 🔴 Phase 1 — Core Completion *(High Priority)*

| Feature | Description |
|---|---|
| 🔐 **JWT Authentication** | Complete secure login/signup with JSON Web Tokens and bcrypt password hashing |
| 📊 **Portfolio P&L Engine** | Calculate real-time profit/loss, invested value, and current value from holdings |
| ✅ **Order Execution Logic** | Validate orders against user balance, update holdings and positions on order fill |
| 💰 **Virtual Wallet / Balance** | User account balance system — deduct on buy, credit on sell |
| 📋 **Full Transaction History** | Paginated log of all past orders with filters by date, symbol, and type |

### 🟡 Phase 2 — Market Data Integration *(Medium Priority)*

| Feature | Description |
|---|---|
| 📡 **Live Market Data API** | Integrate a stock data provider (Alpha Vantage / Yahoo Finance / NSE API) for real prices |
| ⚡ **WebSocket Price Updates** | Push live price changes to the dashboard in real time without page refresh |
| 📈 **Candlestick Charts** | OHLCV price charts per stock using Recharts or Chart.js |
| 🔔 **Price Alerts** | Notify users when a stock crosses a user-defined target or stop-loss price |

### 🟢 Phase 3 — Advanced Trading Features *(Future Scope)*

| Feature | Description |
|---|---|
| 📌 **Watchlist** | Save and monitor favourite stocks with custom lists |
| 🎯 **Limit & Stop-Loss Orders** | Support advanced order types beyond basic market orders |
| 🏦 **GTT Orders** | Good-Till-Triggered orders that auto-execute when price conditions are met |
| 📰 **Stock News Feed** | Per-stock news aggregation using a financial news API |
| 📤 **Export Reports** | Download transaction history and P&L reports as CSV or PDF |

### 🔵 Phase 4 — Platform & DevOps *(Production Readiness)*

| Feature | Description |
|---|---|
| 🐳 **Docker Support** | Containerize frontend, backend, and MongoDB for one-command local setup |
| ☁️ **Cloud Deployment** | Deploy to Render / Railway (backend) and Vercel / Netlify (frontend) |
| 🔑 **OAuth Login** | Sign in with Google using Passport.js |
| 🛡️ **Rate Limiting & Security** | Helmet, CORS hardening, and API rate limiting for production safety |
| 🧪 **Testing Suite** | Unit tests (Jest) and API integration tests (Supertest) |
| 👨‍💼 **Admin Panel** | Manage mock stock data, users, and platform settings |

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React.js, React Router, Axios, CSS |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB, Mongoose ODM |
| **Auth** | JWT (planned), bcrypt.js (planned) |
| **Dev Tools** | Nodemon, dotenv, Postman |
| **Deployment** | Vercel (frontend), Render (backend) *(planned)* |

---

## 📁 Project Structure

```
finpulse/
│
├── frontend/                   # React application
│   ├── public/
│   └── src/
│       ├── components/         # Reusable UI components (Navbar, OrderCard, etc.)
│       ├── pages/              # Dashboard, Portfolio, Holdings, Positions
│       ├── context/            # Auth / global state context
│       ├── services/           # Axios API call functions
│       └── App.js
│
├── backend/                    # Express + Node.js server
│   ├── controllers/            # Route handler logic
│   ├── models/                 # Mongoose schemas (User, Order, Holding, Position)
│   ├── routes/                 # API route definitions
│   ├── middleware/             # Auth middleware (JWT verification)
│   ├── data/                   # Mock/seed stock data
│   └── server.js               # App entry point
│
├── .env.example
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v16+
- [MongoDB](https://www.mongodb.com/) (local or [Atlas](https://www.mongodb.com/atlas))
- [Git](https://git-scm.com/)

### 1. Clone the Repository

```bash
git clone https://github.com/rajneeshkumar615/finpulse.git
cd finpulse
```

### 2. Configure Environment Variables

```bash
cp .env.example backend/.env
```

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/finpulse
JWT_SECRET=your_super_secret_key
```

### 3. Install Dependencies

```bash
# Backend
cd backend && npm install

# Frontend
cd ../frontend && npm install
```

### 4. Run the Application

```bash
# Terminal 1 — Backend
cd backend && npm run dev

# Terminal 2 — Frontend
cd frontend && npm start
```

App runs at **http://localhost:3000** · API at **http://localhost:5000**

---

## 🔌 API Reference

| Method | Endpoint | Description | Auth |
|---|---|---|---|
| `POST` | `/api/auth/register` | Register new user | ❌ |
| `POST` | `/api/auth/login` | Login and get JWT | ❌ |
| `GET` | `/api/stocks` | Get all mock stock data | ✅ |
| `POST` | `/api/orders` | Place buy/sell order | ✅ |
| `GET` | `/api/orders` | Get order history | ✅ |
| `GET` | `/api/holdings` | Get user holdings | ✅ |
| `GET` | `/api/positions` | Get open positions | ✅ |

---

## 🏁 Conclusion

FinPulse is an actively evolving project built to simulate the full lifecycle of a retail stock trading platform. The current version establishes a solid foundation — a working React UI, structured Express API, MongoDB data models, and mock market data. Future phases will layer in live data, real-time WebSocket feeds, and production-grade infrastructure.

This project reflects practical full-stack engineering in a real-world fintech domain, with a roadmap that mirrors how professional trading platforms are built and scaled.

---

> ⭐ If this project interests you, give it a star — and feel free to open issues or PRs!
