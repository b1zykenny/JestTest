const axios = require('axios');
const mapArr = require('./mapArr')

const getData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    const userId = response.data.map(user => user.id)
    return mapArr(userId)
}

module.exports = getData;