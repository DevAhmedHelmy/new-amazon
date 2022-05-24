const db = require("../models");
const Category = require("../models/category");
const Joi = require("joi");
const getCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.status(200).send(categories);
  } catch (err) {
    res.status(500).send(err);
  }
};

const addCategory = async (req, res) => {
  try {
    const schema = Joi.object({
      name: Joi.string().required(),
      description: Joi.string().required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
      res.status(400).send(error.details[0].message);
      return;
		}
		 
		const category = await Category.create({
			'name': req.body.name,
			'description': req.body.description,
		});
		 
    res.status(201).send(category);
  } catch (err) {
    res.status(500).send(err);
  }
};

const getCategoryById = async (req, res) => {
  try {
    const schema = Joi.object({
      id: Joi.required(),
    });
    const { error } = schema.validate(req.params.id);
    if (error) {
      res.status(400).send(error.details[0].message);
      return;
    }
    const category = await Category.findByPk(req.params.id);
    res.status(200).send(category);
  } catch (err) {
    res.status(500).send(err);
  }
};

const updateCategoryById = async (req, res) => {
  try {
    const schema = Joi.object({
      name: Joi.string().required(),
      description: Joi.string().required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
      res.status(400).send(error.details[0].message);
      return;
    }
    const category = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).send(category);
  } catch (err) {
    res.status(500).send(err);
  }
};

const deleteCategoryById = async (req, res) => {
  try {
    const schema = Joi.object({
      id: Joi.required(),
    });
    const { error } = schema.validate(req.params.id);
    if (error) {
      res.status(400).send(error.details[0].message);
      return;
    }
    const category = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).send(category);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  getCategories,
  addCategory,
  getCategoryById,
  updateCategoryById,
  deleteCategoryById,
};
