import {$host} from './index'

export const addSchedules = async (xlsFile) => {
    const formData = new FormData()
    formData.append("xlsFile", xlsFile)
    await $host.post('api/schedule/', formData)
}

export const fetchTeacherSchedule = async (fullName) => {
    const {data} = await $host.get('api/schedule/teacher/', {params: {fullName}})
    return data
}

export const fetchStudentSchedule = async (groupId) => {
    const {data} = await $host.get('api/schedule/student/', {params: {groupId}})
    return data
}

export const fetchAll = async () => {
    const {data} = await $host.get('api/schedule/')
    return data
}