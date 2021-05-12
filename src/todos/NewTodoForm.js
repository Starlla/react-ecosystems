import React, { useState } from 'react';
import './NewTodoForm.css';
import { connect } from 'react-redux';
import { addTodoRequest } from './thunks';

const NewTodoForm = ({ todos, onCreatePressed }) => {
  const [inputValue, setInputValue] = useState('');
  return (
    <div className="new-todo-form">
      <input className="new-todo-input" type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder="type your new todo here" />
      <button className="new-todo-button" onClick={() => {
        const isDuplicateText = todos.some(todo => todo.text === inputValue);
        if (!isDuplicateText) {
          onCreatePressed(inputValue);
          setInputValue('');
        }

      }}>Create Todo</button>
    </div>
  )
}

const mapStateToProps = state => ({ todos: state.todos, });
const mapDispatchToProps = dispatch => ({ onCreatePressed: text => dispatch(addTodoRequest(text)), });

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);