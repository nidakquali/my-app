const axios = require('axios')

function getUserData() {
    axios.get('https://reqres.in/api/users/2')
    .then(response => console.log(response.data))
    .catch(error => console.log(error));
 }

getUserData()

module.exports = {getUserData}