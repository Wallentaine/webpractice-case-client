import {$authHost, $host} from './index'
import jwt_decode from 'jwt-decode'

export const registration = async(email,
                                  password,
                                  role,
                                  firstName,
                                  middleName,
                                  lastName,
                                  birthDate,
                                  profession,
                                  organization,
                                  groupId) => {

    const {data} = await $host.post('api/user/registration',
    {
        email,
        password,
        role,
        firstName,
        middleName,
        lastName,
        birthDate,
        profession,
        organization,
        groupId
    })
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const login = async(email, password) => {
    const {data} = await $host.post('api/user/login', {email, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const check = async() => {
    if (localStorage.getItem('token')) {
        const {data} = await $authHost.get('api/user/check')
        localStorage.setItem('token', data.token)
        return jwt_decode(data.token)
    }
}