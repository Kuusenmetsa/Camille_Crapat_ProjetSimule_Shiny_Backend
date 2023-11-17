const express = require("express");
const router = express.Router();

const ctrls = require("../controllers/devs.controllers");

router.get("/freelances", ctrls.displayDevs);
router.get("/survey", ctrls.survey);
router.get("/result", ctrls.result);

module.exports = router;
