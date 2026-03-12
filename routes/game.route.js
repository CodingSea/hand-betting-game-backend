const router = require("express").Router();
const Player = require("../models/Player");

router.get("/", async (req, res) =>
{
    try
    {
        const allPlayers = await Player.find();
        res.send(allPlayers);
    }
    catch(e) 
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