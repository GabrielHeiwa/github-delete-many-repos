import React from 'react';

import LoginPage from './Login';
import ReposList from './ReposList';

const HomePage: React.FC = () => {
    return (
       <div className='container w-screen h-screen bg-gray-600 overflow-hidden'>
           
            <LoginPage />
            <ReposList />
       </div>
    );
};

export default HomePage;