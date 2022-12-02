const express = require("express");
const controller = require("../controllers/NoteController");

const router = express.Router();

router.get("/", controller.getAllDoc);
router.get("/:id", controller.getDocById);

router.post("/", controller.insertDoc);
router.post("/update/:id", controller.updateDoc);
router.post("/delete/:id", controller.deleteDoc);


module.exports = router;