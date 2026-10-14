import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();

    return (
        <div className='footer_cont'>
            Made in China
            <button onClick={() => navigate('/')}>Home</button>
        </div>
    );
}

export default Footer;
