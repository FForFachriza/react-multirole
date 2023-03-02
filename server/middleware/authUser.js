import { Users } from "../models/userModels.js";

export const verifyUser = async (req, res, next) => {
  if (!req.session.userId) {
    return res.status(401).json({ message: "User not logged in" });
  }
  const user = await Users.findOne({
    where: { uuid: req.session.userId },
  });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  req.userId = user.id;
  req.userRole = user.role;
  next();
};
export const verifyRole = async (req, res, next) => {
  const user = await Users.findOne({
    where: { uuid: req.session.userId },
  });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  if (user.role !== "admin") {
    return res.status(401).json({ message: "Unauthorized" });
  }
  req.userId = user.id;
  req.userRole = user.role;
  next();
};
