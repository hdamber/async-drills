// timeout function
console.log('Hello there');
setTimeout(() => {
    console.log('General Kenobi');
}, 2000);

// using several timeouts
console.log('I');  //logs instantly

setTimeout(() => {
console.log('.');     //logs after 3 seconds
}, 3000);

setTimeout(() => {
console.log('spoken');  //logs after 2 seconds
}, 2000);

setTimeout(() => {
console.log('have');    //logs after 1 second
}, 1000);



// callbacks and recursion
let countDown = (num, callback) => (

    setTimeout(() => {

        if (num > 0) {
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
         let meal = {lunch: 'chicken nuggets', drink: 'water'};
         Promise.resolve().then(() => {
            (console.log(meal));
         })
          
      } else {
          Promise.reject().catch(() => {
              let err = 'nothing';
              throw new Error(err)
          })
      }
    });
  };
  orderMeSomeFood()