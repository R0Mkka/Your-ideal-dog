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
let dogBreedsDb;

app.use(bodyParser.json());
app.use(cors(corsOptions));

mongoClient.connect((err, client) => {
    if (err) return console.log(err);

    dbClient = client;
    dogBreedsDb = dbClient.db('dogbreedsdb');

    app.listen(8000, () => {
        console.log('Server started...');
    });
});

// DOG BREEDS

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

// BREEDS DESCRIPTIONS

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

// FAVORITE BREEDS

app.post('/api/favorite-breeds', (req, res) => {
    const collection = dogBreedsDb.collection('favorite-breeds');
    
    collection.insertOne(req.body, (err, result) => {
        if (err) return console.log(err);

        console.log('[SERVER]: New favorite breed was added.');
        res.send(req.body);
    });
});

app.get('/api/favorite-breeds', (req, res) => {
    const collection = dogBreedsDb.collection('favorite-breeds');

    collection.find().toArray((err, result) => {
        if (err) return console.log(err);

        console.log('[SERVER]: Favorite breed list was got.');
        res.send(result);
    });
});

app.delete('/api/favorite-breeds/:breed', (req, res) => {
    const collection = dogBreedsDb.collection('favorite-breeds');
    const breedName = req.params['breed'];

    collection.deleteOne({ name: breedName }, (err, result) => {
        if (err) console.log(err);

        console.log('[SERVER]: One favorite breed was removed.');
        res.send(result);
    });
});

// COMMENTS

app.post('/api/comments', (req, res) => {
    const collection = dogBreedsDb.collection('comments');

    collection.insertOne(req.body, (err, result) => {
        if (err) return console.log(err);

        console.log('worked!');
        res.send(req.body);
    });
});

app.get('/api/comments', (req, res) => {
    const collection = dogBreedsDb.collection('comments');

    collection.find().toArray((err, result) => {
        if (err) return console.log(err);

        res.send(result);
    });
});