import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import {fetchTodosDataThunk} from "./store/utilities/todos";

//PAGE IMPORTS
import HomePage from './components/HomePage';
import CreateTodo from './components/CreateTodo';

class RoutesView extends Component {

  componentDidMount() {
  }

  render() {
    const HomeComponent = () => (<HomePage todos={this.props.todos} fetchTodosData={this.props.fetchTodosData}/>);
    const CreateTodoComponent = () => (<CreateTodo todos={this.props.todos} fetchTodosData={this.props.fetchTodosData}/>);

    return (
      <Router>
        <Switch>
          <Route exact path="/" render={HomeComponent} />
          <Switch>
          <Route exact path="/home" render={HomeComponent} />
            <Route exact path="/create" render={CreateTodoComponent} />
          </Switch>
          )
          <Route component={HomeComponent} />
        </Switch>
      </Router>
    )
  }
}

const mapState = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatch = (dispatch) => {
  return {
    fetchTodosData: () => dispatch(fetchTodosDataThunk()),
  }
}
export default connect(mapState, mapDispatch)(RoutesView);