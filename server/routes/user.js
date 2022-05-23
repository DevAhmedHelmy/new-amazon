const userController = require("../controllers/UserController.js");
const router = require('express').Router();

// get all users with callback 

router.get("/", userController.getUsers);
router.post("/add", userController.addUser);
router.get("/:id", userController.getUserById);
router.put("/:id", userController.updateUserById);
router.delete("/:id", userController.deleteUserById);

module.exports = router;