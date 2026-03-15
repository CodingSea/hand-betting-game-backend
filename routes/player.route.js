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
        const { username, score } = req.body;

        const player = await Player.findOneAndUpdate(
            { username: username },
            { $max: { score: score } },
            {
                upsert: true,
                new: true,
                setDefaultsOnInsert: true
            }
        );

        res.status(201).json(player);
    } catch (e)
    {
        console.error(e);
        res.sendStatus(500);
    }
});

module.exports = router;