import React from "react";
import Axios from 'axios';
import { useRouter } from "next/router";
import { useRepository } from "../../context/repository";
import { toast } from "react-toastify";

interface loginProps {
    username: string;
    token: string;
};

type UserContextProps = {
    token: string;
    login: (loginProps: loginProps) => Promise<void>;
};

const UserContext = React.createContext({} as UserContextProps);

export const UserProvider: React.FC = ({ children }) => {
    const router = useRouter();
    const { setRepositories } = useRepository();

    const [token, setToken] = React.useState<string>('');
    const login = async (loginProps: loginProps) => {
        if (!loginProps.username || !loginProps.token) {
            toast.error('Porfavor preencha todos os campos');
            return;
        };

        try {
            const response = await Axios.get(`https://api.github.com/users/${loginProps.username}/repos`, {
                headers: {
                    Authorization: `Token ${loginProps.token}`
                }
            });

            if (response.status === 200) {
                setRepositories(response.data);
                setToken(loginProps.token);
                router.push('/?#page-repo-list');
                toast.success('Login realizado com sucesso');
            }

        } catch (err) {
            toast.error('Erro ao logar, confira seu nome de usuário e senha');
            return;
        };
    };

    return <UserContext.Provider value={{
        token,
        login
    }}>
        {children}
    </UserContext.Provider>
};

export const useUser = () => React.useContext(UserContext);

