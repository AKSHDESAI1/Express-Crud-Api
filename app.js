const express = require("express");
const cors = require("cors");

const web = require("./routes/web");
const db = require("./db/Schema");


const app = express();
const PORT = process.env.PORT || 8000;

const MONGODB_URL = "mongodb+srv://aksh2137:aksh2137@cluster0.jpqpxva.mongodb.net/test";
db(MONGODB_URL);

app.use(cors());
app.use(express.json());
app.use("/api/v1", web);

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}. `);
})