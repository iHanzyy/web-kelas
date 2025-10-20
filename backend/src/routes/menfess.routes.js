const express = require("express");
const menfessController = require("../controllers/menfess.controller");
const checkBadWords = require("../middleware/checkBadWords");

const router = express.Router();

router.get("/", menfessController.getAllMenfess);
router.get("/:id", menfessController.getMenfess);
router.post("/", checkBadWords, menfessController.createMenfess);
router.put("/:id", menfessController.updateMenfess);
router.delete("/:id", menfessController.deleteMenfess);

module.exports = router;
