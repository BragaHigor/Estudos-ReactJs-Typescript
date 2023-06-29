import { createContext, useState  } from "react";

interface UserProviderProps{
    children: ReactNode;
}

type UserContextData={
    aluno: string,
    qtdAlunos: number;
    mudaNome: (nome: string) => void;
    mudaQtd: (qtd: number) => void;
    novoAluno: () => void
}

export const UserContext = createContext({} as UserContextData)

function UserProvider({children}: UserProviderProps){

    const [aluno, setAluno] = useState("Laura Maestri");
    const [qtdAlunos, setQtdAlunos] = useState(40);

    function mudaNome(nome: string){
        setAluno(nome)
    }

    function mudaQtd(qtd: number){
        setQtdAlunos(qtd)
    }

    function novoAluno(){
        setQtdAlunos(alunos => alunos+1)
    }

    return(
        <UserContext.Provider value={{aluno, qtdAlunos, mudaNome, mudaQtd, novoAluno}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;