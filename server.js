const express = require("express");
const app = express();
const port = 5000;


app.get("/api/people", (req, res) => {
    const people = [
        { id: 1, name: "Gabriel", lastName: "Pérez" },
        { id: 2, name: "Sebastián", lastName: "González" },
        { id: 3, name: "Gustavo", lastName: "Morales" },
    ];
    res.json(people);
});

app.listen(port, () => console.log(`Server running on ${port}!!!!!!!!`));