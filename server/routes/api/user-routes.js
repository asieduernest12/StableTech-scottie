const router = require("express").Router();
const {totalUsers, newUser, getUserById, deleteUser} = require("../../controllers/user");

router.route("/")
.get(totalUsers)
.post(newUser)

router.route("/:id")
.get(getUserById)
.delete(deleteUser)

module.exports = router;
