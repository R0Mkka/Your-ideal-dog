module.exports.addCommentListener = function() {
    app.post('/api/comments', (req, res) => {
        const collection = dogBreedsDb.collection('comments');

        collection.insertOne(req.body, (err, result) => {
            if (err) return console.log(err);

            console.log('[SERVER]: New comment was saved!');
            res.send(req.body);
        });
    });
}

module.exports.getCommentsListener = function() {
    app.get('/api/comments', (req, res) => {
        const collection = dogBreedsDb.collection('comments');

        collection.find().toArray((err, result) => {
            if (err) return console.log(err);

            res.send(result);
        });
    });
}