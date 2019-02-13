import React, { Component } from 'react';
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'js-cookie';

import Tasks from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import SearchBar from './components/TodoComponents/Searchbar';

const start = [
  {
    task: 'Lets get you started',
    id: 1528817077286,
    completed: false
  },
];

class App extends Component {
  constructor(){
    super();
    this.checkSave = ((Cookies.getJSON('todos') === undefined )? start: Cookies.getJSON('todos'));
    this.state = {
      todos: this.checkSave,
      displayTodos: this.checkSave,
      todo: '',
      searchWord: '',
    }
  }

  updateDisplay = current => {
    this.setState({
      displayTodos: current,
    })
  }
  
  randomId = () =>{
    return Math.random().toString(36).substr(2, 9);
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
    Cookies.set('todos', start);
    this.setState({
      todos: start,
      todo: '',
    })
    this.updateDisplay(start);
  }

  filterHandler = () =>{
    const removedCompleted = [...this.state.todos].filter(task => task.completed === false);
    this.setState({
      todos: removedCompleted,
    });
    this.updateDisplay(removedCompleted);
  }

  searchFilter = e =>{
    const displayTodos = [...this.state.todos].filter( current => current.task.toLowerCase().includes(e.target.value));
    this.setState({
      searchWord: e.target.value,
      displayTodos: displayTodos,
    });
  }

  addTask = e => {
    e.preventDefault();
    const newTask = {
      task: this.state.todo,
      id: this.randomId(),
      completed: false,
    }
    this.setState({
      todos: [...this.state.todos,newTask],
      todo: '',
    })
    this.updateSave([...this.state.todos,newTask]);
    this.updateDisplay([...this.state.todos,newTask]);
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

  render() {
    return (
      <Container className="py-5">
        <SearchBar value={this.state.searchWord} searchHandler={this.searchFilter} clearSearch={this.clearSearch} />
        <Tasks todos={this.state.displayTodos} clickHandler={this.clickHandler} searchWord={this.state.searchWord} />
        <TodoForm addTodo={this.addTask} changeHandler={this.changeHandler} filterHandler={this.filterHandler} todo={this.state.todo} resetHandler={this.resetHandler} />
      </Container>
    );
  }
}

export default App;
