import styled from 'styled-components';
import React, { useEffect } from 'react';
import TodoListItem from './TodoListItem';
import { loadTodos, removeTodoRequest, updateTodoRequest } from './thunks';
import NewTodoForm from './NewTodoForm';
import { connect } from 'react-redux';
import { getTodosLoading, getCompleteTodos, getIncompleteTodos } from './selectors';

const ListWrapper = styled.div`
max-width: 700px;
margin: auto;
`;

const TodoList = ({ completedTodos = [], incompletedTodos = [], isLoading, onRemovePressed, onCompletedPressed, startLoadingTodos }) => {
  useEffect(() => {
    startLoadingTodos();
  }, [])
  const loadingMessage = <div>Loading todos...</div>;
  const content = (
    <ListWrapper>
      <NewTodoForm />
      <h3>Incomplete:</h3>
      {incompletedTodos.map(todo => <TodoListItem key={todo.id} todo={todo} onRemovePressed={onRemovePressed} onCompletedPressed={onCompletedPressed} />)}
      <h3>Complete:</h3>
      {completedTodos.map(todo => <TodoListItem key={todo.id} todo={todo} onRemovePressed={onRemovePressed} onCompletedPressed={onCompletedPressed} />)}
    </ListWrapper>
  )
  return isLoading ? loadingMessage : content;
}

const mapStateToProps = state => ({ completedTodos: getCompleteTodos(state), incompletedTodos: getIncompleteTodos(state), isLoading: getTodosLoading(state) });
const mapDispatchToProps = dispatch => ({
  onRemovePressed: id => dispatch(removeTodoRequest(id)),
  onCompletedPressed: id => dispatch(updateTodoRequest(id)),
  startLoadingTodos: () => dispatch(loadTodos()),
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);