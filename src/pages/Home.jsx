import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import CreateTask from '../components/CreateTask';
import Tasks from '../components/Task';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    const [task, setTask] = useState([]);
    const [filter, setFiltered] = useState([])
    const [search, setSearch] = useState('');

    const getTasks = () => {
        axios
            .get('http://localhost:8000/tasks')
            .then(({ data }) => {
                setTask(data);
            })
            .catch((e) => console.log(e));
    };

    const handlerFilter = () => {
        const filteredItem = task.filter(
            (task) => task.text === search
        );

        setFiltered(filteredItem);
        console.log(filteredItem);
    };

    useEffect(() => {
        getTasks();
    }, []);

    return (
        <>
            <CreateTask getTasks={getTasks} />

            <h1  className='search_cont'>Задачи</h1>

            <input  className='search_cont' type="text"placeholder="Поиск..."
            value={search}onChange={(e) => setSearch(e.target.value)}/>

            <button>Найти</button>

            <h1 className="title">Задачи</h1>

            <Tasks tasks={task} getTasks={getTasks} />

            <ToastContainer />
        </>
    );
};

export default Home;