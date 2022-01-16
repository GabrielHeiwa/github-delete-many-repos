import React from "react";
import { repositorieProps } from "../../pages/ReposList";

type RepositoryContextProps = {
    repositories: repositorieProps[];
    setRepositories: React.Dispatch<React.SetStateAction<repositorieProps[]>>;
}

const ReposityContext = React.createContext({} as RepositoryContextProps);

export const RepositoryProvider: React.FC = ({ children }) => {
    const [repositories, setRepositories] = React.useState<repositorieProps[]>([]);

    return <ReposityContext.Provider value={{
        repositories,
        setRepositories,
    }}>
        {children}
    </ReposityContext.Provider>
};

export const useRepository = () => React.useContext(ReposityContext);