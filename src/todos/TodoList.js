import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.css';
import NewTodoForm from './NewTodoForm';
import { removeTodo, markTodoAsCompleted } from './actions';
import { connect } from 'react-redux';
import { displayAlert } from './thunks';

const TodoList = ({ todos = [{ text: 'Hello' }], onRemovePressed, onCompletedPressed, onDisplayAlertClicked }) => (
  <div className="list-wrapper">
    <NewTodoForm />
    {todos.map(todo => <TodoListItem key={todo.text} todo={todo} onRemovePressed={onRemovePressed} onCompletedPressed={onDisplayAlertClicked} />)}
  </div>
)

const mapStateToProps = state => ({ todos: state.todos, });
const mapDispatchToProps = dispatch => ({
  onRemovePressed: text => dispatch(removeTodo(text)),
  onCompletedPressed: text => dispatch(markTodoAsCompleted(text)),
  onDisplayAlertClicked: () => dispatch(displayAlert()),
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);