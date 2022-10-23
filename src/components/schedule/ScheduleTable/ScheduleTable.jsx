import React, {useContext, useEffect, useState} from 'react'
import classes from './ScheduleTable.module.css'
import {observer} from "mobx-react-lite";
import {Context} from "../../../index";
import {getStudentGroup} from "../../../http/schedule/studentAPI";
import {fetchStudentSchedule, fetchTeacherSchedule} from "../../../http/schedule/scheduleAPI";
import {fetchUserByEmail} from "../../../http/posts/userAPI";

const getUniqueSchedules = (arr) => {
    return arr.reduce((o, i) => {
        if (!o.find(v => v.time.split(' ').join('') == i.time.split(' ').join(''))) {
            o.push(i);
        }
        return o;
    }, []);
}

const sortScheduleByTime = (arr) => {
    return arr.sort((a ,b) => {
        const aTime = a.time.split(' ')[0].split(':')
        const bTime = b.time.split(' ')[0].split(':')

        if (aTime[0] > bTime[0]) {
            return -1
        } else {
            if (aTime[0] < bTime[0])
                return 1
            if (aTime[1] < bTime[1])
                return -1
            else
                return 1
        }
    })
}

const ScheduleTable = observer(() => {

    const {user} = useContext(Context)

    const [schedules, setSchedules] = useState([])

    // let mockData = [
    //     {"id":1,"dayOfWeek":"Понедельник","subject":"Физ-ра","teacher":"Пидор Виталий Маркосович","time":"8:30 - 10:15","createdAt":"2022-10-23T00:00:43.834Z","updatedAt":"2022-10-23T00:00:43.834Z","groupId":1,"group":{"id":1,"name":"ВИС31","createdAt":"2022-10-22T23:43:51.934Z","updatedAt":"2022-10-22T23:43:51.934Z"}},
    //     {"id":4,"dayOfWeek":"Четверг","subject":"Мат.Логика","teacher":"А егор еблан","time":"10:25 - 11:55","createdAt":"2022-10-23T00:00:44.068Z","updatedAt":"2022-10-23T00:00:44.068Z","groupId":1,"group":{"id":1,"name":"ВИС31","createdAt":"2022-10-22T23:43:51.934Z","updatedAt":"2022-10-22T23:43:51.934Z"}},
    //     {"id":2,"dayOfWeek":"Понедельник","subject":"Английский","teacher":"Я не еблан","time":"8:35 - 10:10","createdAt":"2022-10-23T00:00:43.843Z","updatedAt":"2022-10-23T00:00:43.843Z","groupId":1,"group":{"id":1,"name":"ВИС31","createdAt":"2022-10-22T23:43:51.934Z","updatedAt":"2022-10-22T23:43:51.934Z"}},
    //     {"id":3,"dayOfWeek":"Понедельник","subject":"Мат. Анализ","teacher":"Дима тоже не Еблан","time":"10:20 - 11:45","createdAt":"2022-10-23T00:00:44.065Z","updatedAt":"2022-10-23T00:00:44.065Z","groupId":1,"group":{"id":1,"name":"ВИС31","createdAt":"2022-10-22T23:43:51.934Z","updatedAt":"2022-10-22T23:43:51.934Z"}},
    //     {"id":5,"dayOfWeek":"Пятница","subject":"Мат.Логика","teacher":"А егор еблан","time":"10:25 - 11:55","createdAt":"2022-10-23T00:00:44.068Z","updatedAt":"2022-10-23T00:00:44.068Z","groupId":1,"group":{"id":1,"name":"ВИС31","createdAt":"2022-10-22T23:43:51.934Z","updatedAt":"2022-10-22T23:43:51.934Z"}},
    //     {"id":6,"dayOfWeek":"Вторник","subject":"Английский","teacher":"Я не еблан","time":"8:35 - 10:10","createdAt":"2022-10-23T00:00:43.843Z","updatedAt":"2022-10-23T00:00:43.843Z","groupId":1,"group":{"id":1,"name":"ВИС31","createdAt":"2022-10-22T23:43:51.934Z","updatedAt":"2022-10-22T23:43:51.934Z"}},
    //     {"id":7,"dayOfWeek":"Среда","subject":"Мат. Анализ","teacher":"Дима тоже не Еблан","time":"10:20 - 11:45","createdAt":"2022-10-23T00:00:44.065Z","updatedAt":"2022-10-23T00:00:44.065Z","groupId":1,"group":{"id":1,"name":"ВИС31","createdAt":"2022-10-22T23:43:51.934Z","updatedAt":"2022-10-22T23:43:51.934Z"}},
    // ]

    useEffect(() => {
        if (user.user.role === "STUDENT") {
            getStudentGroup(user.user.id).then((data) => {
                return data
            }).then((data) => {
                fetchStudentSchedule(data).then((data) => {
                    setSchedules(data)
                })
            })
        }
        if (user.user.role === "TEACHER") {
            fetchUserByEmail(user.user.email).then((data) => {
                return data
            }).then((data) => {
                const fullName = data.lastName + " " + data.firstName + " " + data.middleName
                console.log(fullName)
                fetchTeacherSchedule(fullName).then((data) => {
                    setSchedules(data)
                })
            })
        }
        if (schedules.length > 0) {
            getUniqueSchedules(schedules)
            setSchedules(sortScheduleByTime(schedules))
        }

    }, [user])

    return (
        <div className={classes.scheduleTable}>
            <div className={classes.dayItem}>
                <div className={classes.dayTitle}>Понедельник</div>
                {schedules.map((item, index) => {
                    if (item.dayOfWeek === "Понедельник") {
                        return <div key={item.id} className={classes.scheduleItem + ' ' + (index % 2 === 0 ? classes.scheduleColor1 : classes.scheduleColor2)}>
                            <div className={classes.header}>
                                <div className={classes.headerTime}>{item.time}</div>
                                <div className={classes.headerGroup}>{item.group.name}</div>
                            </div>

                            <div className={classes.subjectTitle}>Предмет</div>
                            <div className={classes.subjectName}>{item.subject}</div>

                            <div className={classes.teacherTitle}>Преподаватель</div>
                            <div className={classes.teacherName}>{item.teacher}</div>
                        </div>
                    }
                })}
            </div>
            <div className={classes.dayItem}>
                <div className={classes.dayTitle}>Вторник</div>
                {schedules.map((item, index)  => {
                    if (item.dayOfWeek === "Вторник") {
                        return <div key={item.id} className={classes.scheduleItem + ' ' + (index % 2 === 0 ? classes.scheduleColor1 : classes.scheduleColor2)}>
                            <div className={classes.header}>
                                <div className={classes.headerTime}>{item.time}</div>
                                <div className={classes.headerGroup}>{item.group.name}</div>
                            </div>

                            <div className={classes.subjectTitle}>Предмет</div>
                            <div className={classes.subjectName}>{item.subject}</div>

                            <div className={classes.teacherTitle}>Преподаватель</div>
                            <div className={classes.teacherName}>{item.teacher}</div>
                        </div>
                    }
                })}
            </div>
            <div className={classes.dayItem}>
                <div className={classes.dayTitle}>Среда</div>
                {schedules.map((item, index) => {
                    if (item.dayOfWeek === "Среда") {
                        return <div key={item.id} className={classes.scheduleItem + ' ' + (index % 2 === 0 ? classes.scheduleColor1 : classes.scheduleColor2)}>
                            <div className={classes.header}>
                                <div className={classes.headerTime}>{item.time}</div>
                                <div className={classes.headerGroup}>{item.group.name}</div>
                            </div>

                            <div className={classes.subjectTitle}>Предмет</div>
                            <div className={classes.subjectName}>{item.subject}</div>

                            <div className={classes.teacherTitle}>Преподаватель</div>
                            <div className={classes.teacherName}>{item.teacher}</div>
                        </div>
                    }
                })}
            </div>
            <div className={classes.dayItem}>
                <div className={classes.dayTitle}>Четверг</div>
                {schedules.map((item, index) => {
                    if (item.dayOfWeek === "Четверг") {
                        return <div key={item.id} className={classes.scheduleItem + ' ' + (index % 2 === 0 ? classes.scheduleColor1 : classes.scheduleColor2)}>
                            <div className={classes.header}>
                                <div className={classes.headerTime}>{item.time}</div>
                                <div className={classes.headerGroup}>{item.group.name}</div>
                            </div>

                            <div className={classes.subjectTitle}>Предмет</div>
                            <div className={classes.subjectName}>{item.subject}</div>

                            <div className={classes.teacherTitle}>Преподаватель</div>
                            <div className={classes.teacherName}>{item.teacher}</div>
                        </div>
                    }
                })}
            </div>
            <div className={classes.dayItem}>
                <div className={classes.dayTitle}>Пятница</div>
                {schedules.map((item, index) => {
                    if (item.dayOfWeek === "Пятница") {
                        return <div key={item.id} className={classes.scheduleItem + ' ' + (index % 2 === 0 ? classes.scheduleColor1 : classes.scheduleColor2)}>
                            <div className={classes.header}>
                                <div className={classes.headerTime}>{item.time}</div>
                                <div className={classes.headerGroup}>{item.group.name}</div>
                            </div>

                            <div className={classes.subjectTitle}>Предмет</div>
                            <div className={classes.subjectName}>{item.subject}</div>

                            <div className={classes.teacherTitle}>Преподаватель</div>
                            <div className={classes.teacherName}>{item.teacher}</div>
                        </div>
                    }
                })}
            </div>
            <div className={classes.dayItem}>
                <div className={classes.dayTitle}>Суббота</div>
                {schedules.map((item, index) => {
                    if (item.dayOfWeek === "Суббота") {
                        return <div key={item.id} className={classes.scheduleItem + ' ' + (index % 2 === 0 ? classes.scheduleColor1 : classes.scheduleColor2)}>
                            <div className={classes.header}>
                                <div className={classes.headerTime}>{item.time}</div>
                                <div className={classes.headerGroup}>{item.group.name}</div>
                            </div>

                            <div className={classes.subjectTitle}>Предмет</div>
                            <div className={classes.subjectName}>{item.subject}</div>

                            <div className={classes.teacherTitle}>Преподаватель</div>
                            <div className={classes.teacherName}>{item.teacher}</div>
                        </div>
                    }
                })}
            </div>
            <div className={classes.dayItem}>
                <div className={classes.dayTitle}>Воскресенье</div>
                <div className={classes.scheduleItem}>Выходной</div>
            </div>
        </div>
    )
})

export default ScheduleTable