import React, {useEffect, useMemo, useState} from 'react';
import Input from "../Inputs/Input/Input";

const Search = ({users, setUsers}) => {

    const [searchQuery, setSearchQuery] = useState('')

    useEffect(() => {
        setUsers(users.filter(user => user.email.includes(searchQuery)))
    }, [searchQuery])

    return (
        <div>
            <Input
                value={searchQuery}
                placeholder={'Введите email'}
                onChange={e => setSearchQuery(e.target.value)}
                title={'Поиск'}
                style={{width: 400}}/>
        </div>
    );
};

export default Search;