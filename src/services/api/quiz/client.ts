import axios from 'axios';

const client = axios.create({
    baseURL: 'https://opentdb.com/api.php'
});


export {client};