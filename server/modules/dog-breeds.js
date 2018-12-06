module.exports.getBreedsListener = function() {
    app.get('/api/dog-breeds', (req, res) => {
        const db = dbClient.db('dogbreedsdb');
        const collection = db.collection('dogs');
    
        collection.find().toArray((err, result) => {
            if (err) return console.log(err);
    
            res.send(result);
        });
    });
}

module.exports.addBreedListener = function() {
    app.post('/api/dog-breeds', (req, res) => {
        const db = dbClient.db('dogbreedsdb');
        const collection = db.collection('dogs');
    
        collection.insertOne(req.body, (err, result) => {
            if (err) return console.log(err);
    
            res.send(req.body);
        });
    });
}