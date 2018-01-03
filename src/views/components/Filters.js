import React from 'react';
import FilterLink from '../containers/FilterLink';
import {todosConstants} from "../../state/ducks/todos/index";

const Filters = () => (
    <p>
        Show: {" "}
        <FilterLink filter={todosConstants.SHOW_ALL}>
            All
        </FilterLink>
        {", "}
        <FilterLink filter={todosConstants.SHOW_ACTIVE}>
            Active
        </FilterLink>
        {", "}
        <FilterLink filter={todosConstants.SHOW_COMPLETED}>
            Completed
        </FilterLink>
    </p>
);

export default Filters;