import express from "express";
import routes from "../routes";
import {
  users,
  userDetail,
  editProfile,
  changePassword,
} from "../controllers/userController";

const userRouter = express.Router(); //router는 작은 단위의 행동들을 나눠서 만들고 제어할수 있는거?

// userRouter.get(routes.users, users);
userRouter.get(routes.userDetail, userDetail);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);

export default userRouter;
//MVC
//Modul data
//View 데이터가 어떻게 생겼는지
//Controller 데이터를 찾는 함수
