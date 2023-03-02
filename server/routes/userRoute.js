import express from "express";
import { getUsers, getUsersById, createUsers, deleteUsers, updateUsers } from "../controllers/usersController.js";
import { verifyUser, verifyRole } from "../middleware/authUser.js";
const router = express.Router();

router.get("/users", verifyUser, verifyRole, getUsers);
router.get("/users/:id", verifyUser, verifyRole, getUsersById);
router.post("/users", verifyUser, verifyRole, createUsers);
router.delete("/users/:id", verifyUser, verifyRole, deleteUsers);
router.patch("/users/:id", verifyUser, verifyRole, updateUsers);

export default router;
