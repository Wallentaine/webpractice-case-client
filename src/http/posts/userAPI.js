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

    const formData = new FormData()
    formData.append("email", email)
    formData.append("password", password)
    formData.append("role", role)
    formData.append("firstName", firstName)
    formData.append("middleName", middleName)
    formData.append("lastName", lastName)
    formData.append("birthDate", birthDate)
    formData.append("profession", profession)
    formData.append("organization", organization)
    formData.append("groupId", groupId)
    const {data} = await $host.post('api/user/registration', formData)
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
        const {data} = await $authHost.get('api/user/auth')
        localStorage.setItem('token', data.token)
        return jwt_decode(data.token)
    }
}

export const fetchUserByEmail = async(email) => {
    const {data} = await $host.get('api/user/email', {params: {email}})
    return data
}

export const fetchUsers = async () => {
    const {data} = await $authHost.get('api/user/')
    return data
}

export const addUserImage = async (id, img) => {
    const formData = new FormData()
    formData.append("img", img)
    formData.append("id", id)

    const {data} = await $authHost.put('api/user/image' ,formData)
    return data
}