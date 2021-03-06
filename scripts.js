// timeout function
let text = (message) =>
    console.log(message);
text('Hello there');

setTimeout(() => {
    text('General Kenobi');
}, 2000);

// using several timeouts
let getWords = () => {
    console.log('instant');  //logs instantly

    setTimeout(() => {
        console.log('I');     //logs after 3 seconds
    }, 3000);

    setTimeout(() => {
        console.log('spoken');  //logs after 2 seconds
    }, 2000);

    setTimeout(() => {
        console.log('have');    //logs after 1 second
    }, 1000);
}
getWords();


//using several timeouts again example from review
let getWords = () => {
    console.log('instant');
    setTimeout(() => {
        console.log('I');
        setIimeout(() => {
            console.log('have');
            setTimeout(() => {
                console.log('spoken');
            }, 1000);
        }, 2000);
    }, 3000);
}
getWords();


// callbacks and recursion
let countDown = (num, callback) => (

    setTimeout(() => {
        if (num > 1) {
            console.log(num);
            countDown(num - 1, callback);
        } else {
            callback();
        }

    }, 1000)
);

let done = () => {
    console.log(`Job's done!`);
};
countDown(5, done);

//Promises 
let lunchTime = true;

let orderMeSomeFood = () => {
    return new Promise((resolve, reject) => {
        if (lunchTime == true) {
            let meal = {
                lunch: 'chicken nuggets',
                drink: 'juice'
            };
            Promise.resolve()
                .then(() => {
                    (console.log(meal));
                })
        } else {
            Promise.reject()
                .catch(() => {
                    let err = 'nothing';
                    throw new Error(err);
                })
        }
    });
};
orderMeSomeFood();

//different promise example from review
let isItLunchTime = false;
const orderMeSomeFood = (lunchTime) => {
    return new Promise((resolve, reject) => {
        if (lunchTime) {
            let lunchObj = {
                lunch: 'burger',
                drink: 'soda'
            }
            resolve(lunchObj);
        } else {
            let err = new Error('no');
            reject(err);
        }
    })
}

orderMeSomeFood(isItLunchTime)
    .then(pizza => console.log(pizza))
    .catch(pizza => console.log(pizza))