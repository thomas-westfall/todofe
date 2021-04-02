import React, { Component } from 'react';
import axios from 'axios';
class AllTodos extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    fetchTodo = (todoid) => {
        this.setState({
            selected: this.props.todos.find(todo => todo.id === todoid)
        })
        
    }
    markDone = (e) => {
        e.preventDefault();

        let data = {
          'status': true
        }
        let url = 'http://localhost:1234/api/todos/'
        url += '\/' + this.state.selected.id
        axios.put(url, data).then(res => {
        console.log(res)
        this.props.fetchTodosData()
        this.fetchTodo(this.state.selected.id)
        this.setState(prevState => {
            let selected = Object.assign({}, prevState.selected); 
            selected.status = true;
            return {selected};  
          })
      }
        )
      }
      deleteTask = (e) =>{
        e.preventDefault();
        
        let url = 'http://localhost:1234/api/todos'
        url += '\/' + this.state.selected.id
        axios.delete(url).then(res => {
        console.log(res)
        this.props.fetchTodosData()
        this.setState({
            selected: undefined
        })
      }
        )     
      }
    
    render() {
        return (
            <center>
            <div>
            <table className="TodoTable">
                <thead>
                    <tr>
                        <td></td>
                        <td>ID</td>
                        <td>Content</td>
                        <td>Status</td>
                    </tr>
                </thead>
                <tbody>
                    {this.props.todos ?
                    this.props.todos.map((eachTodo) => (
                        !eachTodo.deleted ? (
                        <tr key={eachTodo.id}>
                          <td className="cView">
                          <button className="bView" onClick={() => this.fetchTodo(eachTodo.id)}>Select</button>
                          </td>
                          <td>
                            {eachTodo.id}
                          </td>
                          <td>
                              {eachTodo.content}
                          </td>
                          <td>
                              {eachTodo.status ?
                              (<>Complete</>) : (<>Incomplete</>) }
                          </td>
                        </tr>) : (<></>)
                              
                      )
                      )
                    :
                    "" }
                    <tr>

                    </tr>
                </tbody>
            </table>
            </div>
            <br></br>
            {this.state.selected ? (
            <div>
                ID: {this.state.selected.id} <br></br>
                Content: {this.state.selected.content} <br></br>
                Status: {this.state.selected.status ? (<>Complete</>) : (<>Incomplete</>) }<br></br>

                {this.state.selected.status ? (<></>) : (<><button className="btn btn-primary" onClick={this.markDone}>Mark as done</button></>) }
                
                <button className="btn btn-danger" onClick={this.deleteTask}>Delete</button>
            </div>
            ) : (<></>)
            }
            
            </center>
        )
    }
}

export default AllTodos;