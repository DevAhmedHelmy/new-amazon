const db = require("../models");


const getProducts = async (req, res) => {
    try {
        const products = await db.products.findAll();
        res.status(200).send(products);
    } catch (err) {
        res.status(500).send(err);
    }
}
    
const addProduct = async (req, res) => {
    try {
        const product = await db.products.create(req.body);
        res.status(201).send(product);
    } catch (err) {
        res.status(500).send(err);
    }
}

const getProductById = async (req, res) => { 
    try {
        const product = await db.products.findByPk(req.params.id);
        res.status(200).send(product);
    } catch (err) {
        res.status(500).send(err);
    }
}

const updateProductById = async (req, res) => {
    try {
        const product = await db.products.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).send(product);
    } catch (err) {
        res.status(500).send(err);
    }
}

const deleteProductById = async (req, res) => {
    try {
        const product = await db.products.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).send(product);
    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports = {
    getProducts,
    addProduct,
    getProductById,
    updateProductById,
    deleteProductById
}