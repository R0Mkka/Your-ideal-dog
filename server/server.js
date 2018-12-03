const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const mongoClient = new MongoClient(url, { useNewUrlParser: true });

const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
};

const app = express();

let dbClient;

app.use(bodyParser.json());
app.use(cors(corsOptions));

mongoClient.connect((err, client) => {
    if (err) return console.log(err);

    dbClient = client;
    app.listen(8000, () => {
        console.log('Server started...');
    });
});

app.get('/api/dog-breeds', (req, res) => {
    const db = dbClient.db('dogbreedsdb');
    const collection = db.collection('dogs');

    collection.find().toArray((err, result) => {
        if (err) return console.log(err);

        res.send(result);
    });
});

app.post('/api/dog-breeds', (req, res) => {
    const db = dbClient.db('dogbreedsdb');
    const collection = db.collection('dogs');

    collection.insertOne(req.body, (err, result) => {
        if (err) return console.log(err);

        console.log(req.body);
        res.send(req.body);
    });
});

app.get('/api/breeds-descriptions/:name', (req, res) => {
    const db = dbClient.db('dogbreedsdb');
    const collection = db.collection('breeds-description');
    const name = req.params['name'];

    collection.find({ name }).toArray((err, result) => {
        if (err) return console.log(err);

        console.log(result);
        res.send(result);
    });
});

app.post('/api/breeds-descriptions', (req, res) => {
    const db = dbClient.db('dogbreedsdb');
    const collection = db.collection('breeds-description');

    collection.insertOne(req.body, (err, result) => {
        if (err) return console.log(err);

        console.log(req.body);
        res.send(req.body);
    });
});