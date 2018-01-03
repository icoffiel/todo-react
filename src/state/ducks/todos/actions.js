import { v4 } from 'uuid';

import types from './types';

export const addTodo = text => ({
    type: types.ADD_TODO,
    id: v4(),
    text
});

export const toggleTodo = id => ({
    type: types.TOGGLE_TODO,
    id
});

export const setVisibilityFilter = filter => ({
    type: types.SET_VISIBILITY_FILTER,
    filter
});

export default {
    addTodo,
    toggleTodo,
    setVisibilityFilter
};