import './App.css';
import {useDispatch, useSelector} from 'react-redux'
import { loadTodos, removeTodo, checkTodo } from './action';
import { useEffect } from 'react';
import ReactLoading from 'react-loading';

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
        const todoclass = todo.completed?"title" : "titlef";
    return(
      <div className={todoclass}>
        <div className="check">
          {todo.checking ? (
          <ReactLoading type='spin' color='blue' height={16} width={16} />) : (
            <input type="checkbox" 
            checked = {todo.completed} 
            onChange={() => handleCheck(todo.id, todo.completed)}
            />
          )}
           {todo.title}
        </div>
       
        <button 
        onClick={() => handleDelete(todo.id)} 
        disabled = {todo.deleting}
        className="btn">Delete</button>
      </div>
    )
  })}
    </div>
  );
}

export default App;
