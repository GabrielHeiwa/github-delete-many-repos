import React from 'react';

import LoginPage from './Login';
import ReposList from './ReposList';

const HomePage: React.FC = () => {
    return (
       <div className='w-screen h-screen overflow-x-hidden'>
           
            <LoginPage />
            <ReposList />
       </div>
    );
};

export default HomePage;