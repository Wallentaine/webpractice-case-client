import {$host} from './index'

export const addNewGroup = async (name) => {
    const {data} = await $host.post('api/group/', {name})
    return data
}

export const fetchGroups = async () => {
    const {data} = await $host.get('api/group/')
    return data
}