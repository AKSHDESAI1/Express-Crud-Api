const mongoose = require("mongoose");

const db = async (MONGODB_URL) => {
    try {
        const dbOptions = {
            dbName: "CRUD"
        };
        await mongoose.connect(MONGODB_URL, dbOptions);
        console.log("Connection Successfully");
    } catch (error) {
        console.log("error", error.message);
    }
}

module.exports = db;