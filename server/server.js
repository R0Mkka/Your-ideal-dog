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

global.app = express();
global.dbClient;
global.dogBreedsDb;

app.use(bodyParser.json());
app.use(cors(corsOptions));

mongoClient.connect((err, client) => {
    if (err) return console.log(err);

    dbClient = client;
    dogBreedsDb = dbClient.db('dogbreedsdb');

    app.listen(8000, () => {
        console.log('[SERVER]: Server started.');
        console.log('[SERVER]: Listening on port 8000.');
    });
});

const dogBreeds = require('./modules/dog-breeds');

dogBreeds.addBreedListener();
dogBreeds.getBreedsListener();

const breedsDescription = require('./modules/breeds-description');

breedsDescription.addBreedDescriptionListener();
breedsDescription.getBreedsDescriptionsListener();

const favoriteBreeds = require('./modules/favorite-breeds');

favoriteBreeds.addFavoriteBreedListener();
favoriteBreeds.getFavoriteBreedsListener();
favoriteBreeds.removeFavoriteBreedListener();

const comments = require('./modules/comments');

comments.addCommentListener();
comments.getCommentsListener();

const algorithm = require('./modules/countResults');

algorithm.countResults();

const resultsTable = require('./modules/results-table');

resultsTable.getReultsListListener();
resultsTable.addReultToListListener();