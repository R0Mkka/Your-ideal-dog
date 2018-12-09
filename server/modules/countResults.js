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
        case 5: Question_5(question, dogs); break;
        case 6: Question_6(question, dogs); break;
        case 7: Question_7(question, dogs); break;
        case 8: Question_8(question, dogs); break;
        case 9: Question_9(question, dogs); break;
        case 10: Question_10(question, dogs); break;
        case 11: Question_11(question, dogs); break;
        case 12: Question_12(question, dogs); break;
        case 13: Question_13(question, dogs); break;
        case 14: Question_14(question, dogs); break;
        case 15: Question_15(question, dogs); break;
        case 16: Question_16(question, dogs); break;
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
                dog.points += dog.trainingSkills * 1.5;
                dog.points += dog.agility * 0.3;
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
                dog.points += dog.trainingSkills * 0.5;
                break;
        }
    });
}

function Question_2(question, dogs) {
    dogs.forEach(dog => {
        switch(question.chosenAnswer) {
            case 0: 
                dog.points += dog.trainingSkills * 0.5;
                break;
            case 1:
                dog.points += dog.trainingSkills;
                if (~dog.groups.indexOf('trainingSkills')) dog.points += 1;
                break;
            case 2:
                dog.points += dog.trainingSkills * 1.5;
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
                if (splitCost[0] <= 450) dog.points += 10;
                break;
            case 1:
                if (splitCost[0] <= 1000 && splitCost[1] <= 1000) {
                    dog.points += 10;
                    break;
                }
                if (splitCost[0] <= 1000) dog.points += 6;
                break;
            case 2:
                if (splitCost[0] <= 2500 && splitCost[1] <= 2500) {
                    dog.points += 10;
                    break;
                }
                if (splitCost[0] <= 2500) dog.points += 6;
                break;
            case 3:
                dog.points += 5;
                break;
        }
    });
}

function Question_4(question, dogs) {
    dogs.forEach(dog => {
        switch(question.chosenAnswer) {
            case 0:
                dog.points -= dog.moult * 0.5;
                break;
            case 1:
                dog.points -= dog.moult * 0.3;
                break;
            case 2:
                dog.points += dog.moult * 0.5;
                break;
        }
    });
}

function Question_5(question, dogs) {
    dogs.forEach(dog => {
        switch(question.chosenAnswer) {
            case 0:
                dog.points += dog.agility * 1.5;
                dog.points += dog.trainingSkills * 0.5;
                if (~dog.groups.indexOf('trainingSkills')) dog.points += 1;
                if (~dog.groups.indexOf('agility')) dog.points += 2;
                break;
            case 1:
                dog.points += dog.agility;
                dog.points += dog.trainingSkills * 0.3;
                if (~dog.groups.indexOf('agility')) dog.points += 1;
                break;
            case 2:
                dog.points += dog.agility * 0.7;
                break;
            case 3:
                dog.points -= dog.agility;
                dog.points -= dog.trainingSkills * 0.5;
                break;
        }
    });
}

function Question_6(question, dogs) {
    dogs.forEach(dog => {
        switch(question.chosenAnswer) {
            case 0:
                if (dog.mind < 5) {
                    dog.points -= 10;
                } else {
                    dog.points += 10;
                }
                break;
            case 1:
                dog.points += dog.mind * 0.5;
                break;
        }
    });
}

function Question_7(question, dogs) {
    dogs.forEach(dog => {
        switch(question.chosenAnswer) {
            case 0:
                if (dog.trainingSkills < 5) {
                    dog.points -= 5;
                } else {
                    dog.points += 10;
                    if (~dog.groups.indexOf('trainingSkills')) dog.points += 5;
                }
                break;
            case 1:
                dog.points += dog.trainingSkills * 1.5;
                if (~dog.groups.indexOf('trainingSkills')) dog.points += 3;
                break;
            case 2:
                dog.points += dog.trainingSkills;
                break;
            case 3:
                dog.points += dog.trainingSkills * 0.5
                break;
        }
    });
}

