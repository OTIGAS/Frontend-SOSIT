import { useState, useContext, useEffect } from 'react'

import { Container } from "./styles";

import { UserContext } from "../../../context/UserContext";

interface Company {
  id: string;
  nome_fantasia: string;
  razao_social: string;
  email: string;
  senha: string;
  cnpj: string;
  sobre: string;
  img_perfil: string;
  link_google: string;
  telefone: string;
  email_contato: string;
  nome_contato: string;
  cep: string;
  estado: string;
  cidade: string;
  rua: string;
  numero: string;
  banco: string;
  agencia: string;
  digito: string;
  tipo_conta: string;
  conta: string;
}

export function ProfileCompany() {
  const [disabled, setDisabled] = useState(true);

  const { data, companyUpdate, loading, error, deleteCompany } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nome_fantasia, setNome_fantasia] = useState("");
  const [razao_social, setRazao_social] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [sobre, setSobre] = useState("");
  const [img_perfil, setImg_perfil] = useState("");
  const [link_google, setLink_google] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email_contato, setEmail_contato] = useState("");
  const [nome_contato, setNome_contato] = useState("");
  const [cep, setCep] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [banco, setBanco] = useState("");
  const [agencia, setAgencia] = useState("");
  const [digito, setDigito] = useState("");
  const [tipo_conta, setTipo_conta] = useState("");
  const [conta, setConta] = useState("");

  useEffect(() => {
    if (data && typeof data === 'object' && 'company' in data && typeof data.company === 'object') {
      const companyData = data.company as Company;
      setEmail(companyData.email),
      setPassword(companyData.senha),
      setNome_fantasia(companyData.nome_fantasia),
      setRazao_social(companyData.razao_social),
      setCnpj(companyData.cnpj),
      setSobre(companyData.sobre),
      setImg_perfil(companyData.img_perfil),
      setLink_google(companyData.link_google),
      setTelefone(companyData.telefone),
      setEmail_contato(companyData.email_contato),
      setNome_contato(companyData.nome_contato),
      setCep(companyData.cep),
      setEstado(companyData.estado),
      setCidade(companyData.cidade),
      setRua(companyData.rua),
      setNumero(companyData.numero),
      setBanco(companyData.banco),
      setAgencia(companyData.agencia),
      setDigito(companyData.digito),
      setTipo_conta(companyData.tipo_conta),
      setConta(companyData.conta),

      setDisabled(false);
    }
  }, [data])

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    let dataUpdate: Company | null = null;
    
    if (data && 'company' in data && data.company) {
      const companyData = data.company as Company;
      dataUpdate = {
        id: companyData.id,
        email: companyData.email,
        senha: '123456',
        nome_fantasia: companyData.nome_fantasia,
        razao_social: companyData.razao_social,
        cnpj: companyData.cnpj,
        sobre: companyData.sobre,
        img_perfil: companyData.img_perfil,
        link_google: companyData.link_google,
        telefone: companyData.telefone,
        email_contato: companyData.email_contato,
        nome_contato: companyData.nome_contato,
        cep: companyData.cep,
        estado: companyData.estado,
        cidade: companyData.cidade,
        rua: companyData.rua,
        numero: companyData.numero,
        banco: companyData.banco,
        agencia: companyData.agencia,
        digito: companyData.digito,
        tipo_conta: companyData.tipo_conta,
        conta: companyData.conta,
      };
    } else {
        dataUpdate = null;
    }

    if (dataUpdate) {
      companyUpdate(dataUpdate);
    }
  }


    function onChangeOrBlur() {
        if (
          !email ||
          !nome_fantasia ||
          !razao_social ||
          !cnpj ||
          !sobre ||
          !img_perfil ||
          !link_google ||
          !telefone ||
          !email_contato ||
          !nome_contato ||
          !cep ||
          !estado ||
          !cidade ||
          !rua ||
          !numero ||
          !banco ||
          !agencia ||
          !digito ||
          !tipo_conta ||
          !conta
        ) {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    }

    function handleClick() {
      if (data && 'company' in data && data.company) {
          const companyData = data.company as Company;
          deleteCompany(companyData.id)
      }
    }
    
    return (
        <Container>
            <form onSubmit={handleSubmit} onChange={onChangeOrBlur} onBlur={onChangeOrBlur}>
                <legend className="legend">Cadastro de Empresas</legend>
                <div>
                    <label htmlFor="nome_fantasia">Nome Fantasia</label>
                    <input id="nome_fantasia" type="text" value={nome_fantasia} onChange={(event: any) => setNome_fantasia(event.target.value)} />
                    <label htmlFor="razao_social">Razão Social</label>
                    <input id="razao_social" type="text" value={razao_social} onChange={(event: any) => setRazao_social(event.target.value)} />
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" value={email} onChange={(event: any) => setEmail(event.target.value)} />
                    <label htmlFor="cnpj">CNPJ</label>
                    <input id="cnpj" type="text" value={cnpj} onChange={(event: any) => setCnpj(event.target.value)} />
                </div>
                <div>
                    <label htmlFor="sobre">Sobre a Empresa:</label>
                    <input id="sobre" type="text" value={sobre} onChange={(event: any) => setSobre(event.target.value)} />
                    <label htmlFor="img_perfil">Logo da Empresa (Link)</label>
                    <input id="img_perfil" type="url" value={img_perfil} onChange={(event: any) => setImg_perfil(event.target.value)} />
                    <label htmlFor="site_empresa">Site da Empresa</label>
                    <input id="site_empresa" type="url" value={link_google} onChange={(event: any) => setLink_google(event.target.value)} />
                </div>
                <div className="contato">
                    <label htmlFor="telefone">Telefone</label>
                    <input id="telefone" type="text" value={telefone} onChange={(event: any) => setTelefone(event.target.value)} />
                    <label htmlFor="email_contato">Email para Contato</label>
                    <input id="email_contato" type="email" value={email_contato} onChange={(event: any) => setEmail_contato(event.target.value)} />
                    <label htmlFor="nome_contato">Nome da Pessoa de Contato</label>
                    <input id="nome_contato" type="text" value={nome_contato} onChange={(event: any) => setNome_contato(event.target.value)} />
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
                <div>
                    <label htmlFor="banco">Banco</label>
                    <input id="banco" type="text" value={banco} onChange={(event: any) => setBanco(event.target.value)} />
                    <label htmlFor="agencia">Agencia</label>
                    <input id="agencia" type="text" value={agencia} onChange={(event: any) => setAgencia(event.target.value)} />
                    <label htmlFor="digito">Digito</label>
                    <input id="digito" type="text" value={digito} onChange={(event: any) => setDigito(event.target.value)} />
                    <label htmlFor="tipo_conta">Tipo de Conta</label>
                    <input id="tipo_conta" type="text" value={tipo_conta} onChange={(event: any) => setTipo_conta(event.target.value)} />
                    <label htmlFor="conta">Conta</label>
                    <input id="conta" type="text" value={conta} onChange={(event: any) => setConta(event.target.value)} />
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