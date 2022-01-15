import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const LoginPage: React.FC = () => {
    const router = useRouter();


    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');


    const handleClickSubmit = async () => {
        console.log('clicked');
        await router.push('/?#page-repo-list');
    };

    return (
        <div id='page-login' className='w-screen h-screen bg-gray-600 flex items-center justify-center '>
            <div className='w-1/4 h-1/2 rounded-md bg-gray-400'>
                <form className='w-full h-full flex flex-col justify-around rounded-md'>
                    <div className='flex flex-col items-center justify-center'>
                        <Image src={'/images/GitHub-Mark-64px.png'} width={48} height={48} />
                        <p className='py-2 text-lg text-gray-900 text-center font-bold'>Github remove many repos</p>
                    </div>


                    <div className='flex flex-col'>
                        <input
                            className='w-auto pl-2 py-2 my-2 mx-4 rounded-sm outline-none ring-0 ring-gray-900 focus:ring-1'
                            type="text"
                            placeholder="username" />
                        <input
                            className='w-auto pl-2 py-2 my-2 mx-4 rounded-sm'
                            type="password"
                            placeholder="password" />

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