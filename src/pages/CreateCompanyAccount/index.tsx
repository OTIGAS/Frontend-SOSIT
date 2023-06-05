import { useContext, useState } from "react"
import { Input } from "../../components/Input"
import { useForm } from "../../hooks/useForm"
import { Container } from "./styles"
import { COMPANY_POST } from "../../api/api"
import { UserContext } from "../../context/UserContext"
import { useNavigate } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"

export function CreateCompanyAccount() {
    const [disabled, setDisabled] = useState(true);
    const navigate = useNavigate();

    const { loading, error, request } = useFetch();

    const { userLogin } = useContext(UserContext);

    const email = useForm('email');
    const password = useForm('password');
    const nome_fantasia = useForm('');
    const razao_social = useForm('');
    const cnpj = useForm('');
    const sobre = useForm('');
    const img_perfil = useForm('');
    const link_google = useForm('');
    const telefone = useForm('');
    const email_contato = useForm('');
    const nome_contato = useForm('');
    const cep = useForm('');
    const estado = useForm('');
    const cidade = useForm('');
    const rua = useForm('');
    const numero = useForm('');
    const banco = useForm('');
    const agencia = useForm('');
    const digito = useForm('');
    const tipo_conta = useForm('');
    const conta = useForm('');

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const {urlCompany: url, optionsCompany: options} = COMPANY_POST({
            nome_fantasia: nome_fantasia.value, 
            razao_social: razao_social.value, 
            email: email.value, 
            senha: password.value, 
            cnpj: cnpj.value, 
            sobre: sobre.value, 
            img_perfil: img_perfil.value, 
            link_google: link_google.value, 
            telefone: telefone.value, 
            email_contato: email_contato.value, 
            nome_contato: nome_contato.value, 
            cep: cep.value, 
            estado: estado.value, 
            cidade: cidade.value, 
            rua: rua.value, 
            numero: numero.value, 
            banco: banco.value, 
            agencia: agencia.value, 
            digito: digito.value, 
            tipo_conta: tipo_conta.value, 
            conta: conta.value, 
        })
        if (request) {
            const { response } = await request(url, options);
            if(response) {
                if (response.status === 201) {
                    const typeUser = 'company';
                    userLogin(email.value, password.value, typeUser);
                }
            }
        }
    }

    function onChangeOrBlur() {
        if (
            !email.value ||
            !password.value ||
            !nome_fantasia.value ||
            !razao_social.value ||
            !cnpj.value ||
            !sobre.value ||
            !img_perfil.value ||
            !link_google.value ||
            !telefone.value ||
            !email_contato.value ||
            !nome_contato.value ||
            !cep.value ||
            !estado.value ||
            !cidade.value ||
            !rua.value ||
            !numero.value ||
            !banco.value ||
            !agencia.value ||
            !digito.value ||
            !tipo_conta.value ||
            !conta.value 
        ) {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    }
    
    return (
        <Container>
            <form onSubmit={handleSubmit} onChange={onChangeOrBlur} onBlur={onChangeOrBlur}>
                <legend className="legend">Cadastro de Empresas</legend>
                <div>
                    <label htmlFor="nome_fantasia">Nome Fantasia</label>
                    <Input id="nome_fantasia" Etype="text" {...nome_fantasia} />
                    <label htmlFor="razao_social">Razão Social</label>
                    <Input id="razao_social" Etype="text" {...razao_social} />
                    <label htmlFor="email">Email</label>
                    <Input id="email" Etype="email" {...email} />
                    <label htmlFor="senha">Senha</label>
                    <Input id="senha" Etype="password" {...password} />
                    <label htmlFor="cnpj">CNPJ</label>
                    <Input id="cnpj" Etype="text" {...cnpj} />
                </div>
                <div>
                    <label htmlFor="sobre">Sobre a Empresa:</label>
                    <Input id="sobre" Etype="text" {...sobre} />
                    <label htmlFor="img_perfil">Logo da Empresa (Link)</label>
                    <Input id="img_perfil" Etype="url" {...img_perfil} />
                    <label htmlFor="site_empresa">Site da Empresa</label>
                    <Input id="site_empresa" Etype="url" {...link_google} />
                </div>
                <div className="contato">
                    <label htmlFor="telefone">Telefone</label>
                    <Input id="telefone" Etype="text" {...telefone} />
                    <label htmlFor="email_contato">Email para Contato</label>
                    <Input id="email_contato" Etype="email" {...email_contato} />
                    <label htmlFor="nome_contato">Nome da Pessoa de Contato</label>
                    <Input id="nome_contato" Etype="text" {...nome_contato} />
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
                <div>
                    <label htmlFor="banco">Banco</label>
                    <Input id="banco" Etype="text" {...banco} />
                    <label htmlFor="agencia">Agencia</label>
                    <Input id="agencia" Etype="text" {...agencia} />
                    <label htmlFor="digito">Digito</label>
                    <Input id="digito" Etype="text" {...digito} />
                    <label htmlFor="tipo_conta">Tipo de Conta</label>
                    <Input id="tipo_conta" Etype="text" {...tipo_conta} />
                    <label htmlFor="conta">Conta</label>
                    <Input id="conta" Etype="text" {...conta} />
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