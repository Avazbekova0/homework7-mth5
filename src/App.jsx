import { useState, useEffect } from 'react';
import './App.css'
import axios from 'axios';
import CreateTask from './components/CreateTask';
import Tasks from './components/Task';

function App() {
  const [task, setTask] = useState([]);

  const getTasks = () => {
    axios
      .get('http://localhost:8000/tasks')
      .then(({ data }) => {
        setTask(data);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      <CreateTask getTasks={getTasks} />

      <h1 className='title'>Задачи</h1>

      <Tasks tasks={task} getTasks={getTasks} />
    </>
  );
}

export default App;