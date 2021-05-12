import React, { useEffect } from 'react';
import TodoListItem from './TodoListItem';
import { loadTodos } from './thunks';
import './TodoList.css';
import NewTodoForm from './NewTodoForm';
import { removeTodo, markTodoAsCompleted } from './actions';
import { connect } from 'react-redux';
import { displayAlert } from './thunks';
import { isLoading } from './reducers';

const TodoList = ({ todos = [], isLoading, onRemovePressed, onCompletedPressed, startLoadingTodos }) => {
  useEffect(() => {
    startLoadingTodos();
  }, [])
  const loadingMessage = <div>Loading todos...</div>;
  const content = (
    <div className="list-wrapper">
      <NewTodoForm />
      {todos.map(todo => <TodoListItem key={todo.id} todo={todo} onRemovePressed={onRemovePressed} onCompletedPressed={onCompletedPressed} />)}
    </div>
  )
  return isLoading ? loadingMessage : content;
}

const mapStateToProps = state => ({ todos: state.todos, isLoading: state.isLoading });
const mapDispatchToProps = dispatch => ({
  onRemovePressed: id => dispatch(removeTodo(id)),
  onCompletedPressed: text => dispatch(markTodoAsCompleted(text)),
  startLoadingTodos: () => dispatch(loadTodos()),
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);