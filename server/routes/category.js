const categoryController = require("../controllers/CategoryController.js");
const router = require("express").Router();
const {loggedIn} = require("../helpers/auth.middleware.js");
// get all users with callback

router.get("/", loggedIn, categoryController.getCategories);
router.post("/add", loggedIn, categoryController.addCategory);
router.get("/:id", loggedIn, categoryController.getCategoryById);
router.put("/:id", loggedIn, categoryController.updateCategoryById);
router.delete("/:id", loggedIn, categoryController.deleteCategoryById);

module.exports = router;
