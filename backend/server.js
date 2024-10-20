import express from "express"; //esm syntax

const app = express();
app.get("/", (req, res) => {
    res.send("Server is ready for use");
});

app.listen(8000, () => { 
    console.log("Server started at http://localhost:8000");
});