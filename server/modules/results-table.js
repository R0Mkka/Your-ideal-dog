module.exports.getReultsListListener = function() {
    app.get('/api/results-list', (req, res) => {
        const collection = dogBreedsDb.collection('results-list');

        collection.find().toArray((err, result) => {
            if (err) return console.log(err);

            res.send(result);
        });
    });
}

module.exports.addReultToListListener = function() {
    app.post('/api/results-list', (req, res) => {
        const collection = dogBreedsDb.collection('results-list');

        collection.insertOne(req.body, (err, result) => {
            if (err) return console.log(err);

            console.log('[SERVER]: New item was added in the results list.')
            res.send(req.body);
        });
    });
}