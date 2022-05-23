const productController = require("../controllers/ProductController.js");
const router = require("express").Router();


router.get("/", productController.getProducts);
router.get("/:id", productController.getProductById);
router.post("/add", productController.addProduct);
router.put("/:id", productController.updateProductById);
router.delete("/:id", productController.deleteProductById);

module.exports = router;
