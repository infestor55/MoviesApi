const Movie = require("../models/movies")

// add movies to DBD
const postMovies = async(req,res)=>{
try{
    const{name}= req.body
    const{release_date} = req.body
    const{director} = req.body
    const{cast} = req.body
    const{watch_from} = req.body
    const m = new Movie({
        name: name,
        release_date: release_date,
        director: director,
        cast: cast,
        watch_from: watch_from
    });
    console.log(m);
    const saveMovie = await m.save()
    res.status(201).json({success: true, data: saveMovie})
} catch(
    error)
    {
    res.status(409).json({success: false, data: [ ],error: error})
}
}
module.exports = {
    postMovies
}