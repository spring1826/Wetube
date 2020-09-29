import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { userRouter } from "./router"; // export default로 안해서 중괄호사용
const app = express();

const handleHome = (req, res) => res.send("Hello from home");
const handleProfile = (req, res) => res.send("You are on my profile");

app.use(cookieParser()); // 유저로부터 받은 쿠키 이해하는 방법
app.use(bodyParser.json()); // 유저로부터 받은 데이터 이해하는 방법
app.use(bodyParser.urlencoded({ extended: true })); // 유저로부터 받은 데이터 이해하는 방법(form)
app.use(helmet()); // 안전, 보안
app.use(morgan("dev")); // logging기능

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.use("/user", userRouter);

export default app;
