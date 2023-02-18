const express = require("express")
const {postMovies} = require('../controllers/movies')
router = express.Router()
router.post("/add", postMovies)
module.exports = router