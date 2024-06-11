import { Router } from "express";
import { CreateUser, GetAllUser } from "../controller/usercontroller.js";

const router = Router();

router.get("/users", GetAllUser);
router.post("/users",CreateUser);

export default router;
