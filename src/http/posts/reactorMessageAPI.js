import {$authHost, $host} from './index'

export const createRectorMessage = async (theme, text, userId) => {
    const {data} = await $authHost.post('api/rectorMessage/', {theme, text, userId})
    return data
}

export const fetchRectorMessages = async () => {
    const {data} = await $authHost.get('api/rectorMessage/')
    return data
}