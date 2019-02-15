import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import Cookies from 'js-cookie';

import Tasks from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import SearchBar from './components/TodoComponents/Searchbar';
import SideBar from './components/TodoComponents/SideBar';
import Categories from './components/TodoComponents/Categories';

const start = [
  {
    task: 'Lets get you started',
    id: 1528817077286,
    cat: 1550170239860,
    completed: false,
  },
];

const categories = [
  {
    title: "Default",
    id: 1550170239860,
    active: false,
  },
  {
    title: "Urgent",
    id: 1550170249056,
    active: false,
  },
  {
    title: "School",
    id: 1550170283856,
    active: false,
  }
];

class App extends Component {
  constructor(){
    super();
    this.checkSave = ((Cookies.getJSON('todos') === undefined )? start: Cookies.getJSON('todos'));
    if(Cookies.getJSON('dark')){
      require('./bootstrap.min.css');
    }
    this.state = {
      todos: this.checkSave,
      displayTodos: this.checkSave,
      cats: categories,
      todo: '',
      cat: '',
      searchWord: '',
      dropdownOpen: false,
      splitButtonOpen: false,
    }
  }

  updateDisplay = current => {
    this.setState({
      displayTodos: current,
    })
  }

  darkHandler = () => {
    Cookies.set('dark', !Cookies.getJSON('dark'));
    window.location.reload();
  }

  clickHandler = (index) =>{
    let newTodos = [...this.state.todos];
    if(newTodos[index].completed){
      newTodos[index].completed = false;
    }
    else {
      newTodos[index].completed = true;
    }
    this.setState({
      todos: newTodos,
      todo: '',
    })
    this.updateSave(newTodos);
    this.updateDisplay(newTodos);
  }

  updateSave = saveList => {
    Cookies.remove('todos');
    Cookies.set('todos', saveList);
  }

  resetHandler = () => {
    Cookies.set('todos', [...start]);
    this.setState({
      todos: [...start],
      todo: '',
    })
    this.updateDisplay([...start]);
  }

  filterHandler = () =>{
    const removedCompleted = [...this.state.todos].filter(task => task.completed === false);
    this.setState({
      todos: removedCompleted,
    });
    this.updateSave(removedCompleted);
    this.updateDisplay(removedCompleted);
  }

  searchFilter = e =>{
    const displayTodos = [...this.state.todos].filter( current => current.task.toLowerCase().includes(e.target.value.toLowerCase()));
    this.setState({
      searchWord: e.target.value,
      displayTodos
    });
  }

  removeCat = index => {
    console.log(this.state.cats[index].id);
    console.log([...this.state.cats].splice(index,1));
    console.log([...this.state.tasks].map(x => ((x.cat == this.state.cats[index].id) ? x.cat = '' : x )));
    // this.setState({
    //   cats: ,
    // });
  }

  addTask = e => {
    e.preventDefault();
    const newTask = {
      task: this.state.todo,
      id: Date.now(),
      cat: '',
      completed: false,
    }
    this.setState({
      todos: [...this.state.todos,newTask],
      todo: '',
    })
    this.updateSave([...this.state.todos,newTask]);
    this.updateDisplay([...this.state.todos,newTask]);
  }

  newCat = e => {
    e.preventDefault();
    const newCat = {
      title: this.state.cat,
      id: Date.now(),
      active: false,
    }
    this.setState({
      cats: [...this.state.cats,newCat],
      cat: '',
    })
    //this.updateSave([...this.state.todos,newCat]);
  }

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  clearSearch = () => {
    this.setState({
      searchWord: '',
      displayTodos: this.state.todos,
    });
  }

  toggleDropDown = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <Row className="full-height">
          <SideBar darkHandler={this.darkHandler} />
          <Categories cats={this.state.cats} typingHandler={this.changeHandler} formHandler={this.newCat} removeCat={this.removeCat} />
          <Col className="p-4">
            <h1 className="main-title">Tasker</h1>
            <SearchBar value={this.state.searchWord} searchHandler={this.searchFilter} clearSearch={this.clearSearch} />
            <TodoForm addTodo={this.addTask} changeHandler={this.changeHandler} filterHandler={this.filterHandler} todo={this.state.todo} resetHandler={this.resetHandler} dropDownState={this.state.dropdownOpen} dropDownHandler={this.toggleDropDown} />
            <Tasks todos={this.state.displayTodos} clickHandler={this.clickHandler} searchWord={this.state.searchWord} cats={this.state.cats} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
