const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());

app.get("/teams", async (req, res) => {
    try {

        const response = await axios.get(
            "https://www.thesportsdb.com/api/v1/json/123/search_all_teams.php?l=UEFA%20Champions%20League"
        );

        res.json(response.data);

    } catch (error) {

        console.log(error.message);

        res.status(500).json({
            error: error.message
        });
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});