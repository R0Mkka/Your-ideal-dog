module.exports.getBreedsDescriptionsListener = function() {
    app.get('/api/breeds-descriptions/:name', (req, res) => {
        const db = dbClient.db('dogbreedsdb');
        const collection = db.collection('breeds-description');
        const name = req.params['name'];
    
        collection.find({ name }).toArray((err, result) => {
            if (err) return console.log(err);
    
            res.send(result);
        });
    });
}

module.exports.addBreedDescriptionListener = function() {
    app.post('/api/breeds-descriptions', (req, res) => {
        const db = dbClient.db('dogbreedsdb');
        const collection = db.collection('breeds-description');

        collection.insertOne(req.body, (err, result) => {
            if (err) return console.log(err);

            res.send(req.body);
        });
    });
}