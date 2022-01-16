import React from "react";
import Axios from 'axios';

import { toast } from 'react-toastify';
import { TrashIcon } from '@heroicons/react/solid';

import { useRepository } from '../../context/repository';

interface RepoCardProps {
    reponame: string;
    id: number;
    url: string;
    owner: string;
}

const RepoCard: React.FC<RepoCardProps> = ({ id, reponame, url, owner }) => {
    const { repositories, setRepositories } = useRepository();


    const handleClickDeleteRepository = async () => {
        try {
            const request = await Axios.delete(`https://api.github.com/repos/${owner}/${reponame}`, {
                headers: {
                    'Authorization': `token ${process.env.GITHUB_TOKEN}`,
                    'Accept': 'application/vnd.github.v3+json'
                }
            });
            
            if (request.status === 204) {
                toast.success('Repositório deletado com sucesso!');
                setRepositories(repositories.filter(repo => repo.id !== id));
            };
            
        } catch (err) {
            toast.error('Erro ao deletar o repositório!');
        };
    }

    return <div className="flex flex-row justify-between p-4 my-2 mx-4 bg-white rounded-md">
        <div className="flex flex-row items-center ">
            <p className="w-44 text-gray-600 font-semibold truncate">{reponame}</p>
            {/* <p className="">{id}</p> */}
            <a href={url} target={"_blank"}>
                <p className="text-gray-900 font-bold mx-2">URL</p>
            </a>
        </div>

        <button 
            onClick={handleClickDeleteRepository}
            className="rounded-md p-2 text-gray-400 bg-gray-600 hover:bg-gray-400 hover:text-gray-600 transition delay-75">
            <TrashIcon className="h-6 w-6" />
        </button>


    </div>
};

export default RepoCard;