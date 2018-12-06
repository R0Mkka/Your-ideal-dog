module.exports.countResults = function() {
    app.post('/api/get-results', (req, res) => {
        const db = dbClient.db('dogbreedsdb');
        const collection = db.collection('dogs');
        const questions = req.body;
        let dogs = null;

        collection.find().toArray((err, result) => {
            if (err) return console.log(err);

            dogs = result;

            questions.forEach(question => {
                getQuetionPoints(question, dogs);
            });

            res.send(dogs);
        });
    });
}

function getQuetionPoints(question, dogs) {
    switch(question.id) {
        case 1: Question_1(question, dogs); break;
        case 2: Question_2(question, dogs); break;
        case 3: Question_3(question, dogs); break;
        case 4: Question_4(question, dogs); break;
        // case 5: Question_5(question, dogs); break;
        // case 6: Question_6(question, dogs); break;
        // case 7: Question_7(question, dogs); break;
        // case 8: Question_8(question, dogs); break;
        // case 9: Question_9(question, dogs); break;
        // case 10: Question_10(question, dogs); break;
        // case 11: Question_11(question, dogs); break;
        // case 12: Question_12(question, dogs); break;
        // case 13: Question_13(question, dogs); break;
        // case 14: Question_14(question, dogs); break;
    }
}

function Question_1(question, dogs) {
    dogs.forEach(dog => {
        switch(question.chosenAnswer) {
            case 0: 
                if (dog.forFamily) dog.points += 10;
                if (dog.decorative) dog.points += 3;
                break;
            case 1:
                dog.points += dog.trainingSkills * 2;
                dog.points += dog.agility / 3;
                if (~dog.groups.indexOf('trainingSkills')) dog.points += 5;
                break;
            case 2:
                dog.points += dog.security * 2;
                if (~dog.groups.indexOf('security')) dog.points += 5;
                break;
            case 3:
                if (dog.watchdog) dog.points += 10;
                if (~dog.groups.indexOf('security')) dog.points += 3;
                break;
            case 4:
                if (dog.hunter) dog.points += 10;
                dog.points += dog.trainingSkills / 2;
                break;
        }
    });
}

function Question_2(question, dogs) {
    dogs.forEach(dog => {
        switch(question.chosenAnswer) {
            case 0: 
                dog.points += dog.trainingSkills / 2;
                break;
            case 1:
                dog.points += dog.trainingSkills;
                if (~dog.groups.indexOf('trainingSkills')) dog.points += 1;
                break;
            case 2:
                dog.points += dog.trainingSkills * 2;
                if (~dog.groups.indexOf('trainingSkills')) dog.points += 3;
                break;
        }
    });
}

function Question_3(question, dogs) {
    dogs.forEach(dog => {
        const splitCost = dog.cost.split('-').map(Number);

        switch(question.chosenAnswer) {
            case 0:
                if (splitCost[0] <= 450) dog.points += 12;
                else dog.points += 2;
                break;
            case 1:
                dog.points += parseFloat(1000 / (splitCost[0] + splitCost[1]), 10) * 10;
                break;
            case 2:
                dog.points += parseFloat(2500 / (splitCost[0] + splitCost[1]), 10) * 5;
                break;
            case 3:
                dog.points += parseFloat(500 / (splitCost[0] + splitCost[1]), 10) * 15;
                break;
        }
    });
}

function Question_4(question, dogs) {
    dogs.forEach(dog => {
        switch(question.chosenAnswer) {
            case 0:
                dog.points -= dog.size / 2;
                dog.points -= dog.moult / 2;
                break;
            case 1:
                dog.points -= dog.size / 3;
                dog.points -= dog.moult / 3;
                break;
            case 2:
                dog.points += dog.size;
                dog.points += dog.moult;
                break;
        }
    });
}