import actions from './actions';

const addTodo = text => {
    return actions.addTodo(text);
};

const toggleTodo = id => {
    return actions.toggleTodo(id);
};

const setVisibilityFilter = filter => {
    return actions.setVisibilityFilter(filter)
};

export default {
    addTodo,
    toggleTodo,
    setVisibilityFilter
};