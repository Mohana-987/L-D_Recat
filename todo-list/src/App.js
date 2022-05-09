//import logo from './logo.svg';
import './App.css';
import React from 'react';
import ListItems  from './components/ListItems';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
library.add(faTrash);

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      items:[],
      currentItem:{
        text:'',
        key:''
      }
    }
    this.handelInput=this.handelInput.bind(this);
    this.addItem=this.addItem.bind(this);
    this.deleteItem=this.deleteItem.bind(this);
    this.setUpdate=this.setUpdate.bind(this);


  }

  handelInput(e){
    this.setState({
      currentItem:{
        text:e.target.value,
        key:Date.now()
      }
    })
  }

  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    //console.log(newItem);
    if(newItem.text !== ""){
      const newItems = [...this.state.items, newItem];
      this.setState({
        items:newItems,
        currentItem:{
          text:'',
          key:''
        }
      })
    }
  }

  deleteItem(key){
    const filterItems = this.state.items.filter(item =>
      item.key!==key);
    this.setState({
      items:filterItems
    })
  }
  
  setUpdate(text,key){
    const items = this.state.items;
    items.map(item=>{
      if(item.key===key){
        item.text=text;
      }
    })
    this.setState({
      items:items
    })
  }

   render(){
    return (
      <div className="App">
        <h1>Todo List app</h1>
        <header>
          <form id="todo-list-form" onSubmit={this.addItem}> 
            <input type="text" placeholder="Enter text" 
            value={this.state.currentItem.text}
            onChange={this.handelInput}/>
            <button type="submit">Add</button>
          </form>
        </header>
        <ListItems items = {this.state.items}
        deleteItem={this.deleteItem}
        setUpdate={this.setUpdate}/>
      </div>
    );
  }
}

export default App;
