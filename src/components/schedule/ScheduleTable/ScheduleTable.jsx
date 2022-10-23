import React from 'react'
import classes from './ScheduleTable.module.css'

//console.log(mockData)

const ScheduleTable = () => {

    let mockData = [
        {"id":1,"dayOfWeek":"Понедельник","subject":"Физ-ра","teacher":"Пидор Виталий Маркосович","time":"8:30 - 10:15","createdAt":"2022-10-23T00:00:43.834Z","updatedAt":"2022-10-23T00:00:43.834Z","groupId":1,"group":{"id":1,"name":"ВИС31","createdAt":"2022-10-22T23:43:51.934Z","updatedAt":"2022-10-22T23:43:51.934Z"}},
        {"id":2,"dayOfWeek":"Понедельник","subject":"Английский","teacher":"Я не еблан","time":"8:30 - 10:15","createdAt":"2022-10-23T00:00:43.843Z","updatedAt":"2022-10-23T00:00:43.843Z","groupId":1,"group":{"id":1,"name":"ВИС31","createdAt":"2022-10-22T23:43:51.934Z","updatedAt":"2022-10-22T23:43:51.934Z"}},
        {"id":3,"dayOfWeek":"Понедельник","subject":"Мат. Анализ","teacher":"Дима тоже не Еблан","time":"8:30 - 10:15","createdAt":"2022-10-23T00:00:44.065Z","updatedAt":"2022-10-23T00:00:44.065Z","groupId":1,"group":{"id":1,"name":"ВИС31","createdAt":"2022-10-22T23:43:51.934Z","updatedAt":"2022-10-22T23:43:51.934Z"}},
        {"id":4,"dayOfWeek":"Понедельник","subject":"Мат.Логика","teacher":"А егор еблан","time":"10:25-11:55","createdAt":"2022-10-23T00:00:44.068Z","updatedAt":"2022-10-23T00:00:44.068Z","groupId":1,"group":{"id":1,"name":"ВИС31","createdAt":"2022-10-22T23:43:51.934Z","updatedAt":"2022-10-22T23:43:51.934Z"}},
        {"id":5,"dayOfWeek":"Понедельник","subject":"Английский","teacher":"Я не еблан","time":"8:30 - 10:15","createdAt":"2022-10-23T00:13:29.244Z","updatedAt":"2022-10-23T00:13:29.244Z","groupId":1,"group":{"id":1,"name":"ВИС31","createdAt":"2022-10-22T23:43:51.934Z","updatedAt":"2022-10-22T23:43:51.934Z"}},
        {"id":6,"dayOfWeek":"Понедельник","subject":"Физ-ра","teacher":"Пидор Виталий Маркосович","time":"8:30 - 10:15","createdAt":"2022-10-23T00:13:29.251Z","updatedAt":"2022-10-23T00:13:29.251Z","groupId":1,"group":{"id":1,"name":"ВИС31","createdAt":"2022-10-22T23:43:51.934Z","updatedAt":"2022-10-22T23:43:51.934Z"}},
        {"id":7,"dayOfWeek":"Понедельник","subject":"Мат. Анализ","teacher":"Дима тоже не Еблан","time":"8:30 - 10:15","createdAt":"2022-10-23T00:13:29.254Z","updatedAt":"2022-10-23T00:13:29.254Z","groupId":1,"group":{"id":1,"name":"ВИС31","createdAt":"2022-10-22T23:43:51.934Z","updatedAt":"2022-10-22T23:43:51.934Z"}},
        {"id":8,"dayOfWeek":"Понедельник","subject":"Мат.Логика","teacher":"А егор еблан","time":"10:25 - 11:55","createdAt":"2022-10-23T00:13:29.256Z","updatedAt":"2022-10-23T00:13:29.256Z","groupId":1,"group":{"id":1,"name":"ВИС31","createdAt":"2022-10-22T23:43:51.934Z","updatedAt":"2022-10-22T23:43:51.934Z"}},
        {"id":9,"dayOfWeek":"Понедельник","subject":"Физ-ра","teacher":"Пидор Виталий Маркосович","time":"8:30 - 10:15","createdAt":"2022-10-23T00:15:21.762Z","updatedAt":"2022-10-23T00:15:21.762Z","groupId":1,"group":{"id":1,"name":"ВИС31","createdAt":"2022-10-22T23:43:51.934Z","updatedAt":"2022-10-22T23:43:51.934Z"}},
        {"id":10,"dayOfWeek":"Понедельник","subject":"Английский","teacher":"Я не еблан","time":"8:30 - 10:15","createdAt":"2022-10-23T00:15:21.763Z","updatedAt":"2022-10-23T00:15:21.763Z","groupId":1,"group":{"id":1,"name":"ВИС31","createdAt":"2022-10-22T23:43:51.934Z","updatedAt":"2022-10-22T23:43:51.934Z"}},
        {"id":11,"dayOfWeek":"Понедельник","subject":"Мат. Анализ","teacher":"Дима тоже не Еблан","time":"8:30 - 10:15","createdAt":"2022-10-23T00:15:21.764Z","updatedAt":"2022-10-23T00:15:21.764Z","groupId":1,"group":{"id":1,"name":"ВИС31","createdAt":"2022-10-22T23:43:51.934Z","updatedAt":"2022-10-22T23:43:51.934Z"}},
        {"id":12,"dayOfWeek":"Понедельник","subject":"Мат.Логика","teacher":"А егор еблан","time":"10:25-11:55","createdAt":"2022-10-23T00:15:21.767Z","updatedAt":"2022-10-23T00:15:21.767Z","groupId":1,"group":{"id":1,"name":"ВИС31","createdAt":"2022-10-22T23:43:51.934Z","updatedAt":"2022-10-22T23:43:51.934Z"}},
        {"id":13,"dayOfWeek":"Понедельник","subject":"Физ-ра","teacher":"Пидор Виталий Маркосович","time":"8:30 - 10:15","createdAt":"2022-10-23T00:16:29.816Z","updatedAt":"2022-10-23T00:16:29.816Z","groupId":1,"group":{"id":1,"name":"ВИС31","createdAt":"2022-10-22T23:43:51.934Z","updatedAt":"2022-10-22T23:43:51.934Z"}},
        {"id":14,"dayOfWeek":"Понедельник","subject":"Английский","teacher":"Я не еблан","time":"8:30 - 10:15","createdAt":"2022-10-23T00:16:29.818Z","updatedAt":"2022-10-23T00:16:29.818Z","groupId":1,"group":{"id":1,"name":"ВИС31","createdAt":"2022-10-22T23:43:51.934Z","updatedAt":"2022-10-22T23:43:51.934Z"}},
        {"id":15,"dayOfWeek":"Понедельник","subject":"Мат. Анализ","teacher":"Дима тоже не Еблан","time":"8:30 - 10:15","createdAt":"2022-10-23T00:16:29.819Z","updatedAt":"2022-10-23T00:16:29.819Z","groupId":1,"group":{"id":1,"name":"ВИС31","createdAt":"2022-10-22T23:43:51.934Z","updatedAt":"2022-10-22T23:43:51.934Z"}},
        {"id":16,"dayOfWeek":"Понедельник","subject":"Мат.Логика","teacher":"А егор еблан","time":"10:25 - 11:55","createdAt":"2022-10-23T00:16:29.821Z","updatedAt":"2022-10-23T00:16:29.821Z","groupId":1,"group":{"id":1,"name":"ВИС31","createdAt":"2022-10-22T23:43:51.934Z","updatedAt":"2022-10-22T23:43:51.934Z"}}
    ]

    mockData.sort((a, b) => {
        if (a.time !== b.time)
            return 1
        else
            return -1
    })

    console.log(mockData)

    return (
        <div className={classes.scheduleTable}>
            {/*<table>*/}
            {/*    <thead>*/}
            {/*        <tr>*/}
            {/*            <th></th>*/}
            {/*            <th>Понедельник</th>*/}
            {/*            <th>Вторник</th>*/}
            {/*            <th>Среда</th>*/}
            {/*            <th>Четверг</th>*/}
            {/*            <th>Пятница</th>*/}
            {/*            <th>Суббота</th>*/}
            {/*            <th>Воскресенье</th>*/}
            {/*        </tr>*/}
            {/*    </thead>*/}
            {/*    <tr>*/}
            {/*        <td>8:30 - 10:15</td>*/}
            {/*        <td>2</td>*/}
            {/*        <td>3</td>*/}
            {/*        <td>4</td>*/}
            {/*        <td>5</td>*/}
            {/*        <td>6</td>*/}
            {/*        <td>7</td>*/}
            {/*        <td>8</td>*/}
            {/*    </tr>*/}
            {/*    <tr>*/}
            {/*        <td>10:30 - 11:50</td>*/}
            {/*        <td>2</td>*/}
            {/*        <td>3</td>*/}
            {/*        <td>4</td>*/}
            {/*        <td>5</td>*/}
            {/*        <td>6</td>*/}
            {/*        <td>7</td>*/}
            {/*        <td>8</td>*/}
            {/*    </tr>*/}
            {/*    <tr>*/}
            {/*        <td>12:00 - 13:35</td>*/}
            {/*        <td>2</td>*/}
            {/*        <td>3</td>*/}
            {/*        <td>4</td>*/}
            {/*        <td>5</td>*/}
            {/*        <td>6</td>*/}
            {/*        <td>7</td>*/}
            {/*        <td>8</td>*/}
            {/*    </tr>*/}
            {/*    <tr>*/}
            {/*        <td>14:15 - 15:50</td>*/}
            {/*        <td>2</td>*/}
            {/*        <td>3</td>*/}
            {/*        <td>4</td>*/}
            {/*        <td>5</td>*/}
            {/*        <td>6</td>*/}
            {/*        <td>7</td>*/}
            {/*        <td>8</td>*/}
            {/*    </tr>*/}
            {/*    <tr>*/}
            {/*        <td>16:00 - 17:35</td>*/}
            {/*        <td>2</td>*/}
            {/*        <td>3</td>*/}
            {/*        <td>4</td>*/}
            {/*        <td>5</td>*/}
            {/*        <td>6</td>*/}
            {/*        <td>7</td>*/}
            {/*        <td>8</td>*/}
            {/*    </tr>*/}
            {/*    <tr>*/}
            {/*        <td>17:45 - 19:20</td>*/}
            {/*        <td>2</td>*/}
            {/*        <td>3</td>*/}
            {/*        <td>4</td>*/}
            {/*        <td>5</td>*/}
            {/*        <td>6</td>*/}
            {/*        <td>7</td>*/}
            {/*        <td>8</td>*/}
            {/*    </tr>*/}
            {/*    <tr>*/}
            {/*        <td>19:30 - 21:05</td>*/}
            {/*        <td>2</td>*/}
            {/*        <td>3</td>*/}
            {/*        <td>4</td>*/}
            {/*        <td>5</td>*/}
            {/*        <td>6</td>*/}
            {/*        <td>7</td>*/}
            {/*        <td>8</td>*/}
            {/*    </tr>*/}
            {/*</table>*/}
        </div>
    )
}

export default ScheduleTable