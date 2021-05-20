const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
    res.json({message: 'welcome to my app'})
});

module.exports = router;