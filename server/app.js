const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes')
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());
app.use(express.json())

app.use('/',routes)

app.listen(3005, () => {
    console.log("We've now got a server!");
    console.log('Your routes will be running on http://localhost:3005');
}
);

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/404.html');
}
);