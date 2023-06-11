const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello World!' })
}
);
app.get('/api', (req, res) => {
    res.status(200).json({ message: 'Hello get API!' })
}
);
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/404.html');
}
);
app.listen(3001, () => {
    console.log("We've now got a server!");
    console.log('Your routes will be running on http://localhost:3001');
}
);