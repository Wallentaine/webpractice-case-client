import {makeAutoObservable} from "mobx";

export default class PostStore {

    constructor() {

        this._posts = []

        this._todayPosts = []

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

    setTodayPosts(todayPosts){
        this._todayPosts = todayPosts
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

    get todayPosts(){
        return this._todayPosts
    }

}