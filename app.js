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

app.get("/", (req, res) => {
    return res.json([
        {
            task: 'get all data',
            method: "GET",
            endpoint: "/api/v1"
        },
        {
            task: 'get single data by id',
            method: "GET",
            endpoint: "/api/v1/:id",
            argument: "id in req.params"
        },
        {
            task: 'insert data',
            method: "POST",
            endpoint: "/api/v1/",
            argument: "title and description in req.body"
        },
        {
            task: 'update data',
            method: "POST",
            endpoint: "/api/v1/update/:id",
            argument: "(id in req.params) && (title and description in req.body)"
        },
        {
            task: 'delete data',
            method: "POST",
            endpoint: "/api/v1/delete/:id",
            argument: "(id in req.params) && (title and description in req.body)"
        },

    ])
})

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}. `);
})