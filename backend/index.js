// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const bodyParser = require("body-parser");


// const { HoldingsModel } = require("./model/HoldingsModel");
// const { PositionsModel } = require("./model/PositionsModel");
// const { OrdersModel } = require("./model/OrdersModel");

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());
// app.use(express.json());

// const PORT = process.env.PORT || 3002;
// const MONGO_URI = process.env.MONGO_URI;

// mongoose
//   .connect(MONGO_URI)
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => console.log("MongoDB connection error:", err));

// /* -------------------- HOLDINGS -------------------- */
// // app.get("/holdings", async (req, res) => {
// //   let tempHoldings = [
// //     {
// //       name: "BHARTIARTL",
// //       qty: 2,
// //       avg: 538.05,
// //       price: 541.15,
// //       net: "+0.58%",
// //       day: "+2.99%",
// //     },
// //     {
// //       name: "HDFCBANK",
// //       qty: 2,
// //       avg: 1383.4,
// //       price: 1522.35,
// //       net: "+10.04%",
// //       day: "+0.11%",
// //     },
// //     {
// //       name: "INFY",
// //       qty: 1,
// //       avg: 1350.5,
// //       price: 1555.45,
// //       net: "+15.18%",
// //       day: "-1.60%",
// //       isLoss: true,
// //     },
// //   ];

// //   try {
// //     await HoldingsModel.deleteMany(); // optional cleanup
// //     await HoldingsModel.insertMany(tempHoldings);

// //     res.send("Holdings inserted successfully ✅");
// //   } catch (err) {
// //     console.log(err);
// //     res.status(500).send("Error inserting holdings ❌");
// //   }
// // });

// // /* -------------------- POSITIONS -------------------- */
// // app.get("/positions", async (req, res) => {
// //   let tempPositions = [
// //     {
// //       product: "CNC",
// //       name: "BHARTIARTL",
// //       qty: 2,
// //       avg: 538.05,
// //       price: 541.15,
// //       net: "+0.58%",
// //       day: "+2.99%",
// //       isLoss: false,
// //     },
// //     {
// //       product: "MIS",
// //       name: "HDFCBANK",
// //       qty: 2,
// //       avg: 1383.4,
// //       price: 1522.35,
// //       net: "+10.04%",
// //       day: "+0.11%",
// //       isLoss: false,
// //     },
// //   ];

// //   try {
// //     await PositionsModel.deleteMany(); // optional cleanup
// //     await PositionsModel.insertMany(tempPositions);

// //     res.send("Positions inserted successfully ✅");
// //   } catch (err) {
// //     console.log(err);
// //     res.status(500).send("Error inserting positions ❌");
// //   }
// // });
// // console.log("HoldingsModel:", HoldingsModel);
// // console.log("PositionsModel:", PositionsModel);


// //creating allHoldings route
// app.get("/allHoldings", async (req, res) => {
//     let allHoldings = await HoldingsModel.find({});
//     res.send(allHoldings);
// });
// app.get("/allPositions", async (req, res) => {
//     let allPositions = await PositionsModel.find({});
//     res.send(allPositions);
// });

// app.post("/newOrder", async (req, res) => {
//   let newOrder = new OrdersModel({
//     name: req.body.name,
//     qty: req.body.qty,
//     price: req.body.price,
//     mode: req.body.mode,
//   });
//   await newOrder.save();
//   res.send("Order received successfully ✅");
// });

// const { UserModel } = require("./model/UserModel");
// const bcrypt = require("bcrypt");

// app.post("/signup", async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const existingUser = await UserModel.findOne({ email });

//     if (existingUser) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     const hashed = await bcrypt.hash(password, 10);

//     await UserModel.create({
//       email,
//       password: hashed
//     });

//     res.json({ message: "User created successfully" });

//   } catch (err) {
//     res.status(500).json({ message: "Signup error" });
//   }
// });

// const jwt = require("jsonwebtoken");

// app.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await UserModel.findOne({ email });

//     if (!user) {
//       return res.status(400).json({ message: "User not found" });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);

//     if (!isMatch) {
//       return res.status(400).json({ message: "Wrong password" });
//     }

//     const token = jwt.sign(
//       { id: user._id, email: user.email },
//       "secretkey",
//       { expiresIn: "1h" }
//     );

//     res.json({ token });

//   } catch (err) {
//     res.status(500).json({ message: "Login error" });
//   }
// });

// /* -------------------- START SERVER -------------------- */
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const { UserModel } = require("./model/UserModel");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

const PORT = process.env.PORT || 3002;
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("MongoDB connection error:", err));

/* ================= AUTH MIDDLEWARE (NEW ADDITION) ================= */

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, "secretkey");
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

/* ================= HOLDINGS (PROTECTED) ================= */

app.get("/allHoldings", authMiddleware, async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.send(allHoldings);
});

/* ================= POSITIONS (PROTECTED) ================= */

app.get("/allPositions", authMiddleware, async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.send(allPositions);
});

/* ================= ORDERS (PROTECTED) ================= */

app.post("/newOrder", authMiddleware, async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  await newOrder.save();
  res.send("Order received successfully ✅");
});

/* ================= SIGNUP (YOUR EXISTING + CLEAN) ================= */

app.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashed = await bcrypt.hash(password, 10);

    await UserModel.create({
      email,
      password: hashed,
    });

    res.json({ message: "User created successfully" });
  } catch (err) {
    res.status(500).json({ message: "Signup error" });
  }
});

/* ================= LOGIN (YOUR EXISTING + CLEAN) ================= */

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Wrong password" });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      "secretkey",
      { expiresIn: "1h" }
    );

    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: "Login error" });
  }
});

/* ================= VERIFY TOKEN ================= */
app.get("/verify", authMiddleware, (req, res) => {
  // If authMiddleware passes, token is valid
  res.json({ valid: true, user: req.user });
});

/* ================= START SERVER ================= */

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});