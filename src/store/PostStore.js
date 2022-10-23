import {makeAutoObservable} from "mobx";

export default class PostStore {

    constructor() {

        this._posts = []

        this.todayPosts = [
            {
                id: 1,
                img: '',
                title: 'Хорошая новость',
                userName: 'Елена Головач',
                text: 'Стипендия выплачивается теперь независисмо от успеваемости',
                type: 'Социальная жизнь',
                createdAt: '21.12.1488'
            },
            {
                id: 2,
                img: '',
                title: 'Хорошая новость',
                userName: 'Елена Головач',
                text: 'Стипендия выплачивается теперь независисмо от успеваемости',
                type: 'Социальная жизнь',
                createdAt: '21.12.1488'
            },
            {
                id: 3,
                img: '',
                title: 'Хорошая новость',
                userName: 'Елена Головач',
                text: 'Стипендия выплачивается теперь независисмо от успеваемости',
                type: 'Социальная жизнь',
                createdAt: '21.12.1488'
            },
            {
                id: 4,
                img: '',
                title: 'Хорошая новость',
                userName: 'Елена Головач',
                text: 'Стипендия выплачивается теперь независисмо от успеваемости',
                type: 'Социальная жизнь',
                createdAt: '21.12.1488'
            },
            {
                id: 5,
                img: '',
                title: 'Хорошая новость',
                userName: 'Елена Головач',
                text: 'Стипендия выплачивается теперь независисмо от успеваемости',
                type: 'Социальная жизнь',
                createdAt: '21.12.1488'
            },
        ]

        this._types = []

        this._selectedType = {id: 0, title: 'Все новости'}


        makeAutoObservable(this)
    }

    setPosts(posts){
        this._posts = posts
    }

    setTypes(types){
        this._types = types
    }

    setSelectedType(type){
        this._selectedType = type
    }

    get selectedType(){
        return this._selectedType
    }

    get posts(){
        return this._posts
    }

    get types(){
        return this._types
    }

}