import {$authHost, $host} from './index'

export const addNewType = async (title) => {
    const {data} = await $authHost.post('api/type/', {title})
    return data
}

export const fetchAllTypes = async () => {
    const {data} = await $host.get('api/type/')
    return data
}