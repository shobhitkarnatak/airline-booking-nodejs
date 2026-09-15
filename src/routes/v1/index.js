const express = require('express')
const router = express.Router();

router.get('/info', (req, res) => {
    return res.json({ msg: "ok" })
})

module.exports = router