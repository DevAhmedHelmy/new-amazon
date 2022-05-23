const userController = require("../controllers/UserController.js");
const router = require('express').Router();

// get all users with callback 

router.get("/", userController.getUsers);
router.get("/:id", userController.getUserById);
router.post("/add", userController.addUser);
router.put("/:id", userController.updateUserById);
router.delete("/:id", userController.deleteUserById);

module.exports = router;