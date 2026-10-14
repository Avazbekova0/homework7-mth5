import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header_cont'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <button onClick={() => navigate(`/details/${task.id}`)}>Детальный просмотр</button>
        </div>
    );
};

export default Header;