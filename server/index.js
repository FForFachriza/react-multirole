import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import productRoute from "./routes/productRoute.js";
import userRoute from "./routes/userRoute.js";
import SequelizeStore from "connect-session-sequelize";
import { db } from "./config/Database.js";
import authRoute from "./routes/authRoute.js";
const app = express();

const sessionStore = SequelizeStore(session.Store);
const store = new sessionStore({
    db: db,
})
// (async () => {
//   await db.sync();
//   console.log("Database is connected");
// })();

// store.sync();

dotenv.config({
  path: "./.env",
});

app.use(
  cors({
    credentials: true,
    origin: process.env.APP_URL,
  })
);

app.use(
  session({
    secret: process.env.APP_SECRET,
    resave: false,
    store: store,
    saveUninitialized: true,
    cookie: {
      secure: "auto",
    },
  })
);

app.use(express.json());

app.use(productRoute);
app.use(authRoute);
app.use(userRoute);

app.listen(process.env.APP_PORT, () => {
  console.log(`Server is running on port ${process.env.APP_PORT}`);
});
