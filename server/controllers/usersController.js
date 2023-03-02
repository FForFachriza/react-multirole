import { Users } from "../models/userModels.js";
import argon2 from "argon2";

export const getUsers = async (req, res) => {
  try {
    const response = await Users.findAll({
      attributes: { exclude: ["password", "confPassword"] },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getUsersById = async (req, res) => {
  try {
    const response = await Users.findOne(
      {
        where: { uuid: req.params.id },
      },
      {
        attributes: { exclude: ["password", "confPassword"] },
      }
    );
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createUsers = async (req, res) => {
  const { name, email, password, confPassword, role } = req.body;
  password !== confPassword ? res.status(400).json({ message: "Passwords do not match" }) : null;
  const hashedPassword = await argon2.hash(password);
  try {
    await Users.create({
      name: name,
      email: email,
      password: hashedPassword,
      role: role,
    });
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateUsers = async (req, res) => {
  const users = await Users.findOne({
    where: { uuid: req.params.id },
  });
  if (!users) {
    res.status(404).json({ message: "User not found" });
  }
  const { name, email, password, confPassword, role } = req.body;

  // password === "" || password === null ? null : (response.password = hashedPassword);
  // password !== confPassword ? res.status(400).json({ message: "Passwords do not match" }) : null;
  let hashedPassword;
  if (password === "" || password === null) {
    hashedPassword = users.password;
  } else {
    hashedPassword = await argon2.hash(password);
  }
  if (password !== confPassword) {
    res.status(400).json({ message: "Passwords do not match" });
  }

  try {
    await Users.update(
      {
        name: name,
        email: email,
        password: hashedPassword,
        role: role,
      },
      {
        where: { uuid: req.params.id },
      }
    );
    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteUsers = async (req, res) => {
  const user = await Users.findOne({
    where: { uuid: req.params.id },
  });
  if (!user) {
    res.status(404).json({ message: "User not found" });
  }
  try {
    await Users.destroy({
      where: { uuid: req.params.id },
    });
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
