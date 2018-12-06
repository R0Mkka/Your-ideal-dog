module.exports.addFavoriteBreedListener = function() {
    app.post('/api/favorite-breeds', (req, res) => {
        const collection = dogBreedsDb.collection('favorite-breeds');
        
        collection.insertOne(req.body, (err, result) => {
            if (err) return console.log(err);

            console.log('[SERVER]: New favorite breed was added.');
            res.send(req.body);
        });
    });
}

module.exports.getFavoriteBreedsListener = function() {
    app.get('/api/favorite-breeds', (req, res) => {
        const collection = dogBreedsDb.collection('favorite-breeds');

        collection.find().toArray((err, result) => {
            if (err) return console.log(err);

            res.send(result);
        });
    });
}

module.exports.removeFavoriteBreedListener = function() {
    app.delete('/api/favorite-breeds/:breed', (req, res) => {
        const collection = dogBreedsDb.collection('favorite-breeds');
        const breedName = req.params['breed'];

        collection.deleteOne({ name: breedName }, (err, result) => {
            if (err) console.log(err);

            console.log(`[SERVER]: Favorite breed "${breedName}" was removed.`);
            res.send(result);
        });
    });
}