import React from 'react';
import Image from 'next/image';
import Axios from 'axios';

import { useRouter } from 'next/router';
import { useRepository } from '../../context/repository';

import { ToastContainer, toast } from 'react-toastify';


const LoginPage: React.FC = () => {
    const router = useRouter();
    const { setRepositories } = useRepository();

    const [username, setUsername] = React.useState('');
    const [token, setToken] = React.useState('');


    const handleClickSubmit = async () => {
        if (!username || !token) {
            toast.error('Porfavor preencha todos os campos');
            return;
        };

        try {
            const response = await Axios.get(`https://api.github.com/users/${username}/repos`, {
                headers: {
                    Authorization: `Token ${process.env.GITHUB_TOKEN}`
                }
            });

            
            if (response.status === 200) {
                setRepositories(response.data);
                router.push('/?#page-repo-list');
                toast.success('Login realizado com sucesso');
            }

        } catch(err) {
            toast.error('Erro ao logar, confira seu nome de usuário e senha');
            return;
        };
    };

    return (
        <div id='page-login' className='w-screen h-screen bg-gray-600 flex items-center justify-center '>
            <ToastContainer />
            
            <div className='md:w-1/2 md:h-1/2 w-auto h-auto rounded-md bg-gray-400'>
                <form className='w-full h-full flex flex-col justify-around rounded-md'>
                    <div className='flex flex-col items-center justify-center my-4'>
                        <Image src={'/images/GitHub-Mark-64px.png'} width={48} height={48} />
                        <p className='py-2 mx-4 text-lg text-gray-900 text-center font-bold'>Github remove many repos</p>
                    </div>


                    <div className='flex flex-col'>
                        <input
                            className='w-auto pl-2 py-2 my-2 mx-4 rounded-sm outline-none ring-0 ring-gray-900 focus:ring-1'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            type="text"
                            placeholder="username" />
                        <input
                            className='w-auto pl-2 py-2 my-2 mx-4 rounded-sm'
                            value={token}
                            onChange={(e) => setToken(e.target.value)}
                            required
                            type="password"
                            placeholder="personal token" />

                        <input
                            className='w-auto pl-2 py-2 my-2 mx-4 rounded-sm bg-gray-600 cursor-pointer font-semibold hover:text-white hover:bg-gray-500 '
                            onClick={handleClickSubmit}
                            type="submit"
                            value="Login" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;