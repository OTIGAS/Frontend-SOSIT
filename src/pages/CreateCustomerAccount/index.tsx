import { useContext } from "react";
import { CUSTOMER_POST } from "../../api/api";
import { Input } from "../../components/Input";
import { useForm } from "../../hooks/useForm";
import { Container } from "./styles";
import { UserContext } from "../../context/UserContext";

type Customer = {
    id: string
    nome: string
    email: string
    senha_hash: string
    cpf: string
    telefone: string
    cep: string
    estado: string
    cidade: string
    rua: string
    numero: string
    nascimento: string
}

export function CreateCustomerAccount () {
    const email = useForm('email');
    const password = useForm('password');
    const nome = useForm('');
    const cpf = useForm('');
    const telefone = useForm('');
    const cep = useForm('');
    const estado = useForm('');
    const cidade = useForm('');
    const rua = useForm('');
    const numero = useForm('');
    const nascimento = useForm('');

    const { userLogin } = useContext(UserContext);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const {urlCustomer, optionsCustomer} = CUSTOMER_POST({
            nome: nome.value,
            email: email.value,
            senha: password.value,
            cpf: cpf.value,
            telefone: telefone.value,
            cep: cep.value,
            estado: estado.value,
            cidade: cidade.value,
            rua: rua.value,
            numero: numero.value,
            nascimento: nascimento.value,
        })
        const response = await fetch(urlCustomer, optionsCustomer);
        if (response.status === 201) {
            userLogin(email.value, password.value);
            console.log(response);
        }
    }   

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <legend className="legend">Cadastro de Clientes</legend>
                <div>
                    <label htmlFor="nome">Nome</label>
                    <Input id="nome" Etype="text" {...nome} />
                    <label htmlFor="email">Email</label>
                    <Input id="email" Etype="email" {...email} />
                    <label htmlFor="senha">Senha</label>
                    <Input id="senha" Etype="password" {...password} />
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
                <button className="buttonCancelar">Voltar</button>
                <button className="buttonSalvar">Salvar</button>
            </form>
        </Container>
    )
}