const mongoose = require("mongoose");

async function connectToDB()
{
    try
    {
        await mongoose.connect(process.env.DB_URI).then(() =>
        {
            console.log("connected to mongoDB!");
        });
    }
    catch(e)
    {
        console.log(e)
    }
}

module.exports = connectToDB;