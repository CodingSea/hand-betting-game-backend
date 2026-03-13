const router = require("express").Router();
const Player = require("../models/Player");

router.get("/", async (req, res) =>
{
    try
    {
        const allPlayers = await Player.find({}).sort('-score').limit(5);
        res.send(allPlayers);
    }
    catch (e) 
    {
        console.log(e);
    }
})

router.post("/new", async (req, res) =>
{
    try
    {
        const newPlayer = new Player({
            username: req.body.username,
            score: req.body.score
        });

        await newPlayer.save();
        res.sendStatus(201).json(newPlayer);
    }
    catch (e) 
    {
        console.log(e);
    }
})


// router.get("/", async (req, res) =>
// {
//     try
//     {

//     }
//     catch(e) 
//     {
//         console.log(e);
//     }
// })


module.exports = router;