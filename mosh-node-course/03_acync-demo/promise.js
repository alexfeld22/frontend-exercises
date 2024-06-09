const p = new Promise((resolve, rejcect) => {
    // Kick off some async work
    // ...
    setTimeout(() => {
        // resolve(1); // pending => resolved, fulfilled
        rejcect(new Error('message')); // pending => rejected
    }, 2000);
});

p
    .then(result => console.log(`Result: ${result}`))
    .catch(err => console.log('Error', err.message))