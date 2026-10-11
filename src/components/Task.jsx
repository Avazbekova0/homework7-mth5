import axios from 'axios';

export default function Tasks({ tasks, getTasks }) {
  const deleteTasks = (id) => {
    axios
      .delete(`http://localhost:8000/tasks/${id}`)
      .then(() => {
        getTasks();
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className='Cupper'>
      {tasks?.map((task) => (
        <div key={task.id}>
          <p>Задача: {task.text}</p>

          <p>
            Активность:{' '}
            {String(task.status) === 'true'
              ? 'Активна'
              : 'Не активная'}
          </p>

          <p>Дата: {task.date}</p>

          <p>Категория: {task.category}</p>

          <button onClick={() => deleteTasks(task.id)}>
            Удалить
          </button>
        </div>
      ))}
    </div>
  );
}