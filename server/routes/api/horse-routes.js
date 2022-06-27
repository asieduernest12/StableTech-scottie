const router = require("express").Router();

const {totalHorses, newHorse, getHorseById, updateHorse, deleteHorse} = require("../../controllers/horse");

router.route("/")
.get(totalHorses)
.post(newHorse)

router.route("/:id")
.get(getHorseById)
.put(updateHorse)
.delete(deleteHorse)


module.exports = router;