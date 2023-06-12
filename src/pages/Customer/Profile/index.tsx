import { useState, useContext, useEffect } from 'react'

import { Container } from "./styles";

import { UserContext } from "../../../context/UserContext";

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

    const [disabled, setDisabled] = useState(true);

    const [email, setEmail] = useState("");
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [telefone, setTelefone] = useState("");
    const [cep, setCep] = useState("");
    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");
    const [rua, setRua] = useState("");
    const [numero, setNumero] = useState("");
    const [nascimento, setNascimento] = useState("");

    const { data, customerUpdate, loading, error, deleteCustomer } = useContext(UserContext);

    console.log(data)

    useEffect(() => {
        if (data && typeof data === 'object' && 'customer' in data && typeof data.customer === 'object') {
            const customerData = data.customer as Customer;

            setNome(customerData.nome);
            setEmail(customerData.email);
            setCpf(customerData.cpf);
            setTelefone(customerData.telefone);
            setCep(customerData.cep);
            setEstado(customerData.estado);
            setCidade(customerData.cidade);
            setRua(customerData.rua);
            setNumero(customerData.numero);
            setNascimento(customerData.nascimento);

            setDisabled(false);
        }
    }, [data]);

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        let dataUpdate: Customer | null = null;

        if (data && 'customer' in data && data.customer) {
            const customerData = data.customer as Customer; // Update the type assertion to Customer
            dataUpdate = {
                id: customerData.id,
                nome: nome,
                email: email,
                senha: '123456',
                cpf: customerData.cpf,
                telefone: customerData.telefone,
                cep: customerData.cep,
                estado: customerData.estado,
                cidade: customerData.cidade,
                rua: customerData.rua,
                numero: customerData.numero,
                nascimento: customerData.nascimento
            };
        } else {
            dataUpdate = null;
        }

        if (dataUpdate) {
            customerUpdate(dataUpdate);
        }
    }

    function onChangeOrBlur() {
        if (
            !email ||
            !nome ||
            !cpf ||
            !telefone ||
            !cep ||
            !estado ||
            !cidade ||
            !rua ||
            !numero
        ) {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    }

    function handleClick() {
        if (data && 'customer' in data && data.customer) {
            const customerData = data.customer as Customer;
            deleteCustomer(customerData.id)
        }
    }


    return (
        <Container>
            <form onSubmit={handleSubmit} onChange={onChangeOrBlur} onBlur={onChangeOrBlur}>
                <legend className="legenda">Informações do Usuário</legend>
                <div>
                    <label htmlFor="nome">Nome</label>
                    <input id="nome" type="text" value={nome} onChange={(event: any) => setNome(event.target.value)} />
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" value={email} onChange={(event: any) => setEmail(event.target.value)} />
                    <label htmlFor="cpf">CPF</label>
                    <input id="cpf" type="text" value={cpf} onChange={(event: any) => setCpf(event.target.value)} />
                    <label htmlFor="nascimento">Nascimento</label>
                    <input id="nascimento" type="text" value={nascimento} onChange={(event: any) => setNascimento(event.target.value)} />
                    <label htmlFor="telefone">Telefone</label>
                    <input id="telefone" type="text" value={telefone} onChange={(event: any) => setTelefone(event.target.value)} />
                </div>
                <div>
                    <label htmlFor="cep">CEP</label>
                    <input id="cep" type="text" value={cep} onChange={(event: any) => setCep(event.target.value)} />
                    <label htmlFor="estado">Estado</label>
                    <input id="estado" type="text" value={estado} onChange={(event: any) => setEstado(event.target.value)} />
                    <label htmlFor="cidade">Cidade</label>
                    <input id="cidade" type="text" value={cidade} onChange={(event: any) => setCidade(event.target.value)} />
                    <label htmlFor="rua">Rua</label>
                    <input id="rua" type="text" value={rua} onChange={(event: any) => setRua(event.target.value)} />
                    <label htmlFor="numero">Número</label>
                    <input id="numero" type="text" value={numero} onChange={(event: any) => setNumero(event.target.value)} />
                </div>
                {loading ?
                    <button
                        className="buttonDeletar"
                        onClick={handleClick}
                    >
                        Deletando...
                    </button>
                    :
                    <button
                        className="buttonDeletar"
                        onClick={handleClick}
                    >
                        Deletar
                    </button>
                }
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