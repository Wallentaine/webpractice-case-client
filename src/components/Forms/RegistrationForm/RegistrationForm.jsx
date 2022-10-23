import React, {useContext, useEffect, useState} from 'react';
import Form from "../../UI/Form/Form";
import Input from "../../UI/Inputs/Input/Input";
import {useDropdown} from "../../../hooks/useDropdown";
import Select from "../../UI/Select/Select";
import classes from './RegistrationFrom.module.css'
import Button from "../../UI/Button/Button";
import {useFetching} from "../../../hooks/useFetching";
import {registration} from "../../../http/posts/userAPI";
import {Context} from "../../../index";
import {useScrollUp} from "../../../hooks/useScrollUp";
import {MAIN_ROUTE} from "../../../utils/consts";
import Loading from "../../UI/Loading/Loading";
import {fetchGroups} from "../../../http/schedule/groupAPI";
import svgUp from "../../../assets/icon-arrow-up.svg";
import svgDown from "../../../assets/icon-arrow-down.svg";
import DropdownMenu from "../../UI/DropdownMenu/DropdownMenu";
import DropdownItem from "../../UI/DropdownMenu/DropdownItem";

const RegistrationForm = () => {

    const [openTypes, setOpenTypes, typesRef] = useDropdown()
    const {user} = useContext(Context)
    const navigate = useScrollUp()
    const roles = [
        {id: 1, name: "Студент", value: "STUDENT"},
        {id: 2, name: "Преподаватель", value: "TEACHER"},
        {id: 3, name: "Сотрудник", value: "WORKER"},
    ]
    const [role, setRole] = useState('STUDENT')
    const [organization, setOrganization] = useState('')
    const [firstname, setFirstname] = useState('')
    const [middlename, setMiddlename] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [lastname, setLastname] = useState('')
    const [profession, setProfession] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [openRoles, setOpenRoles, rolesCloseRef] = useDropdown()
    const [groups, setGroups] = useState([])
    const [selectedGroup, setSelectedGroup] = useState({id: 0, name: 'Выберите  группу'})

    const [registrationUser, isRegistrationLoading, registrationError] = useFetching(async () =>{
        const userData = await registration(
            email,
            password,
            role,
            firstname,
            middlename,
            lastname,
            birthDate,
            profession,
            organization,
            selectedGroup.id
        )
        user.setUser(userData)
        user.setIsAuth(true)
        navigate(MAIN_ROUTE)
    })


    const [fetchAllGroups, isGroupLoads, groupErr] = useFetching(async () => {
        await fetchGroups().then(data => {
            console.log(data)
            setGroups(data)
        })
    })

    useEffect(() => {
        fetchAllGroups()
    }, [])

    if (isGroupLoads)
        return (
            <Loading isLoading={isGroupLoads}/>
        )

    return (
        <Form>
            <Loading isLoading={isRegistrationLoading}/>
            <h1>Регистрация</h1>
            <Input
            title={"Фамилия"}
            value={lastname}
            onChange={e => setLastname(e.target.value)}
            placeholder={"Введите фамилию"}
            />
            <Input
            title={"Имя"}
            value={firstname}
            onChange={e => setFirstname(e.target.value)}
            placeholder={"Введите имя"}
            />
            <Input
            title={"Отчество"}
            value={middlename}
            onChange={e => setMiddlename(e.target.value)}
            placeholder={"Введите отчество"}
            />

            <Input
                title={"Дата рождения"}
                value={birthDate}
                onChange={e => setBirthDate(e.target.value)}
                type='date'
            />

            <Input
            title={"E-mail"}
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder={"Введите e-mail"}
            />
            <Input
            title={"Пароль"}
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder={"Введите пароль"}
            type='password'
            />
            <Input
                title={"Организация"}
                value={organization}
                onChange={e => setOrganization(e.target.value)}
                placeholder={"Введите название организации"}
            />

            <Input
                title={"Специальность"}
                value={profession}
                onChange={e => setProfession(e.target.value)}
                placeholder={"Введите название направления или кафедры"}
            />

            <div className={classes.selectRole}>
                <h2 style={{marginTop: 20, marginBottom: 20}}>
                    Выберите роль
                </h2>

                <Select
                    defaultValue='Выберите роль'
                    options={roles}
                    value={role}
                    setValue={setRole}
                />
            </div>



            {role === 'STUDENT'  &&
                <div style={{alignSelf: 'flex-start'}}>
                    <h2  style={{marginTop: 20, marginBottom: 20}}>Выберите группу</h2>
                    <div ref={typesRef}>

                        <div className='dropdownTitle'
                             onClick={() => setOpenTypes(!openTypes)}
                        >
                            {selectedGroup.name} {openTypes ? <img src={svgUp}/> : <img src={svgDown}/>}
                        </div>

                        <DropdownMenu
                            open={openTypes}
                            setOpen={setOpenTypes}
                            ref={typesRef}
                        >
                            {groups.map((group) =>
                                <DropdownItem
                                    key={group.id}
                                    onClick={() => {
                                        setSelectedGroup(group)
                                        setOpenTypes(false)
                                    }}
                                >
                                    {group.name}
                                </DropdownItem>
                            )}
                        </DropdownMenu>
                    </div>
                </div>

            }

            <Button style={{width: '100%', marginTop: 20}} onClick={() => registrationUser()}>Регистрация</Button>
        </Form>
    );
};

export default RegistrationForm;