const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { sequelize } = require("./models");
const config = require("./config/config");
//require("express-async-errors");
<<<<<<< HEAD
const mysql = require("mysql2");

const models = require("./models");
const authRouter = require("./router/auth");
const userRouter = require("./router/user");
const partyRouter = require("./router/party");
const paymentRouter = require("./router/payment");
const statementRouter = require("./router/statement");
const ottRouter = require("./router/ott");
const { settleMonthly } = require("./middleware");

=======

//const authRouter = require("./router/auth");
//const userRouter = require("./router/user");
//const gatheringRouter = require("./router/gathering");
//const notificationRouter = require("./router/notification");
//const chatRouter = require("./router/chat");
>>>>>>> main
const app = express();
const port = config[process.env.NODE_ENV || "port"].port;

const corsOption = {
  //origin: ["https://podorang.com"],
  origin: true,
  optionsSuccessStatus: 200,
  credentials: true,
};

app.use(cors(corsOption));
app.use(helmet());
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Let's Podo!");
});
<<<<<<< HEAD

app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/party", partyRouter);
app.use("/payment", paymentRouter);
app.use("/statement", statementRouter);
app.use("/ott", ottRouter);

models.sequelize.sync({ force: false }).then(() => {
  console.log("success models sync");
});
=======
//app.use("/auth", authRouter);
//app.use("/user", userRouter);
//app.use("/gathering", gatheringRouter);
//app.use("/chat", chatRouter);
//app.use("/notification", notificationRouter);
>>>>>>> main

app.use((req, res) => {
  res.status(400).json({ message: "Invalid request" });
});
app.use((err, req, res, next) => {
  res.status(500).json({ message: `Something went wrong: ${err}` });
});

const scheduleData = {
  dayOfWeek: [0, 1, 2, 3, 4, 5, 6],
  hour: 00,
  minute: 00,
};
settleMonthly(scheduleData);

const podoServer = app.listen(port, async () => {
  console.log(`???? Listening on PORT: ${port}`);
  try {
    await sequelize.authenticate();
    //    app.set("realTime", await realTimeUserStatus());
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
