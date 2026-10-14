import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Details = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [data, useData] = useState(null);
    console.log(id);

    useEffect(() => {
        axios.get(`http://localhost:8000/tasks/${id}`)
        .then((response) => useData(response.data))
        .catch((e) => console.log(e))
    }, [id])

    return (
        <div className='details_cont'>
           <h2>Описание задания</h2>
           <p>{data?.text}</p>
           <p>Статус: {data?.status}</p>
           <p>Дата: {data?.date}</p>
           <button onClick={() => navigate(-1)}>Назад к списку</button>
        </div>
    );
}

export default Details;
