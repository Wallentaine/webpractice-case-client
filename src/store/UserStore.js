import {makeAutoObservable} from "mobx";

export default class UserStore {

    constructor() {
        this._isAuth = true
        this._user = {
            id: 1,
            email: 'dmitryvik55@mail.ru',
            role: '',
            firstName: '',
            middleName: '',
            lastName: '',
            birthDate: '',
            profession: '',
            organization: '',
        }
        makeAutoObservable(this)
    }

    setIsAuth(bool){
        this._isAuth = bool
    }
    setUser(user){
        this._user = user
    }

    get isAuth(){
        return this._isAuth
    }
    get user(){
        return this._user
    }



}