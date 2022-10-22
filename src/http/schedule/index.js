import axios from 'axios'

const $host = axios.create({
    baseURL: process.env.REACT_APP_SCHEDULE_API_URL
})

export {
    $host
}