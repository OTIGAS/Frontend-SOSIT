import { useContext } from "react";

import { NavLink, Navigate } from "react-router-dom"

import { UserContext } from "../../context/UserContext";

import { HomePageContent, LoginFormContent } from "./styles";

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { useForm } from '../../hooks/useForm';

export function Login() { 
    const email = useForm('email');
    const password = useForm('password');

    const { userLogin, error, loading, login, typeUser } = useContext(UserContext);
    
    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (email.validate() && password.validate()) {
            userLogin(email.value, password.value)
        }
    }

    if (login === true) {
        if (typeUser === 'company') return <Navigate to='/empresa/agendas' />
        else if (typeUser === 'customer') return <Navigate to='/cliente/home' />
    } 

    return (
        <HomePageContent>
            <div className="description-content">
                <h1>Service Organization Schedule Intelligence of Things</h1>
                <p>Bem-vindo ao SOSIT, a plataforma de agendamento inteligente para empresas e clientes. Com o SOSIT, empresas podem registrar seus serviços e horários disponíveis para agendamento, enquanto os clientes podem facilmente encontrar e agendar compromissos de forma rápida e conveniente. Cadastre-se agora e comece a gerenciar seus compromissos de maneira eficiente!</p>
                <div>
                    <h2>Empresa</h2>
                    <p className="content-company">Com SOSIT, sua empresa pode gerenciar suas agendas e compromissos com facilidade. Defina seus horários e serviços disponíveis e permita que seus clientes agendem online, de forma rápida e conveniente. Além disso, a plataforma oferece recursos personalizáveis para atender às necessidades específicas de sua empresa. Cadastre-se agora e experimente o poder da organização inteligente de agendamentos.</p>
                    <button>
                        <NavLink to="/criar-conta-empresa" title="Cadastro de Empresa">
                            Cadastre-se
                        </NavLink>
                    </button>
                </div>
                <div>
                    <h2>Cliente</h2>    
                    <p className="content-customer">Agendar compromissos nunca foi tão fácil! Com SOSIT, você pode encontrar os melhores horários e datas disponíveis para seus compromissos, sem precisar ligar para várias empresas ou esperar por uma resposta. Com apenas alguns cliques, você pode agendar online, diretamente com a empresa escolhida. Experimente agora mesmo e descubra como é fácil gerenciar seus compromissos de forma eficiente.</p>
                    <button>
                        <NavLink to="/criar-conta-cliente" title="Cadastro de Cliente">
                            Cadastre-se
                        </NavLink>
                    </button>
                </div>

            </div>
            <LoginFormContent action="" onSubmit={handleSubmit}>
                <label>Fazer Login</label>
                <div>
                    <Input
                        placeholder='email@example.com' 
                        {...email}
                    />
                    <Input 
                        placeholder='senha' 
                        {...password}
                    />
                    <NavLink to="/">esqueceu sua senha?</NavLink> 
                    {error != null ? <p>E-mail ou senha não encontrada.</p> : undefined}  
                </div>
                <Button type="submit" loading={loading}>
                    {loading === true ? 'Carregando...' : 'Avançar'}
                </Button>
            </LoginFormContent>
        </HomePageContent>
    )
}