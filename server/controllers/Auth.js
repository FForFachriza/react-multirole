import { Users } from "../models/userModels.js";
import argon2 from "argon2";

export const Login = async (req, res) => {
  const user = await Users.findOne({
    where: { email: req.body.email },
  });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  try {
    const validPassword = await argon2.verify(user.password, req.body.password);
    if (!validPassword) {
      return res.status(400).json({ message: "Invalid password" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }

  req.session.userId = user.uuid;
  const uuid = user.uuid;
  const name = user.name;
  const email = user.email;
  const role = user.role;
  res.status(200).json({ message: "Login successful", uuid, name, email, role });
};

export const Logout = async (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(400).json({ message: err.message });
    }
    res.status(200).json({ message: "Logout successful" });
  });
};

export const whoami = async (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ message: "User not logged in" });
  }
  const user = await Users.findOne({
    attributes: ["uuid", "name", "email", "role"],
    where: { uuid: req.session.userId },
  });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.status(200).json({ message: "User found", user });
};
