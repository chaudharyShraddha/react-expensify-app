const express = require("express");
const path = require("path");

const app = express();

const pathPublic = path.join(__dirname, "..", "public");
app.use(express.static(pathPublic));

app.get( "*", ( req, res ) => {
    res.sendFile( path.join(pathPublic, "index.html") );
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log("server is runnig"));