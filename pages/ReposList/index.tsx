import React from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import RepoCard from "../../components/repoCard";


interface repositorieProps {
    name: string;
    id: number;
    html_url: string;
};


const ReposList: React.FC = () => {
    const router = useRouter();

    const [repositories, setRepositories] = React.useState<repositorieProps[]>([]);

    React.useEffect(() => {
        router.push('/?#page-repo-list');

        const repositoriesJson = localStorage.getItem('@github-repositories');
        if (repositoriesJson) {
            const repositories = JSON.parse(repositoriesJson);
            setRepositories(repositories);
            toast.success('Repositórios carregados com sucesso');
            return;
        };

        setRepositories([]);
    }, []);

    return (
        <div id="page-repo-list" className="w-screen h-screen overflow-auto bg-gray-600">
            { repositories.map((item, index) => (
                <RepoCard key={index} 
                    reponame={item.name} 
                    id={item.id} 
                    url={item.html_url}/>
            ))}
        </div>
    );
};

export default ReposList;