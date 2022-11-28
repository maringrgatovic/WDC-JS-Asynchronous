// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success')
  }, 4000);
})

// #2) Run the above promise and make it console.log "success"
promise1.then(resp => console.log(resp));

// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"
const promise2 = Promise.resolve(
    setTimeout(() => {
        console.log('success');
    }, 4000)
)


// #4) Catch this error and console log 'Ooops something went wrong'
Promise.reject('failed')
    .catch(console.log('Ooops something went wrong'))

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls1 = [
  'http://swapi.dev/api/people/1/?format=json',
  'http://swapi.dev/api/people/2/?format=json',
  'http://swapi.dev/api/people/3/?format=json',
  'https://swapi.dev/api/people/4/?format=json'
]

Promise.all(urls1.map(url => {
    return fetch(url).then(response => response.json())
})).then(results => {
    console.log(results);
}).catch(err => console.log('It doesn\'t work', err));


// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?
const urls2 = [
    'http://swapi.dev/api/people/1/?format=json',
    'http://swapi.dev/api/MISTAKE/2/?format=json',
    'http://swapi.dev/api/people/3/?format=json',
    'https://swapi.dev/api/people/4/?format=json'
  ]
  
  Promise.all(urls2.map(url => {
      return fetch(url).then(response => response.json())
  })).then(results => {
      console.log(results);
  }).catch(err => console.log('It doesn\'t work', err));
// ANSWER: Yes, the catch block is called