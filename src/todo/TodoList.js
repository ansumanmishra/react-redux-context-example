import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ThemeContextConsumer } from '../contexts/ThemeContext';

class TodoList extends Component {    
    render() {
        const toDoList = this.props.todos.length ? this.props.todos.map( todo => <li key={todo.id}>{todo.title} <button onClick={ (id) => this.props.onDeleteTodo(todo.id)}>Delete</button> </li>)
        : <li>No todos found</li>;
        
        return (
            <ThemeContextConsumer>
            {context => (
                <div style={{background: context.color}}>
                    <ul>{toDoList}</ul>
                </div>
            )}
            </ThemeContextConsumer>
        )
    }
}

const mapStateToProps = state => {
    return {todos: state.todos};
};

const mapDispatchToProps = dispatch => ({
    onDeleteTodo: (id) => dispatch({type: 'DELETE_TODO', payload: id})
})


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);