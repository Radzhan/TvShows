import React from 'react';
import Search from '../../components/Search/Search';

const Main = () => {
    return (
        <div className='d-flex justify-content-around'>
            <div>
                Search for Tw-Show
            </div>
            <Search/>
        </div>
    );
};

export default Main;