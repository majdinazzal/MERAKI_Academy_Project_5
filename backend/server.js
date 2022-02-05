const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const db = require("./database/db");

app.use(cors());

app.use(express.json());

const PORT = 5000;

// Import Routers
const searchRouter = require("./routes/searchR");
const usersRouter = require("./routes/users");
const loginRouter = require("./routes/login");
const ordersRouter = require("./routes/orders");
const productRouter = require("./routes/product");
// Routes Middleware
app.use("/users", usersRouter);
app.use("/login", loginRouter);
app.use("/orders", ordersRouter);
app.use("/product", productRouter);
app.use("/search", searchRouter);

app.listen(PORT, () => {
  console.log(`SERVER WORKING ON PORT: ${PORT}`);
});
