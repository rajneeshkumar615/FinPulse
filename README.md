# 📈 StockSim — Paper Trading Platform

> A full-stack simulated stock trading web application inspired by Zerodha, built with the MERN stack. Practice trading strategies, manage your portfolio, and track holdings — all without real money.

---

## 🧾 Short Description

**StockSim** is a paper (simulated) trading platform that replicates the core experience of a real stock brokerage. Users can sign up, browse a dashboard of stocks with mock market data, place buy/sell orders, and monitor their portfolio — all in a risk-free environment. Built as a full-stack MERN application, it demonstrates end-to-end web development skills including authentication, REST APIs, database design, and responsive UI.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔐 **User Authentication** | Secure signup and login with JWT-based session management |
| 📊 **Stock Dashboard** | Browse stocks with simulated price data and market stats |
| 🛒 **Buy / Sell Orders** | Place market orders with real-time portfolio impact |
| 💼 **Portfolio Management** | View current holdings, invested value, and P&L |
| 📋 **Transaction History** | Complete log of all past buy/sell orders |
| 📱 **Responsive UI** | Mobile-friendly dashboard inspired by Zerodha's Kite interface |

---

## 🛠️ Tech Stack

### Frontend
- **React.js** — Component-based UI with React Router for navigation
- **CSS / Tailwind CSS** — Responsive styling and layout
- **Axios** — HTTP client for API communication

### Backend
- **Node.js** — JavaScript runtime environment
- **Express.js** — RESTful API server
- **JSON Web Tokens (JWT)** — Stateless user authentication
- **bcrypt.js** — Password hashing

### Database
- **MongoDB** — NoSQL document database for users, orders, and holdings
- **Mongoose** — ODM for schema modeling and validation

---

## 📁 Project Structure

```
stocksim/
│
├── frontend/                   # React application
│   ├── public/
│   └── src/
│       ├── components/         # Reusable UI components
│       ├── pages/              # Route-level pages (Dashboard, Portfolio, etc.)
│       ├── context/            # Auth context / global state
│       ├── services/           # Axios API call functions
│       └── App.js
│
├── backend/                    # Express + Node.js server
│   ├── controllers/            # Route handler logic
│   ├── models/                 # Mongoose schemas (User, Order, Holding)
│   ├── routes/                 # API route definitions
│   ├── middleware/             # Auth middleware (JWT verification)
│   ├── data/                   # Mock stock data
│   └── server.js               # App entry point
│
├── .env.example                # Environment variable template
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [MongoDB](https://www.mongodb.com/) (local or [Atlas](https://www.mongodb.com/atlas) cloud)
- [Git](https://git-scm.com/)

---

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/stocksim.git
cd stocksim
```

### 2. Configure Environment Variables

Create a `.env` file inside the `backend/` directory:

```bash
cp .env.example backend/.env
```

Then fill in the values:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/stocksim
JWT_SECRET=your_super_secret_key
```

### 3. Install Dependencies

**Backend:**
```bash
cd backend
npm install
```

**Frontend:**
```bash
cd ../frontend
npm install
```

### 4. Run the Application

**Start the backend server:**
```bash
cd backend
npm run dev       # uses nodemon for hot-reload
```

**Start the frontend (in a new terminal):**
```bash
cd frontend
npm start
```

The app will be live at **http://localhost:3000** and the API at **http://localhost:5000**.

---

## 🖼️ Screenshots

> *(Add screenshots of your dashboard, portfolio page, and order flow here)*

| Dashboard | Portfolio |
|---|---|
| ![Dashboard](screenshots/dashboard.png) | ![Portfolio](screenshots/portfolio.png) |

---

## 🔌 API Endpoints

| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| `POST` | `/api/auth/register` | Register a new user | ❌ |
| `POST` | `/api/auth/login` | Login and receive JWT | ❌ |
| `GET` | `/api/stocks` | Fetch all mock stock data | ✅ |
| `POST` | `/api/orders` | Place a buy/sell order | ✅ |
| `GET` | `/api/portfolio` | Get current holdings | ✅ |
| `GET` | `/api/orders/history` | Get transaction history | ✅ |

---

## 🔮 Future Improvements

- [ ] **Live Market Data** — Integrate a real-time stock API (e.g., Alpha Vantage, Yahoo Finance)
- [ ] **WebSocket Price Updates** — Push live price changes to the dashboard without page refresh
- [ ] **Watchlist** — Allow users to bookmark and track favourite stocks
- [ ] **Advanced Order Types** — Support limit orders, stop-loss, and GTT orders
- [ ] **Charts & Analytics** — Add candlestick charts using Recharts or Chart.js
- [ ] **Admin Panel** — Manage mock stock data and user accounts
- [ ] **Notifications** — In-app alerts when orders execute or prices hit targets
- [ ] **Docker Support** — Containerize the full stack for one-command deployment

---

## 🧑‍💻 Author

**Your Name**
- GitHub: [@your-username](https://github.com/your-username)
- LinkedIn: [linkedin.com/in/your-profile](https://linkedin.com/in/your-profile)
- Email: your.email@example.com

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🏁 Conclusion

StockSim demonstrates the practical implementation of a full-stack MERN application with real-world features like authentication, relational-style data modeling in MongoDB, and a dynamic React frontend. While currently using simulated data, the architecture is designed to be modular and easily extensible — a real market data feed or WebSocket layer could be plugged in with minimal changes.

This project was built as a portfolio piece to showcase skills in full-stack JavaScript development, REST API design, and UI/UX implementation.

---

> ⭐ If you found this project useful or interesting, consider giving it a star on GitHub!
