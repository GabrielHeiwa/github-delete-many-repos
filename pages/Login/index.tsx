import React from 'react';
import Image from 'next/image';
import { useUser } from '../../context/user';
import { ToastContainer } from 'react-toastify';

const LoginPage: React.FC = () => {
    const { login } = useUser();

    const [username, setUsername] = React.useState('');
    const [token, setToken] = React.useState('');

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
                            className='w-auto pl-2 py-2 my-2 mx-4 rounded-sm placeholder:text-gray-600 placeholder:font-semibold'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            type="text"
                            placeholder="Username" />

                        <input
                            className='w-auto pl-2 py-2 my-2 mx-4 rounded-sm placeholder:text-gray-600 placeholder:font-semibold'
                            value={token}
                            onChange={(e) => setToken(e.target.value)}
                            required
                            type="password"
                            placeholder="Personal token" />

                        <div className='flex flex-row justify-start mx-4'>
                            <a className="my-4 pl-2" href="https://github.com/settings/tokens" target={"_blank"}>
                                <p className='text-md text-gray-900 hover:text-gray-600 font-bold'>Como gerar um token?</p>
                            </a>
                        </div>

                        <input
                            className='w-auto p-2 my-2 mx-4 rounded-sm bg-gray-600 cursor-pointer font-bold text-white shadow-lg hover:text-white hover:bg-gray-700 transition delay-75'
                            onClick={() => login({ username, token })}
                            type="submit"
                            value="Login" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;