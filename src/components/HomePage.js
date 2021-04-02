import React, { Component } from 'react';
import './HomePage.css';
import AllTodos from './AllTodos';
import { withRouter } from 'react-router-dom';
import NavBar from './NavBar';
class HomePage extends Component {
  
  componentDidMount() {
    this.props.fetchTodosData();
  }

  render() {
    return (
      <div className="container-fluid">
      <NavBar></NavBar>
        <center>
        <div className="colTR">
            <div>
              <div className="TopRow">
              <h1 className="headingLabel">Todos</h1>
            </div>
            <div className="TopRowTX">
              <div className="receiptHistory">
                <AllTodos todos={this.props.todos}  fetchTodosData={this.props.fetchTodosData}/>
              </div>
            </div>
          </div>
        </div>
        </center>
      </div>
    )
  }
}

export default withRouter(HomePage);