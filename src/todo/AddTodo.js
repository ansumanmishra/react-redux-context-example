import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddTodo extends Component {
    state = {
        todo: {
            id: null,
            title: '',
        },
    }

    handleTitleChange = (e) => {
        this.setState({
            todo: {
                id: Math.random(),
                title: e.target.value,
            }
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.props.onAddTodo(this.state.todo)
        this.setState({
            todo: {
                id: '',
                title: '',
            },
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <input type="text" name="title" onChange={this.handleTitleChange} value={this.state.todo?.title}/>
                    <button>Save</button>
                </form>
            </div>
        );
    }
}

const mapDispatchAction = dispatch => ({
    onAddTodo: (todo) => dispatch({type: 'ADD_TODO', payload: todo})
});

export default connect(null, mapDispatchAction)(AddTodo);