import React, { Component } from 'react';

import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';
import Filters from './components/Filters';

class App extends Component {
    render() {
        return (
            <div className="App">
                <AddTodo />
                <VisibleTodoList />
                <Filters />
            </div>
        );
    }
}

export default App;