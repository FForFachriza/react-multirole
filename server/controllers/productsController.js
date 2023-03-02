import { Products } from "../models/productModels.js";
import { Users } from "../models/userModels.js";
import { Op } from "sequelize";

export const getProducts = async (req, res) => {
  try {
    let response;
    if (req.userRole === "admin") {
      response = await Products.findAll({
        attributes: { exclude: ["password,createdAt,updatedAt"] },
        include: [
          {
            model: Users,
          },
        ],
      });
    } else {
      response = await Products.findAll({
        attributes: { exclude: ["password,createdAt,updatedAt"] },
        where: { userId: req.userId },
        include: [
          {
            model: Users,
            attributes: ["name", "email"],
          },
        ],
      });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getProductsById = async (req, res) => {
  try {
    const product = await Products.findOne({
      where: { uuid: req.params.id },
    });
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    let response;
    if (req.userRole === "admin") {
      response = await Products.findOne({
        attributes: { exclude: ["password,createdAt,updatedAt"] },
        include: [
          {
            model: Users,
          },
        ],
        where: { id: product.id },
      });
    } else {
      response = await Products.findOne({
        attributes: { exclude: ["password,createdAt,updatedAt"] },
        where: { userId: req.userId, [Op.and]: { id: product.id } },
        include: [
          {
            model: Users,
            attributes: ["name", "email"],
          },
        ],
      });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name, price } = req.body;
    await Products.create({
      name: name,
      price: price,
      userId: req.userId,
    });
    res.status(201).json({ message: "Product created successfully" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const product = await Products.findOne({
      where: { uuid: req.params.id },
    });
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    const { name, price } = req.body;
    if (req.userRole === "admin") {
      await Products.update(
        {
          name: name,
          price: price,
        },
        {
          where: { id: product.id },
        }
      );
    } else {
      if (product.userId !== req.userId) {
        return res.status(403).json({ message: "You are not authorized to update this product" });
      }
      await Products.update(
        {
          name: name,
          price: price,
        },
        {
          where: { userId: req.userId, [Op.and]: { id: product.id } },
        }
      );
    }
    res.status(200).json({ message: "Product updated successfully" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Products.findOne({
      where: { uuid: req.params.id },
    });
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    if (req.userRole === "admin") {
      await Products.destroy({
        where: { id: product.id },
      });
    } else {
      if (product.userId !== req.userId) {
        return res.status(403).json({ message: "You are not authorized to delete this product" });
      }
      await Products.destroy({
        where: { userId: req.userId, [Op.and]: { id: product.id } },
      });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
