import express from "express";
import { Login, whoami, Logout } from "../controllers/Auth.js";
const router = express.Router();

router.get("/whoami", whoami);
router.post("/login", Login);
router.delete("/logout", Logout);

export default router;
