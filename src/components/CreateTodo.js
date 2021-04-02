import React, { Component } from 'react';
import './CreateTodo.css'
import axios from "axios";
import { Link } from 'react-router-dom';
import NavBar from './NavBar'
class CreateTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      value: '', 
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChangeB = this.handleChangeB.bind(this);

  }
componentDidMount(){
  console.log(this.props)
}

  handleChangeB(event) {
    this.setState({value: event.target.value});
  }

  handleClick(e){
    e.preventDefault();    
    let data = {
      'content': this.state.value
    }
    axios.post('http://localhost:1234/api/todos', data).then(res => {
    console.log(res)
    this.setState({
      todofinished: true
    })
  }
    )
  }

  render() {
    return (
      <div>
        <NavBar></NavBar>
        <div>
          {this.state.todofinished ? (
            <center>
          <div>
            Todo created! <br></br><Link className="btn btn-success" to="/home">View todos</Link>
          </div></center>):(<div>
          <center>
          <form>

        <label>Enter the todo value:</label><br></br>
        <textarea type="text" rows="4" cols="50" onChange={this.handleChangeB}></textarea><br></br>
        <button className="btn btn-success" onClick={this.handleClick}>Create Todo</button>
        </form>
        </center>
        </div>)}
        </div>
        </div>
    );
  }
}

export default CreateTodo;
