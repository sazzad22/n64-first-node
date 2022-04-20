//the first line is like importing the express
const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

//letting app use middleware cors
app.use(cors());

//its like the route/api/endpoint
app.get('/', (req, res) => {
    res.send('Hello World1')
})

const users = [
    { id: 1, name: 'Sabana', email: 'sabana@gmail.com', phone: '0178888888' },
    { id: 2, name: 'Shabnoor', email: 'Shabnoor@gmail.com', phone: '0178888888' },
    { id: 3, name: 'Suchorita', email: 'Suchorita@gmail.com', phone: '0178888888' },
    { id: 4, name: 'suchonda', email: 'suchonda@gmail.com', phone: '0178888888' },
    { id: 5, name: 'srabonti', email: 'srabonti@gmail.com', phone: '0178888888' },
    { id: 6, name: 'sabila', email: 'sabila@gmail.com', phone: '0178888888' },
    { id: 7, name: 'sohana', email: 'sohana@gmail.com', phone: '0178888888' },
];

//this call will have two param, a route and a function - that func takes two param - req,res - req is calling and res is responding
app.get('/users', (req, res) => {
    res.send(users)
})

//this is like creating an api to be called
app.get('/users/:id', (req, res) => {
    
    const id = parseInt(req.params.id);
    const user = users.find(u=>u.id === id)
    res.send(user);
})


 //port 5000 theke data port 3000 te dekhate chacchi kintu uporer error show kore. mane server side theke client side e data share er access CORS policy diye bondho kora .
  //Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.
  
  //Express website e middleware e CORS use korar description ache.

  //Middleware is software that lies between an operating system and the applications running on it. Essentially functioning as hidden translation layer, middleware enables communication and data management for distributed applications.
  //install cors on server side

app.get('/fruits', (req, res) => {
    res.send(['mango','apple','oranges'])
})
app.get('/fruits/mango/fazle', (req, res) =>{
    res.send('sour sour fazle flavor');
});

// here the app is listening to the port
app.listen(port, () => {
    console.log(`Example App listening on port ${port}`);
})