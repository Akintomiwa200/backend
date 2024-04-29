const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser")
const morgan = require("morgan");
const path = require("path");
const connectDB = require("./server/db/database");

const app = express();



dotenv.config({path: "data.env"});
const PORT = process.env.PORT || 7000;




app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan("tiny"));
app.use("/css" , express.static(path.resolve(__dirname, "assets/css")));
app.use("/img" , express.static(path.resolve(__dirname, "assets/img")));
app.use("/js" , express.static(path.resolve(__dirname, "assets/js")));


app.set("view engine", "ejs");

connectDB();

app.listen(PORT, (req, res) => {
    console.log(`server is running on port http://localhost:${PORT}`);
});