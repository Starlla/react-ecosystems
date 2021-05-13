import React, { useEffect } from 'react';
import TodoListItem from './TodoListItem';
import { loadTodos, removeTodoRequest, updateTodoRequest } from './thunks';
import './TodoList.css';
import NewTodoForm from './NewTodoForm';
import { connect } from 'react-redux';
import { getTodos, getTodosLoading } from './selectors';

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

const mapStateToProps = state => ({ todos: getTodos(state), isLoading: getTodosLoading(state) });
const mapDispatchToProps = dispatch => ({
  onRemovePressed: id => dispatch(removeTodoRequest(id)),
  onCompletedPressed: id => dispatch(updateTodoRequest(id)),
  startLoadingTodos: () => dispatch(loadTodos()),
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);