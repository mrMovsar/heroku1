import './App.css';
import {useDispatch, useSelector} from 'react-redux'
import { loadTodos, removeTodo, checkTodo } from './action';
import { useEffect } from 'react';

function App() {

  const todos = useSelector(state => state.todos);
  const loading = useSelector(state => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTodos());
  }, []);

  const handleDelete = (id) => {
    dispatch(removeTodo(id))
  }
  
  const handleCheck = (id, completed) => {
    dispatch(checkTodo(id, completed))
  }

  return (
    <div className="App">
      <h1>ReactPro</h1>
      {loading ? 'please wait...' : ''}
      {todos.map(todo => {
    return(
      <div className="title">
        <div className="check">
          <input type="checkbox" 
          checked = {todo.completed} 
          onChange={() => handleCheck(todo.id, todo.completed)}
          />
           {todo.title}
        </div>
       
        <button onClick={() => handleDelete(todo.id)} className="btn">Delete</button>
      </div>
    )
  })}
    </div>
  );
}

export default App;
