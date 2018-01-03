import { connect } from 'react-redux';

import TodoList from '../components/TodoList';
import { todosSelectors } from '../../state/ducks/todos'
import { todosOperations } from "../../state/ducks/todos/index";

const mapStateToProps = state => ({
    todos: todosSelectors.getVisibleTodos(
        state.todosState.todos,
        state.todosState.visibilityFilter
    )
});

const mapDispatchToProps = {
    onTodoClick: todosOperations.toggleTodo
};

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList;