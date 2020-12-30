import './App.css';
import {useDispatch, useSelector} from 'react-redux'
import { loadTodos } from './action';
import { useEffect } from 'react';

function App() {

  const todos = useSelector(state => state.todos);
  const loading = useSelector(state => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTodos());
  }, []);

  
  return (
    <div className="App">
      <h1>ReactPro</h1>
      {loading ? 'please wait...' : ''}
      {todos.map(todo => {
    return(
      <div>
        {todo.id}--
        {todo.title}
      </div>
    )
  })}
    </div>
  );
}

export default App;
