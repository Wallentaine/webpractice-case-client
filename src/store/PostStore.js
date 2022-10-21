import {makeAutoObservable} from "mobx";

export default class PostStore {

    constructor() {

        this._posts = [
            {
                id: 1,
                img: '',
                title: 'Хорошая новость',
                userName: 'Елена Головач',
                text: 'Стипендия выплачивается теперь <b>независисмо</b> от успеваемости',
                type: 'Социальная жизнь',
                createdAt: '21.12.1488'
            },
            {
                id: 2,
                img: '',
                title: 'Плохая новость',
                userName: 'Яков Лава',
                text: 'Люди с тройками <i>отчислены</i> <b>к хуям</b> <h3>собачьим</h3>',
                type: 'Учебные новости',
                createdAt: '21.12.1488'
            },
            {
                id: 3,
                img: '',
                title: 'Нейтральная новость',
                userName: 'Валерия Язагит',
                text: '',
                type: 'Жизнь вуза',
                createdAt: '21.12.1488'
            },
        ]

        this._types = [
            {id: 1, name: 'Жизнь вуза'},
            {id: 2, name: 'Учебные новости'},
            {id: 3, name: 'Социальные новости'},
            {id: 4, name: 'Для преподавателей'},
            {id: 5, name: 'Для персонала'},
        ]

        makeAutoObservable(this)
    }

    setPosts(posts){
        this._posts = posts
    }

    setTypes(types){
        this._types = types
    }

    get posts(){
        return this._posts
    }

    get types(){
        return this._types
    }

}