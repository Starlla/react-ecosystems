import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.css';
import NewTodoForm from './NewTodoForm';
import { removeTodo } from './actions';
import { connect } from 'react-redux';

const TodoList = ({ todos = [{ text: 'Hello' }], onRemovePressed }) => (
  <div className="list-wrapper">
    <NewTodoForm />
    {todos.map(todo => <TodoListItem todo={todo} onRemovePressed={onRemovePressed} />)}
  </div>
)

const mapStateToProps = state => ({ todos: state.todos, });
const mapDispatchToProps = dispatch => ({ onRemovePressed: text => dispatch(removeTodo(text)), });
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);