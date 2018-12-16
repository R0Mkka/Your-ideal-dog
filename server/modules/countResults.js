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

            dogs.forEach(dog => {
                console.log(dog.name);
                console.log(dog.points);
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
    }
}

function Question_1(question, dogs) {
    dogs.forEach(dog => {
        if (dog.points > -1) {
            switch(question.chosenAnswer) {
                case 0: 
                    if (dog.forFamily) dog.points += 25;
                    break;
                case 1:
                    dog.points += dog.trainingSkills * 3;
                    break;
                case 2:
                    dog.points += dog.security * 3;
                    break;
            }
        }
    });
}

function Question_2(question, dogs) {
    dogs.forEach(dog => {
        if (dog.points > -1) {
            switch(question.chosenAnswer) {
                case 0: 
                    dog.points += dog.trainingSkills;
                    break;
                case 1:
                    dog.points += dog.trainingSkills * 2;
                    break;
                case 2:
                    dog.points += dog.trainingSkills * 3;
                    break;
            }
        }
    });
}

function Question_3(question, dogs) {
    dogs.forEach(dog => {
        if (dog.points > -1) {
            const splitCost = dog.cost.split('-').map(Number);
            const average = (splitCost[0] + splitCost[1]) / 2;

            switch(question.chosenAnswer) {
                case 0:
                    if (splitCost[0] > 450) {
                        dog.points = -1;
                        break;
                    }
                    if (average < 450) dog.points += 20;
                    break;
                case 1:
                    if (splitCost[0] > 1000) {
                        dog.points = -1;
                        break;
                    }
                    if (average > 1500) {
                        dog.points = -1;
                        break;
                    }
                    if (splitCost[1] < 1000) dog.points += 20;
                    break;
                case 2:
                    if (average > 2700) {
                        dog.points = -1;
                        break;
                    }
                    if (splitCost[1] < 2500) dog.points += 20;
                    break;
                case 3:
                    dog.points += 10;
                    break;
            }
        }
    });
}

function Question_4(question, dogs) {
    const types = [];

    question.chosenAnswer.forEach(answerIndex => {
        switch(answerIndex) {
            case 0: types.push(0); break;
            case 1: types.push(2); break;
            case 2: types.push(5); break;
            case 3: types.push(7); break;
            case 4: types.push(8); break;
        }
    });

    if (types.length > 0) {
        dogs.forEach(dog => {
            if (dog.points > -1) {
                if (!~types.indexOf(dog.woolLength)) {
                    dog.points = -1;
                }
            }
        });
    }
}

function Question_5(question, dogs) {
    dogs.forEach(dog => {
        if (dog.points > -1) {
            switch(question.chosenAnswer) {
                case 0:
                    dog.points += dog.trainingSkills * 2;
                    dog.points += dog.mind * 2;
                    break;
                case 1:
                    dog.points += dog.trainingSkills;
                    dog.points += dog.mind;
                    break;
                case 2:
                    dog.points += 10;
                    break;
            }
        }
    });
}

function Question_6(question, dogs) {
    const types = [];

    question.chosenAnswer.forEach(answerIndex => {
        switch(answerIndex) {
            case 0: types.push('watchdog'); break;
            case 1: types.push('fighting'); break;
            case 2: types.push('hunter'); break;
            case 3: types.push('decorative'); break;
            case 4: types.push('sled'); break;
        }
    });
    
    if (types.length > 0) {
        dogs.forEach(dog => {
            let isNeed = false;
    
            if (dog.points > -1) {
                types.forEach(type => {
                    if(dog[type]) {
                        dog.points += 10;
                        isNeed = true;
                    }
                });
    
                if (!isNeed) dog.points = -1;
    
                isNeed = false;
            }
        });
    }
}

function Question_7(question, dogs) {
    dogs.forEach(dog => {
        if (dog.points > -1) {
            switch(question.chosenAnswer) {
                case 0:
                    dog.points += dog.attitudeToChildren * 1.5;
                    if (dog.forChildren) dog.points += 10;
                    if (dog.fighting) dog.points -= 15;
                    break;
                case 1:
                    dog.points += dog.attitudeToChildren * 0.5;
                    if (dog.fighting) dog.points -= 15;
                    break;
            }
        }
    });
}

function Question_8(question, dogs) {
    dogs.forEach(dog => {
        if (dog.points > -1) {
            switch(question.chosenAnswer) {
                case 0:
                    dog.points += 25 - dog.size;
                    if (dog.watchdog) dog.points += 10;
                    break;
                case 1:
                    dog.points += 20 - dog.size;
                    if (dog.watchdog) dog.points += 10;
                    break;
                case 2:
                    dog.points += 15 - dog.size;
                    break;
            }
        }
    });
}

function Question_9(question, dogs) {
    dogs.forEach(dog => {
        if (dog.points > -1) {
            switch(question.chosenAnswer) {
                case 0:
                    dog.points += 20 - dog.size;
                    break;
                case 1:
                    dog.points += 12 - dog.size;
                    break;
                case 2:
                    dog.points -= dog.size * 1.5;
                    break;
            }
        }
    });
}

function Question_10(question, dogs) {
    dogs.forEach(dog => {
        if (dog.points > -1) {
            switch(question.chosenAnswer) {
                case 0:
                    dog.points -= (10 - dog.moult) * 3;
                    if (dog.woolLength === 8) dog.points -= 5;
                    break;
                case 1:
                    dog.points -= (10 - dog.moult) * 1.5;
                    if (dog.woolLength === 8) dog.points -= 3;
                    break;
                case 2:
                    dog.points += dog.moult;
                    break;
            }
        }
    });
}

function Question_11(question, dogs) {
    // :)
}

function Question_12(question, dogs) {
    dogs.forEach(dog => {
        if (dog.points > -1) {
            switch(question.chosenAnswer) {
                case 0:
                    dog.points += dog.agility * 3;
                    break;
                case 1:
                    dog.points += dog.agility * 1.5;
                    break;
                case 2:
                    dog.points += (10 - dog.agility) * 3;
                    break;
            }
        }
    });
}

function Question_13(question, dogs) {
    dogs.forEach(dog => {
        if (dog.points > -1) {
            switch(question.chosenAnswer) {
                case 0:
                    if (dog.size > 4) dog.points -= 40;
                    else dog.points += 20;
                    break;
                case 1:
                    if (dog.size > 6) dog.points -= 40;
                    if (dog.size < 4) dog.points -= 25;
                    if (dog.size <= 6 && dog.size >= 4) dog.points += 20;
                    break;
                case 2:
                    if (dog.size > 6) dog.points += 20;
                    if (dog.size <= 6 && dog.size > 4) dog.points += 5;
                    if (dog.size <= 4) dog.points -= 40;
                    break;
            }
        }
    });
}

function Question_14(question, dogs) {
    dogs.forEach(dog => {
        if (dog.points > -1) {
            switch(question.chosenAnswer) {
                case 0:
                    if (dog.hypoallergenic) dog.points += 30;
                    else dog.points -= 20;
                    break;
                case 1:
                    dog.points += 10;
                    if (dog.hypoallergenic) dog.points += 5;
                    break;
            }
        }
    });
}