const express = require("express");
const cors = require("cors");
const axios = require("axios");
const path = require("path");

const app = express();

app.use(cors());

app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/teams", async (req, res) => {
    try {
        const response = await axios.get(
            "https://www.thesportsdb.com/api/v1/json/123/search_all_teams.php?l=UEFA%20Champions%20League"
        );

        res.json(response.data);

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});