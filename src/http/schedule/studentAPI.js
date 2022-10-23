import {$host} from './index'

export const getStudentGroup = async (id) => {
    const {data} = $host.get('api/student/getStudentGroup/', {params: {id}})
    return data
}