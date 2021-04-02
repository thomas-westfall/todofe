import axios from 'axios';
// ACTION TYPES;
const FETCH_TODOS_DATA = "FETCH_TODOS_DATA";

// ACTION CREATOR;
const fetchTodosData = (todos) => {
  console.log(todos)
    return {
        type: FETCH_TODOS_DATA,
        payload: todos
    }
}

export const fetchTodosDataThunk = () => async dispatch => {
  axios.get('http://localhost:1234/api/todos/').then(res => {
  dispatch(fetchTodosData(res.data))
  console.log(res.data)
  })
}

// REDUCER FUNCTION;
export default (state = [], action) => {
    switch (action.type) {
        case FETCH_TODOS_DATA:
            return action.payload;
        default:
            return state;
    }
}