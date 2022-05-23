const categoryController = require("../controllers/CategoryController.js");
const router = require("express").Router();

// get all users with callback

router.get("/", categoryController.getCategories);
router.post("/add", categoryController.addCategory);
router.get("/:id", categoryController.getCategoryById);
router.put("/:id", categoryController.updateCategoryById);
router.delete("/:id", categoryController.deleteCategoryById);

module.exports = router;
