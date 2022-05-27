// generates random number between 0 and 9 for function below
let randomNum = Math.floor(Math.random() * 10);
// console.log(randomNum);


// randomly selects letterkenny quote with variable above
const letterkennyQuote = (randomNum) => {
    switch (randomNum) {
        case 0: 
            console.log('Pitter-patter');
            break;
        case 1:
            console.log('Your sister\’s hot, Wayne! There I said it! I said it! I regret nothing! I regret nothing!');
            break;
        case 2:
            console.log('I\'d say give yer balls a tug, but it looks like your pants are doing that for you.');
            break;
        case 3:
            console.log('You\'re fucking ten-ply, bud');
            break;
        case 4:
            console.log('If you got a problem with Canada gooses, then you got a problem with me and I suggest you let that one marinate.');
            break;
        case 5:
            console.log('I see the muscle shirt came today. Muscles coming tomorrow?');
            break;
        case 6:
            console.log('Wish you weren\'t so fuckin awkward, bud.');
            break;
        case 7:
            console.log('Figure it out.');
            break;
        case 8:
            console.log('To be faiiiiiiiiir.');
            break;
        case 9:
            console.log('Why don\'t you take about 20% of \'er there, Squirrely Dan.');
            break;
    }
}

letterkennyQuote(randomNum);