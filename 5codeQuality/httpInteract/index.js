// fetch ("https://api.magicthegathering.io/v1/cards")
//     .then(res => res.json())
//     .then(data => console.log(data))

// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => response.json())
// .then(json => console.log(json))

fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(json => console.log(json))

