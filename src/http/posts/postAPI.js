import {$authHost, $host} from './index'

export const addNewPost = async (post) => {
    const {data} = await $authHost.post('api/post/', {post})
    return data
}

export const fetchLatestPosts = async (limit) => {
    const {data} = await $host.get('api/post/latest', {params: {limit}})
    return data
}

export const fetchOnePost = async (id) => {
    const {data} = await $host.get('api/post/' + id)
    return data
}

export const fetchAllPosts = async (typeId, limit, page) => {
    const {data} = await $host.get('api/post/', {params: {typeId, limit, page}})
    return data
}

export const updatePost = async (post) => {
    const {data} = await $authHost.put('api/post/', {post})
    return data
}