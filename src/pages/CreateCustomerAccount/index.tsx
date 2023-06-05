import { useContext, useState } from "react";
import { CUSTOMER_POST } from "../../api/api";
import { Input } from "../../components/Input";
import { useForm } from "../../hooks/useForm";
import { Container } from "./styles";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

export function CreateCustomerAccount () {
    const navigate = useNavigate();
    const [disabled, setDisabled] = useState(true);

    const { loading, error, request } = useFetch();

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
        const { urlCustomer: url, optionsCustomer: options} = CUSTOMER_POST({
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
        if (request) {
            const { response } = await request(url, options);
            if(response) {
                if (response.status === 201) {
                    const typeUser = 'customer';
                    userLogin(email.value, password.value, typeUser);
                }
            }
        }
    }
    
    function onChangeOrBlur() {
        if (
            !email.value ||
            !password.value ||
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
                <button 
                    className="buttonCancelar" 
                    onClick={() => {navigate('/')}}
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