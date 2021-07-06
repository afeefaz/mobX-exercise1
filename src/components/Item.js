import React, { Component } from 'react';
import { observer } from 'mobx-react'

class Item extends Component {
  checkItem = (e) => {
    this.props.store.checkItem(e.target.value)
  }
  editItem = (e) => {
    this.props.store.editItem(e.target.id)
  }
  deleteItem = (e) => {
    this.props.store.deleteItem(e.target.id)
  }
  render() {
    let item = this.props.item
    return (
        <div className = {item.completed ? "crossed": null}>
          <input onClick={this.checkItem} type="checkbox" value={item.name}/>{item.name}, Location : {item.location} <i onClick={this.editItem} className="far fa-edit" id={item.name}></i> <i onClick={this.deleteItem} className="far fa-trash-alt" id={item.name}></i>
        </div>
        )
  }
}

export default observer(Item)