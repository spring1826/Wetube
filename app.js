import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { localsMiddleware } from "./middlewares";
import routes from "./routes";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
const app = express();

app.use(helmet()); // 안전, 보안
app.set("view engine", "pug");
app.use(cookieParser()); // 유저로부터 받은 쿠키 이해하는 방법
app.use(bodyParser.json()); // 유저로부터 받은 데이터 이해하는 방법
app.use(bodyParser.urlencoded({ extended: true })); // 유저로부터 받은 데이터 이해하는 방법(form)
app.use(morgan("dev")); // logging기능
app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
/*
MVC 패턴(구조)

M(Model): data(데이터)
V(View): how does the data look(데이터가 어떻게 생겼는지)
C(Controller): function that looks for the data(데이터를 보여주는 함수)
*/
