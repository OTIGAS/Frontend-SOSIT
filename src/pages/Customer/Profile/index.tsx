import { useState, useContext, useEffect } from 'react'

import { useNavigate } from "react-router-dom";

import { Container } from "./styles";

import { useForm } from "../../../hooks/useForm";

import { UserContext } from "../../../context/UserContext";

import { Input } from "../../../components/Input";


interface Customer {
    id: string;
    nome: string
    email: string
    senha: string
    cpf: string
    telefone: string
    cep: string
    estado: string
    cidade: string
    rua: string
    numero: string
    nascimento: string
}

export function ProfileCustomer() {

    const navigate = useNavigate();
    const [disabled, setDisabled] = useState(true);

    const email = useForm('email');
    const nome = useForm('');
    const cpf = useForm('');
    const telefone = useForm('');
    const cep = useForm('');
    const estado = useForm('');
    const cidade = useForm('');
    const rua = useForm('');
    const numero = useForm('');
    const nascimento = useForm('');

    const { data, customerUpdate, loading, error } = useContext(UserContext);

    useEffect(() => {
        if (data && typeof data === 'object' && 'customer' in data && typeof data.customer === 'object') {
          const customerData = data.customer as Customer;
          
          nome.setValue(customerData.nome);
          email.setValue(customerData.email);
          cpf.setValue(customerData.cpf);
          telefone.setValue(customerData.telefone);
          cep.setValue(customerData.cep);
          estado.setValue(customerData.estado);
          cidade.setValue(customerData.cidade);
          rua.setValue(customerData.rua);
          numero.setValue(customerData.numero);
          nascimento.setValue(customerData.nascimento);
    
          setDisabled(false);
        }
    }, [data]);
      
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const dataUpdate = {
            nome: nome.value,
            email: email.value,
            senha: '123456',
            cpf: cpf.value,
            telefone: telefone.value,
            cep: cep.value,
            estado: estado.value,
            cidade: cidade.value,
            rua: rua.value,
            numero: numero.value,
            nascimento: nascimento.value
        }

        customerUpdate(dataUpdate);
    }

    function onChangeOrBlur() {
        if (
            !email.value ||
            !nome.value ||
            !cpf.value ||
            !telefone.value ||
            !cep.value ||
            !estado.value ||
            !cidade.value ||
            !rua.value ||
            !numero.value
        ) {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    }

    return (
    <Container>
        <form onSubmit={handleSubmit} onChange={onChangeOrBlur} onBlur={onChangeOrBlur}>
            <legend className="legenda">Informações do Usuário</legend>
            <div>
                <label htmlFor="nome">Nome</label>
                <Input id="nome" Etype="text" {...nome} />
                <label htmlFor="email">Email</label>
                <Input id="email" Etype="email" {...email} />
                <label htmlFor="cpf">CPF</label>
                <Input id="cpf" Etype="text" {...cpf} />
                <label htmlFor="nascimento">Nascimento</label>
                <Input id="nascimento" Etype="text" {...nascimento} />
                <label htmlFor="telefone">Telefone</label>
                <Input id="telefone" Etype="text" {...telefone} />
            </div>
            <div>
                <label htmlFor="cep">CEP</label>
                <Input id="cep" Etype="text" {...cep} />
                <label htmlFor="estado">Estado</label>
                <Input id="estado" Etype="text" {...estado} />
                <label htmlFor="cidade">Cidade</label>
                <Input id="cidade" Etype="text" {...cidade} />
                <label htmlFor="rua">Rua</label>
                <Input id="rua" Etype="text" {...rua} />
                <label htmlFor="numero">Número</label>
                <Input id="numero" Etype="text" {...numero} />
            </div>
            <button 
                    className="buttonCancelar" 
                    onClick={() => {navigate('/cliente/home')}}
                >
                    Voltar
                </button>
                {loading ? 
                    <button 
                        type="submit"
                        disabled={true}  
                        className="buttonSalvar"
                    >
                        Cadastrando...
                    </button>
                    :
                    <button 
                        type="submit"
                        disabled={disabled}  
                        className="buttonSalvar"
                    >
                        {disabled === true ? 'Preencha todos os campos' : 'Cadastrar'}
                    </button>
                }
                {error && <p>{error}</p>}
        </form>
    </Container>
    )
}