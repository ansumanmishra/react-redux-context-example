import React, { Component } from "react";
import { Link, BrowserRouter } from "react-router-dom";

import ThemeContextProvider from './contexts/ThemeContext';

import MainRoutes from './MainRoutes';
import TodoList from "./todo/TodoList";
import AddTodo from "./todo/AddTodo";

class App extends Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    const todos = [];
    this.setState({
      todos: todos,
    });
  }

  addTodo = (todo) => {
    const todos = [...this.state.todos, todo];

    this.setState({
      todos: todos,
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="App">
          <BrowserRouter>
          <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          </nav>{MainRoutes}
          <ThemeContextProvider>
            <TodoList />
            <AddTodo addTodo={this.addTodo} />
          </ThemeContextProvider>
          </BrowserRouter>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
