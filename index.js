import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
var items = [];
var works = [];


//Call css style
app.use(express.static("public"))

app.use(bodyParser.urlencoded({ extended: true }));

//Render index
app.get('/', (req, res) => {
  res.render('index.ejs', {items});
})

app.post("/submit", (req, res) => {
    var newItem = req.body["newItem"];
    var newItem = items.push(newItem);
    res.render("index.ejs", {items});
});

app.get('/work', (req, res) => {
    res.render('work.ejs', {works});
})

app.post("/work", (req, res) => {
    var newList = req.body["list"];
    var newList = works.push(newList);
    res.render("work.ejs", {works});
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})