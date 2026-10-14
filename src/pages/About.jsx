import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();

    return (
        <div>
            About
            <button onClick={() => navigate(-1)}>Назад</button>
        </div>
    );
}

export default About;
