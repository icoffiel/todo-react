import { connect } from 'react-redux';
import {todosOperations} from "../../state/ducks/todos/index";
import Link from "../components/Link";
// blah

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.todosState.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => {
        dispatch(todosOperations.setVisibilityFilter(ownProps.filter));
    }
});

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);

export default FilterLink;