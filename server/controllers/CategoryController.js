const db = require("../models");

const getCategories = async (req, res) => {
    try {
        const categories = await db.categories.findAll();
        res.status(200).send(categories);
    } catch (err) {
        res.status(500).send(err);
    }
}

const addCategory = async (req, res) => {
    try {
        const category = await db.categories.create(req.body);
        res.status(201).send(category);
    } catch (err) {
        res.status(500).send(err);
    }
}

const getCategoryById = async (req, res) => {
    try {
        const category = await db.categories.findByPk(req.params.id);
        res.status(200).send(category);
    } catch (err) {
        res.status(500).send(err);
    }
}


const updateCategoryById = async (req, res) => {
    try {
        const category = await db.categories.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).send(category);
    } catch (err) {
        res.status(500).send(err);
    }
}

const deleteCategoryById = async (req, res) => {
    try {
        const category = await db.categories.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).send(category);
    } catch (err) {
        res.status(500).send(err);
    }
}


module.exports = {
    getCategories,
    addCategory,
    getCategoryById,
    updateCategoryById,
    deleteCategoryById
}

