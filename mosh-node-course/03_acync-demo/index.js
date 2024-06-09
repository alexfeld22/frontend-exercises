// Async version (callbacks)
// console.log('Before');
// getUser(1, (user) => {
//     // Get the repositories
//     getRepositories(user.gitHubUsername, (repos) => {
//         console.log('Repos', repos);
//         getCommits(repos[0], (commits) => {
//             // CALLBACK HELL
//         });
//     });
// });
// console.log('After');

// Sync version
// console.log('Before');
// const user = getUser(1);
// const repos = getRepositories(user.gitHubUsername);
// const commits = getCommits(repos[0]);
// console.log('After');

// callbacks
// promises
// acync/await

// console.log('Before');
// getUser(1, getRepositories);
// console.log('After');

// function displayCommits (commits) {
//     console.log(commits);
// }

// function getCommits (repos) {
//     getCommits(repos[0], displayCommits);
// }

// function getRepositories (user) {
//     getRepositories(user.gitHubUsername, getCommits);
// }

// function getUser(id, callback) {
//     setTimeout(() => {
//         console.log('Reading a user from a database...');
//         callback({ id: id, gitHubUsername: 'alex' });
//         }, 2000);
// }

// function getRepositories (username, callback) {
//     setTimeout(() => {
//         console.log(`Getting data from GitHub for user ${username}...`);
//         callback(['repo1', 'repo2', 'repo3']);
//     }, 3000);
// }

// Async version (promises)
// console.log("Before");
// getUser(1, (user) => {
//   // Get the repositories
//   getRepositories(user.gitHubUsername, (repos) => {
//     console.log("Repos", repos);
//     getCommits(repos[0], (commits) => {
//       // CALLBACK HELL
//     });
//   });
// });

// PROMISES
// console.log("Before");

// getUser(1)
//     .then(user => getRepositories(user.gitHubUsername))
//     .then(repos => getCommits(repos[0]))
//     .then(commits => console.log('commits: ',commits))
//     .catch(err => console.log('Error', err.message));

// console.log("After");

// Acync and Await approach

console.log("Before");

async function displayCommitsAsync() {
  try {
    const user = await getUser(1);
    const repos = await getRepositories(user.gitHubUsername);
    const commits = await getCommits(repos[0]);
    console.log(commits);
  } catch (err) {
    console.log('Error ', err.message);
  }
}

console.log("After");

displayCommitsAsync();

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Reading a user from a database...");
      resolve({ id: id, gitHubUsername: "alex" });
    }, 2000);
  });
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Getting data from GitHub for user ${username}...`);
    //   resolve(["repo1", "repo2", "repo3"]);
    reject (new Error('Could not get the repos...'));
    }, 3000);
  });
}

function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Getting commits from a repo...");
      resolve(["commit1", "commit21"]);
    }, 1000);
  });
}
