const mongoose = require("mongoose");

const playerSchema = mongoose.Schema(
    {
        username: String,
        score: {type: Number, default: 0}
    }
);

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;