const form = document.querySelector('form');

const getUsers = () => {
    axios.get(`http://localhost:3001/api/getUsers/`)
    .then(( {data} ) =>{
        const container = document.getElementById('user-container');
        const user = document.createElement('ul');
        Object.keys(data).forEach((attr) => {
            const userAttr = document.createElement('li');
            userAttr.innerHTML = `${attr}: ${data[attr]}`
            user.appendChild(userAttr)
        })
        container.appendChild(user);
    })
    .catch((error) => {
        console.log(error)
    })
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const inputs = document.querySelectorAll('input');

    inputs.forEach((input) => console.log(input.value));
    const [ name, age, lovesDogs, hasFriends] = inputs
    const body = { 
        name: name.value, 
        age: age.value, 
        lovesDogs: lovesDogs.value, 
        hasFriends: hasFriends.value
    };

    axios.post('http://localhost:3001/api/users', body)
    .then(() => {
        console.log('user info has been updated')})
        getUsers()
    .catch((error) => {
        console.log (error)})
    });


const getUserButton = document.getElementById('get-user').addEventListener('click', getUsers)


const editNameButton = document.getElementById('edit-name-button');

editNameButton.addEventListener('click', () => {
    const newName = document.getElementById('edit-name-input').value //send it back as body, param, or query
    axios.put(`http://localhost:3001/api/editName/${newName}`) //sending as a param so it expects a param
    .then(() => {alert('name has been edited')})
    .catch((error) => {console.log(error)})
})



const deleteNameButton = document.getElementById('delete-button');

deleteNameButton.addEventListener('click', () => {
    axios.delete(`http://localhost:3001/api/deleteUser`) 
    .then(() => {alert('user has been deleted')})
    .catch((error) => {console.log(error)})
})



//array destructuring, the word correlates with the number index it is. Insead of saying input[0] you can just say name

    // const res = {
    //     data: []
    // };
    // console.log(res.data) //accessing the object and then the key on the object

    // const { data } = res 
    // console.log {data}
