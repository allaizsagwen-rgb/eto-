const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/dormrentals", userController.getAllUsers);
router.post("/dormrentals", userController.createUser);
router.put("/dormrentals", userController.updateUser);
module.exports = router;

// //endpoint to handle employees data retrieval
// router.get("/users", userController.getAllUsers);
// router.get("/hello", userController.getHelloWorld);
// router.get("/users/:id", userController.getUserById);
// // Route to search specifically by IP address
// router.get("/users/ip/:ip", userController.getUserByIp);
// router.get("/search/ip/:search", userController.getUserByIpOrEmail);
// router.post("/users", userController.createUser); //mag c-create ng user
// router.put("/users", userController.updateUser); //mag u-update ng user
// router.delete("/users", userController.deleteUser);