function Question_8(question, dogs) {
    dogs.forEach(dog => {
        switch(question.chosenAnswer) {
            case 0:
                dog.points += dog.attitudeToChildren * 1.5;
                if (~dog.groups.indexOf('attitudeToChildren')) dog.points += 3;
                break;
            case 1:
                dog.points += dog.attitudeToChildren;
                break;
        }
    });
}

function Question_9(question, dogs) {
    dogs.forEach(dog => {
        switch(question.chosenAnswer) {
            case 0:
                dog.points += dog.size * 1.5;
                if (dog.watchdog) dog.points += 3;
                break;
            case 1:
                dog.points += dog.size * 1.5;
                if (dog.forFamily) dog.points += 2;
                break;
            case 2:
                dog.points += dog.size * 1.2;
                if (dog.forFamily) dog.points += 1;
                break;
            case 3:
                dog.points += dog.size * 0.7;
                if (dog.decorative) dog.points += 5;
                break;
        }
    });
}

function Question_10(question, dogs) {
    dogs.forEach(dog => {
        switch(question.chosenAnswer) {
            case 0:
                dog.points += dog.size * 1.5;
                break;
            case 1:
                dog.points += dog.size * 1.2;
                break;
            case 2:
                dog.points += dog.size;
                break;
            case 3:
                dog.points += dog.size * 0.7;
                if (dog.decorative) dog.points += 3;
                break;
        }
    });
}

function Question_11(question, dogs) {
    dogs.forEach(dog => {
        switch(question.chosenAnswer) {
            case 0:
                if (dog.woolLength === 2) {
                    dog.points += 10;
                } else {
                    dog.points -= 5;
                }
                break;
            case 1:
                if (dog.woolLength === 5) {
                    dog.points += 10;
                } else {
                    dog.points -= 5;
                }
                break;
            case 2:
                if (dog.woolLength === 8) {
                    dog.points += 10;
                } else {
                    dog.points -= 5;
                }
                break;
        }
    });
}

function Question_12(question, dogs) {
    dogs.forEach(dog => {
        switch(question.chosenAnswer) {
            case 0:
                dog.points += dog.moult / 2;
                break;
            case 1:
                dog.points -= (10 - dog.moult) * 0.5;
                break;
            case 2:
                dog.points -= (10 - dog.moult) * 0.7;
                break;
            case 3:
                dog.points -= (10 - dog.moult) * 1.5;
                break;
        }
    });
}

function Question_13(question, dogs) {
    dogs.forEach(dog => {
        switch(question.chosenAnswer) {
            case 0:
                dog.points += 10;
                break;
            case 1:
                dog.points += 7;
                break;
            case 2:
                dog.points += 3;
                break;
            case 3:
                dog.points -= 5;
                break;
        }
    });
}

function Question_14(question, dogs) {
    dogs.forEach(dog => {
        switch(question.chosenAnswer) {
            case 0:
                dog.points += dog.mind * 1.2;
                dog.points += (10 - dog.size) * 0.6;
                break;
            case 1:
                dog.points += dog.mind;
                dog.points += (10 - dog.size) * 0.3;
                break;
            case 2:
                dog.points += 3;
                break;
        }
    });
}

function Question_15(question, dogs) {
    dogs.forEach(dog => {
        switch(question.chosenAnswer) {
            case 0:
                if (dog.size > 4) {
                    dog.points -= 10;
                } else {
                    dog.points += 10;
                }
                break;
            case 1:
                if (dog.size > 6) {
                    dog.points -= 10;
                }
                if (dog.size < 4) {
                    dog.points -= 4;
                }
                if (dog.size <= 6 && dog.size >= 4) {
                    dog.points += 10;
                }
                break;
            case 2:
                if (dog.size > 6) {
                    dog.points += 10;
                }
                if (dog.size <= 6 && dog.size > 3) {
                    dog.points += 4;
                }
                if (dog.size <= 3) {
                    dog.points -= 10;
                }
                break;
        }
    });
}

function Question_16(question, dogs) {
    dogs.forEach(dog => {
        switch(question.chosenAnswer) {
            case 0:
                if (dog.hypoallergenic) {
                    dog.points += 10;
                } else {
                    dog.points -= 5;
                }
                break;
            case 1:
                dog.points += 5;
                break;
        }
    });
}