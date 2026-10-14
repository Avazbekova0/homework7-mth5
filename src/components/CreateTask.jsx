import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import {  yupResolver  } from '@hookform/resolvers/yup';
import { schema } from '../untils/schema';

export default function CreateTask({ getTasks }) {
  const { handleSubmit, register, reset, formState: {errors} } = useForm({resolver: yupResolver(schema)});

  const postTasks = (data) => {
    axios
      .post('http://localhost:8000/tasks', data)
      .then(() => {
        getTasks();
        toast('success', 'Rask created succes!')
        reset();
      })
      .catch((e) => console.log(e));
      toast('error', 'Error, something wrong!')
  };

  return (
    <div className='input_cont'>
      <form onSubmit={handleSubmit(postTasks)}>
        <input className='form_cont'
          type="text"
          {...register('text', { required: true })}
          placeholder="Задача"
        />
          {errors?.text && (<p className='error'>{errors?.text?.message}</p>)}

        <select className='form_cont'{...register('status')}>
          <option value="true">Активная</option>
          <option value="false">Не активная</option>
        </select>
        {errors?.status && (<p className='error'>{errors?.status?.message}</p>)}

        <input className='form_cont'
          type="date"
          {...register('date', { required: true })}
        />
        {errors?.date && (<p className='error'>{errors?.date?.message}</p>)}

        <select className='form_cont'{...register('category')}>
          <option value="Учёба">Учёба</option>
          <option value="Работа">Работа</option>
          <option value="Личное">Личное</option>
        </select>

        <button className='form_cont' type="submit">Add</button>
      </form>
    </div>
  );
}