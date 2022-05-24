const productController = require("../controllers/ProductController.js");
const router = require("express").Router();


router.get("/", productController.getProducts);
router.post("/add", productController.addProduct);
router.get("/:id", productController.getProductById);
router.put("/:id", productController.updateProductById);
router.delete("/:id", productController.deleteProductById);

module.exports = router;
