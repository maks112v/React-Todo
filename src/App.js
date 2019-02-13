import React, { Component } from 'react';
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'js-cookie';

import Tasks from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

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
      todo: '',
    }
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
  }

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  render() {
    return (
      <Container className="py-5">
        <Tasks todos={this.state.todos} clickHandler={this.clickHandler} />
        <TodoForm addTodo={this.addTask} changeHandler={this.changeHandler} todo={this.state.todo} resetHandler={this.resetHandler} />
      </Container>
    );
  }
}

export default App;
