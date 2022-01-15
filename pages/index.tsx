import React from 'react';
import Axios from 'axios';

import LoginPage from './Login';
import ReposList from './ReposList';

const HomePage: React.FC = () => {
    const username = 'gabrielheiwa';
    const token = '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';

    

    return (
       <div className='container w-screen h-screen bg-gray-600 overflow-hidden'>
           
            <LoginPage />
            <ReposList />

       </div>
    );
};

export default HomePage;