import React from 'react';

import Spinner from '../gif/Spinner-5.gif' 

const Loader = () => {
    return (
        <div>
            <img src={Spinner} alt="Loading" />
            <h1>Loading ...</h1>
        </div>
    );
};

export default Loader;