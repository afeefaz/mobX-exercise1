/* eslint-disable */
import { observable, action, makeObservable } from 'mobx'
import { Item } from './Item'


export class ShoppingList {
    constructor() {
        this.list = []
        this.length = 0
        // your code here
        makeObservable(this, {
            list: observable,
            length: observable,
            checkItem: action,
            addItem: action,
            editItem: action,
            deleteItem : action
        })
    }
    checkItem = (name) => {
        let item = this.list.find(i => i.name === name)
        item.completed = !item.completed
    }
    addItem = (name) => {
        let item = new Item(name);
        this.list.push(item);
    }
    editItem = (name) => {
        let input = prompt("Please enter groccery new location");
        if (input != null) {
            let item = this.list.find(i => i.name === name)
            item.location = input
          }
    }
    deleteItem = (name) => {
        let itemIndex = this.list.findIndex(i => i.name === name)
        this.list.splice(itemIndex,1)
    }
}