import React from 'react';
import { connect } from 'react-redux';
import {todosOperations} from "../../state/ducks/todos/index";

let AddTodo = ({dispatch}) => {
    let input;

    return (
        <form
            onSubmit={ e => {
                e.preventDefault();
                if (!input.value.trim()) {
                    return;
                }
                dispatch(todosOperations.addTodo(input.value));
                input.value = '';
            }}
        >
            <input
                ref={ node => {
                    input = node
                }}
            />
            <button type="submit">
                Add Todo
            </button>
        </form>
    )
};
AddTodo = connect()(AddTodo);

export default AddTodo;