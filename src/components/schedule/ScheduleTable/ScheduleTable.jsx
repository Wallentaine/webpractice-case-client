import React from 'react'
import classes from './ScheduleTable.module.css'

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

const ScheduleTable = () => {

    let mockData = [
        {"id":1,"dayOfWeek":"Понедельник","subject":"Физ-ра","teacher":"Пидор Виталий Маркосович","time":"8:30 - 10:15","createdAt":"2022-10-23T00:00:43.834Z","updatedAt":"2022-10-23T00:00:43.834Z","groupId":1,"group":{"id":1,"name":"ВИС31","createdAt":"2022-10-22T23:43:51.934Z","updatedAt":"2022-10-22T23:43:51.934Z"}},
        {"id":4,"dayOfWeek":"Четверг","subject":"Мат.Логика","teacher":"А егор еблан","time":"10:25 - 11:55","createdAt":"2022-10-23T00:00:44.068Z","updatedAt":"2022-10-23T00:00:44.068Z","groupId":1,"group":{"id":1,"name":"ВИС31","createdAt":"2022-10-22T23:43:51.934Z","updatedAt":"2022-10-22T23:43:51.934Z"}},
        {"id":2,"dayOfWeek":"Понедельник","subject":"Английский","teacher":"Я не еблан","time":"8:35 - 10:10","createdAt":"2022-10-23T00:00:43.843Z","updatedAt":"2022-10-23T00:00:43.843Z","groupId":1,"group":{"id":1,"name":"ВИС31","createdAt":"2022-10-22T23:43:51.934Z","updatedAt":"2022-10-22T23:43:51.934Z"}},
        {"id":3,"dayOfWeek":"Понедельник","subject":"Мат. Анализ","teacher":"Дима тоже не Еблан","time":"10:20 - 11:45","createdAt":"2022-10-23T00:00:44.065Z","updatedAt":"2022-10-23T00:00:44.065Z","groupId":1,"group":{"id":1,"name":"ВИС31","createdAt":"2022-10-22T23:43:51.934Z","updatedAt":"2022-10-22T23:43:51.934Z"}},
    ]


    getUniqueSchedules(mockData)

    console.log(sortScheduleByTime(mockData))

    return (
        <div className={classes.scheduleTable}>
            <div className={classes.dayItem}>
                <div className={classes.dayTitle}>Понедельник</div>
                {mockData.map((item) => {
                    if (item.dayOfWeek === "Понедельник") {
                        return <div className={classes.scheduleItem}>
                            {item.subject}
                        </div>
                    }
                })}
            </div>
            <div className={classes.dayItem}>
                <div className={classes.dayTitle}>Вторник</div>
                {mockData.map((item) => {
                    if (item.dayOfWeek === "Вторник") {
                        return <div className={classes.scheduleItem}>
                            {item.subject}
                        </div>
                    }
                })}
            </div>
            <div className={classes.dayItem}>
                <div className={classes.dayTitle}>Среда</div>
            </div>
            <div className={classes.dayItem}>
                <div className={classes.dayTitle}>Четверг</div>
                {mockData.map((item) => {
                    if (item.dayOfWeek === "Четверг") {
                        return <div className={classes.scheduleItem}>
                            {item.subject}
                        </div>
                    }
                })}
            </div>
            <div className={classes.dayItem}>
                <div className={classes.dayTitle}>Пятница</div>
                {mockData.map((item) => {
                    if (item.dayOfWeek === "Пятница") {
                        return <div className={classes.scheduleItem}>
                            {item.subject}
                        </div>
                    }
                })}
            </div>
            <div className={classes.dayItem}>
                <div className={classes.dayTitle}>Суббота</div>
                {mockData.map((item) => {
                    if (item.dayOfWeek === "Суббота") {
                        return <div className={classes.scheduleItem}>
                            {item.subject}
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
}

export default ScheduleTable