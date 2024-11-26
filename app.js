// app.js

const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send('Hello, World from EKS!');
});

app.listen(port, () => {
    console.log(`App listening at http://0.0.0.0:${port}`);
});

