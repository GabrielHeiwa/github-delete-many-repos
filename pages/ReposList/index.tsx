import React from "react";

import { useRouter } from "next/router";
import { useRepository } from "../../context/repository";

import RepoCard from "../../components/repoCard";


export interface repositorieProps {
    name: string;
    id: number;
    html_url: string;
    owner: {
        login: string;
    }
};


const ReposList: React.FC = () => {
    const router = useRouter();
    const { repositories } = useRepository();

    React.useEffect(() => {
        router.push('/?#page-repo-list');
    }, []);

    return (
        <div id="page-repo-list" className="w-screen h-screen overflow-auto bg-gray-600">
            { repositories.map((item, index) => (
                <RepoCard key={index} 
                    owner={item.owner.login}
                    reponame={item.name} 
                    id={item.id} 
                    url={item.html_url}/>
            ))}
        </div>
    );
};

export default ReposList;