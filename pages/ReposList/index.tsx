import React from "react";

import { useRepository } from "../../context/repository";

import RepoCard from "../../components/repoCard";
import Router from "next/router";


export interface repositorieProps {
    name: string;
    id: number;
    html_url: string;
    owner: {
        login: string;
    }
};


const ReposList: React.FC = () => {
    const { repositories } = useRepository();

    return (
        <div id="page-repo-list" className="w-screen h-screen pb-4 grid md:grid-cols-2 grid-cols-1 overflow-auto bg-gray-600">
            <header className="md:col-span-2 m-4 p-4">

                {
                    !repositories.length
                        ? <h1 className="text-2xl text-white font-bold text-center">Nenhum repositório encontrado</h1>
                        : <h1 className="text-2xl text-white font-bold text-center">Repositórios</h1>
                }
            </header>

            {repositories.map((item, index) => (
                <RepoCard key={index}
                    owner={item.owner.login}
                    reponame={item.name}
                    id={item.id}
                    url={item.html_url} />
            ))}

        </div>
    );
};

export default ReposList;