import { Input } from "../../components/Input"
import { useForm } from "../../hooks/useForm"
import { Container } from "./styles"

type Company = {
    id: string
    nome_fantasia: string
    razao_social: string
    email: string
    senha_hash: string
    cnpj: string
    sobre: string
    img_perfil: string
    link_google: string
    telefone: string
    email_contato: string
    nome_contato: string
    cep: string
    estado: string
    cidade: string
    rua: string
    numero: string
    banco: string
    agencia: string
    digito: string
    tipo_conta: string
    conta: string
}

export function CreateCompanyAccount() {
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

    return (
        <Container>
            <form action="">
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
                <button className="buttonCancelar">Voltar</button>
                <button className="buttonSalvar">Cadastrar</button>
            </form>
        </Container>
    )
}