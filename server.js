const path = require("path");
const express = require("express");

const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, "public")))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})