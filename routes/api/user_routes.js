const router = require("express").Router();
const {
   getAllUsers, addNewUser
} = require("../../controllers/usersController")

router
   .route("/")
   .get(getAllUsers)
   .post(addNewUser);

module.exports = router;
