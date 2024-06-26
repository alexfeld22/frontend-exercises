
// getCustomer(1, (customer) => {
//   console.log('Customer: ', customer);
//   if (customer.isGold) {
//     getTopMovies((movies) => {
//       console.log('Top movies: ', movies);
//       sendEmail(customer.email, movies, () => {
//         console.log('Email sent...')
//       });
//     });
//   }
// });

async function sendEmailWithTopMovies (id) {
  try {
    const customer = await getCustomer(id);
    console.log('Customer: ', customer);
    if (customer.isGold) {
      const topMovies = await getTopMovies();
      console.log('Top movies: ', movies);
      await sendEmail (customer.email, topMovies);
      console.log('Email sent...');
    }
  } catch (err) {
    console.log('Error: ', err)
  }
}

sendEmailWithTopMovies(1);

function getCustomer(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ 
        id: id, 
        name: 'Alex Feld', 
        isGold: true, 
        email: 'email' 
      });
    }, 4000);  
  })
}

function getTopMovies() {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve(['movie1', 'movie2']);
    }, 4000);
  })
}

function sendEmail(email, movies, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 4000);
  })
}