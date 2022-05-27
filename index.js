let randomNum = Math.random(Math.floor() * 3);
console.log(randomNum)

const letterkennyQuote = (randomNum) => {
    switch (randomNum) {
        case 1: 
            console.log('Pitter-patter');
            break;
        case 2:
            console.log('Your Sister\’s Hot, Wayne! There I Said It! I Said It! I Regret Nothing! I Regret Nothing!');
            break;
        case 3:
            console.log('I\'d Say Give Yer B***S A Tug, But It Looks Like Your Pants Are Doing That For You.');
            break;
    }
}

letterkennyQuote(randomNum);