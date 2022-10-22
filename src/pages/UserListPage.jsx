import React, {useMemo, useState} from 'react';
import UserList from "../components/User/UserList/UserList";
import Input from "../components/UI/Inputs/Input/Input";

const UserListPage = () => {


    const [users, setUsers] = useState([
        {id:1, name: 'Oleg', email: 'Oleg@mail.ru', role: 'Студент'},
        {id:2, name: 'Sanya', email: 'Sanya@mail.ru', role: 'Сотрудник'},
        {id:3, name: 'Vasya', email: 'Vasya@mail.ru', role: 'Сотрудник'},
        {id:4, name: 'Igor', email: 'Igor@mail.ru', role: 'Преподаватель'},
        {id:5, name: 'Innokenty', email: 'Innokenty@mail.ru', role: 'Студент'},
    ])

    const [searchQuery, setSearchQuery] = useState('')

    const filteredUsers = useMemo(() => {
        return users.filter(user => user.email.toLowerCase().includes(searchQuery))
    }, [searchQuery])

    return (
        <div className='userListPage'>
            <div className='userListPageTitle'>
                <h1>Список пользователей</h1>
            </div>
            <div className="sortInputs">
                  <Input
                      title={'Поиск'}
                      placeholder={'Введите E-mail'}
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  />
            </div>
            <UserList users={filteredUsers}/>
        </div>
    )
}
export default UserListPage;