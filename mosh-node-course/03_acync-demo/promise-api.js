// const p = Promise.resolve({ id: 1 });
// p.then(result => console.log(result));

// const p = Promise.reject(new Error('reason for rejection...'));
// p.catch(error => console.log(error));

const p1 = new Promise ((resolve, reject) => {
    setTimeout(() => {
        console.log('Calling facebook API...');
        resolve(1);
        // reject(new Error('because smth failed...'));
    }, 1000);
});

const p2 = new Promise ((resolve, reject) => {
    setTimeout(() => {
        console.log('Calling Twitter API...');
        resolve(2); 
        // reject(new Error('Twitter seems not to work...'));
    }, 500);
});

// Promise.all([p1, p2])
//     .then(result => console.log(result))
//     .catch(err => console.log('Error ', err.message))

Promise.race([p1, p2]) // consider fulfilled when first promise resolved
    .then(result => console.log(result))
    .catch(err => console.log('Error ', err.message))
