const { parse } = require('date-fns');

const data = {
    users: require('../model/users.json'),
    setUsers: function(data) { this.users = data}
};


const getAllUsers = (req, res) => {
    res.json(data.users)
}

const createNewUser = (req, res) => {
    const newUser = {
        id: data.users[data.users.length-1].id+1 || 1,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password
    }
    if (!newUser.firstname || !newUser.lastname) {
        return res.status(400).json({'message': 'First and last names are required.'});
    }
    data.setUsers([...data.users, newUser]);
    res.status(201).json(data.users)
}

const updateUser = (req, res) => {
    const user = data.users.find(user => user.id === parseInt(req.body.id));
    if (!user) {
        return res.status(400).json({'message': `User ID ${req.body.id} not found`});
    }
    if (req.body.firstname) user.firstname = req.body.firstname;
    if (req.body.lastname) user.lastname = req.body.lastname;
    if (req.body.email) user.email = req.body.email;
    if (req.body.password) user.password = req.body.password;
    const filteredArray = data.users.filter(user => user.id !== parseInt(req.body.id));
    const unsortedArray = [...filteredArray, user];
    data.setUsers(unsortedArray.sort((a,b) => a.id > b.id ? 1 : a.id < b.id ? -1 : 0));
    res.json(data.users)
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser
}