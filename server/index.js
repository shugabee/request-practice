const express = require('express');
const cors = require('cors');
const controller = require('./controller');

const app = express();
app.use(express.json());
app.use(cors());

let user = { }

// const getUsers = (req, res) => {
//     res.status(200).send(user);
// }

// app.get('/api/getUsers', getUsers)
// can write function above in a variabel and then stick the variable somewhere
///// after we put it in controller file
// app.get('/api/getUsers', conroller.getUsers)
///// then we can destructure
// const { getUsers } = require('./conroller') above
// app. get('/api/getUsers', getUsers)
//// you would also need to move let user = {} over to conroller if you move POST 

app.get('/api/getUsers/:name', (req, res) => {
    //if we want to access data being stored, 
    const { age, lovesDogs } = req.query;
    const { name } = req.params;
    res.status(200).send(lovesDogs, hasFriends, name)
})

app.post('/api/users', (req, res) => { //this is the handler function 
    user = req.body
    res.sendStatus(200); 
})

app.put('/api/editName/:newName', (req, res) => {
    const { newName } = req.params;
    user.name = newName;
    res.sendStatus(200);
})

app.delete('/api/deleteUser', (req, res) => {
    user = {}; //take user object and make it empty again
    res.sendStatus(200) //if you know you don't need to send any information
})

const PORT = 3001;
app.listen(PORT, () => console.log(`we on port ${PORT}`));