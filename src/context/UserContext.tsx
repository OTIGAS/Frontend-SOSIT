import { createContext, useCallback, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { 
    COMPANY_GET, 
    CUSTOMER_GET, 
    CUSTOMER_PATCH, 
    DELETE_CUSTOMER, 
    TOKEN_POST_COMPANY, 
    TOKEN_POST_CUSTOMER 
} from "../api/api";

interface CustomerWithSenha extends Customer {
    id: string;
}

interface Customer {
    id?: string
	nome: string,
	email: string,
	senha: string,
	cpf: string,
	telefone: string,
	cep: string,
	estado: string,
	cidade: string,
	rua: string,
	numero: string,
	nascimento: string,
}

interface Company {
    id?: string,
	nome_fantasia: string,
	razao_social: string,
	email: string,
	senha: string,
	cnpj: string,

	sobre: string,
	img_perfil: string,
	link_google: string,

	telefone: string,
	email_contato: string,
	nome_contato: string,

	cep: string,
	estado: string,
	cidade: string,
	rua: string,
	numero: string,

	banco: string,
	agencia: string,
	digito: string,
	tipo_conta: string,
	conta: string
}

interface UserContextProps {
    userLogin: (email: string, senha: string, selectedOption?: string | undefined) => Promise<void>;
    userLogout: () => Promise<void>;
    customerUpdate: (dataUpdate: Customer) => Promise<void>;
    deleteCustomer: (id: string) => Promise<void>;
    data: Customer | Company | null;
    login: boolean | null;
    loading: boolean | null;
    error: string | null;
    typeUser: string | null;
    nome: string | null;
}
  
export const UserContext = createContext<UserContextProps>({} as UserContextProps);

export function UserStorage({ children }: { children: React.ReactNode }) {
    const [data, setData] = useState<Customer | Company | null>(null);
    const [login, setLogin] = useState<boolean | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean | null>(null);
    const [typeUser, setTypeUser] = useState<string | null>(null);

    const [nome, setNome] = useState<string | null>(null);

    const navigate = useNavigate();

    const userLogout = useCallback(async function () {
        setData(null);
        setError(null);
        setLoading(false);
        setLogin(false);
        setTypeUser(null);
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('type-user');
        navigate('/');
    }, [navigate]);

    useEffect(() => {
        async function autoLogin() {
            const token = window.localStorage.getItem('token');
            const typeUser = window.localStorage.getItem('type-user');
            if (token && typeUser) {
                if (typeUser === 'company') {
                    try {
                        setError(null);
                        setLoading(true);
                        const { urlCompany :url, optionsCompany: options } = COMPANY_GET(token);
                        const response = await fetch(url, options);
                        const json = await response.json();
                        if (!json.company) throw new Error('Token inválido.');
                        await getCompany(token);
                    } catch (err) {
                        console.log(err);
                        userLogout();
                    } finally {
                        setLoading(false);
                    }
                }
                if (typeUser === 'customer') {
                    try {
                        setError(null);
                        setLoading(true);
                        const { urlCustomer, optionsCustomer} = CUSTOMER_GET(token);
                        const response = await fetch(urlCustomer, optionsCustomer);
                        const json = await response.json();
                        if (!json.customer) throw new Error('Token inválido.');
                        await getCustomer(token);
                    } catch (err) {
                        console.log(err);
                        userLogout();
                    } finally {
                        setLoading(false);
                    }
                }
                
            }

        }

        autoLogin();
    }, [userLogout]);

    async function getCompany(token: string) {
        const { urlCompany, optionsCompany } = COMPANY_GET(token);

        const response = await fetch(urlCompany, optionsCompany);
        const json = await response.json();

        setData(json);
        setLogin(true);
        setNome(json.company.nome_fantasia);

        setTypeUser('company');
    }

    async function getCustomer(token: string) {
        const { urlCustomer, optionsCustomer } = CUSTOMER_GET(token);
        
        const response = await fetch(urlCustomer, optionsCustomer);
        const json = await response.json();

        setData(json);
        setLogin(true);
        setNome(json.customer.nome);

        setTypeUser('customer');
    }

    async function userLogin(email: string, password: string, selectedOption?: string | undefined, typeUser?: string | undefined) {
        try {
            setError(null);
            setLoading(true);
            if (selectedOption === 'company' || typeUser === 'company') {
                const { urlCompany, optionsCompany } = TOKEN_POST_COMPANY({
                    email: email,
                    senha: password,
                });
                const tokenCompanyRes = await fetch(urlCompany, optionsCompany);
                const { token: tokenCompany } = await tokenCompanyRes.json(); 
                if(!tokenCompany) throw new Error('E-mail ou Senha invalido(s).');           
                window.localStorage.setItem('token', tokenCompany);
                window.localStorage.setItem('type-user', 'company');
                await getCompany(tokenCompany);
                navigate('/empresa/agendas');
                
            }
    
            if (selectedOption === 'customer' || typeUser === 'customer') {
                const { urlCustomer, optionsCustomer } = TOKEN_POST_CUSTOMER({
                    email: email,
                    senha: password,
                });
                const tokenCustomerRes = await fetch(urlCustomer, optionsCustomer);
                const { token: tokenCustomer } = await tokenCustomerRes.json();
                if(!tokenCustomer) throw new Error('E-mail ou Senha invalido(s).'); 
                window.localStorage.setItem('token', tokenCustomer);
                window.localStorage.setItem('type-user', 'customer');
                await getCustomer(tokenCustomer);
                navigate('/cliente/home');
            }
    
            else {
                throw new Error('Escolha a forma de login.');
            }
        } catch (err: unknown) {
            console.log(err);
            setError((err as Error).message);
            setLogin(false);
        } finally {
            setLoading(false);
        }
    }

    async function customerUpdate(dataUpdate: Customer) {
        try {
            setError(null);
            setLoading(true);
            if (dataUpdate && dataUpdate.id) {
                const { urlCustomer: url, optionsCustomer: options } = CUSTOMER_PATCH(dataUpdate, dataUpdate.id);
                const response = await fetch(url, options);
                const json = await response.json();
                if (json) {
                    setData(json.customer)
                }
            }
        } catch (error) {
            throw new Error('Preencha todos os campos.');
        } finally {
            setLoading(false);
        }
    }

    async function deleteCustomer(id:string) {
        console.log("Cheguei")
        try {
            setError(null);
            setLoading(true);
            if (id) {
                const {url, options} = DELETE_CUSTOMER(id);
                const response = await fetch(url, options);
                if (response.status === 204){
                    userLogout();
                }
            }
        } catch (error) {
            throw new Error('Recurso não encontrado');
        } finally {
            setLoading(false);
        }
    }
    

    return (
        <UserContext.Provider value={{ userLogin, userLogout, data, login, loading, error, typeUser, nome, customerUpdate, deleteCustomer }}>
            {children}
        </UserContext.Provider>
    )
}