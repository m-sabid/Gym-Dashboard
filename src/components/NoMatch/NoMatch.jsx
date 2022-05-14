import React from 'react';
import { Link } from 'react-router-dom';
import './NoMatch.css'

const NoMatch = () => {
    return (
        <div className='notFoundPage'>
            <h1>404 not found</h1>
            <Link to={'/'}>Back to Home</Link>
        </div>
    );
};

export default NoMatch;