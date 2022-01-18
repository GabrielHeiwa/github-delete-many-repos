import React from 'react';
import Image from 'next/image';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid';
import { useUser } from '../../context/user';
import { ToastContainer } from 'react-toastify';

const LoginPage: React.FC = () => {
    const { login } = useUser();

    const [username, setUsername] = React.useState('');
    const [token, setToken] = React.useState('');
    const [showToken, setShowToken] = React.useState(false);

    const inputTokendRef = React.useRef<HTMLInputElement>(null);

    const handleClickShowToken = () => {
        setShowToken(!showToken);
        inputTokendRef.current.type = showToken ? 'password' : 'text';
    }

    return (
        <div id='page-login' className='w-screen h-screen flex items-center justify-center '>
            <ToastContainer />

            <div className='w-screen h-screen flex flex-row items-center justify-center'>
                <div className='w-full h-full p-4 md:w-3/4 md:h-3/4 shadow-4xl flex flex-col md:flex-row justify-between overflow-hidden'>

                    <div id='github-logo' className='h-2/4 w-full md:w-1/4 md:h-full flex flex-col items-center justify-center'>
                        <Image
                            src='/images/GitHub-Mark-120px-plus.png'
                            alt='Github logo'
                            width={120}
                            height={120}
                            className='mx-auto'
                        />

                        <p className='text-gray-700 text-lg font-semibold my-8'>
                            RepoCleanner
                        </p>
                    </div>

                    <div id='form' className='w-full md:w-3/4 h-full bg-gray-700'>
                        <form className='w-full h-full p-4 flex flex-col items-center justify-center'>
                            <div className='w-3/4 h-auto m-4 flex flex-col'>
                                <label className='text-white pl-1 pb-1'>Username</label>
                                <input
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    placeholder='GitHub username'
                                    className='outline-none rounded-sm py-2 pl-2 font-semibold placeholder:text-gray-700'
                                    type="text" />
                            </div>

                            <div className='w-3/4 h-auto m-4 flex flex-col relative'>
                                <label className='text-white pl-1 pb-1'>Token</label>
                                <input
                                    ref={inputTokendRef}
                                    value={token}
                                    onChange={(e) => setToken(e.target.value)}
                                    placeholder='Github token'
                                    className="outline-none rounded-sm py-2 pl-2 font-semibold placeholder:text-gray-700"
                                    type="password" />
                                {showToken 
                                    ? <EyeIcon className='text-gray-800 cursor-pointer w-6 h-6 absolute right-0 bottom-0 m-2 hover:text-gray-600 bg-white' onClick={handleClickShowToken} /> 
                                    : <EyeOffIcon className='text-gray-800 cursor-pointer w-6 h-6 absolute right-0 bottom-0 m-2 hover:text-gray-600' onClick={handleClickShowToken} />}

                            </div>

                            <div className='group w-2/4 h-auto p-4 mt-8'>
                                <button
                                    className='w-full h-full py-2 text-gray-800 text-lg font-semibold rounded-sm bg-gray-100 group-hover:bg-gray-300'
                                    type='button'>
                                    <p className='group-hover:-translate-y-0.5 transition delay-75'>Entrar</p>
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>

            {/* <div className='md:w-1/2 md:h-1/2 w-auto h-auto rounded-md bg-gray-600'>
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
                            type="button"
                            value="Login" />
                    </div>
                </form>
            </div> */}
        </div>
    );
};

export default LoginPage;