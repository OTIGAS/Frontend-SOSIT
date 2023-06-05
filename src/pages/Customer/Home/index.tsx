import { useState, useContext } from "react"

import { useNavigate } from "react-router-dom";

import { MagnifyingGlass } from "phosphor-react"

import { 
    ServiceSearchInput, 
    SelectOptions, 
    SelectSearch, 
    SearchButton, 
    ServiceSearchForm, 
    SearchResults,
    ContentCompany,
    Content,
    ContentSchedules
} from "./styles"

import { OptionsSchedule } from "../../../components/OptionsSchedules/"

import { GET_ID_COMPANY, SCHEDULE_POST_SERVICE } from "../../../api/api"

import { useForm } from "../../../hooks/useForm"

import CompanyIcon from '../../../assets/company-icon.svg'
import { ScheduleContext } from "../../../context/ScheduleContext"

interface Agenda {
    id: string;
    servico: string;
    descricao: string;
    company_id: string;
    nome: string;
    dias_semana: string[];
}

interface Empresa {
    agencia: string;
    banco: string;
    cep: string;
    cidade: string;
    cnpj: string;
    conta: string;
    digito: string;
    email: string;
    email_contato: string;
    estado: string;
    id: string;
    img_perfil: string;
    link_google: string;
    nome_contato: string;
    nome_fantasia: string;
    numero: string;
    razao_social: string;
    rua: string;
    senha_hash: string;
    sobre: string;
    telefone: string;
    tipo_conta: string;
}

export function Home() {
    const navigate = useNavigate();

    const {agenda, setAgenda} = useContext(ScheduleContext);

    const [agendas, setAgendas] = useState<Agenda[]>([]);

    const [empresa, setEmpresa] = useState<Empresa>();

    const token = window.localStorage.getItem('token')

    const service = useForm('');


    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (token) {
            const {url, options} = SCHEDULE_POST_SERVICE({
                query: service.value
            }, token);
            const response = await fetch(url, options);
            const json = await response.json();
            setAgendas(json.schedules);
        }
    }
    
    async function handleClick(schedule: Agenda) {
        if(schedule.company_id) {
            const { url, options } = GET_ID_COMPANY(schedule.company_id);
            const response = await fetch(url, options);
            const json = await response.json();
            setEmpresa(json.company);
            setAgenda(schedule);
        }
    }

    function handleClickButton() {
        navigate('/cliente/agendar');
    }

    return (
        <>
            <div>
                <ServiceSearchForm onSubmit={handleSubmit}>
                    <ServiceSearchInput placeholder="Buscar por..." {...service} />
                    <SelectSearch>
                        <SelectOptions value="service">Serviço</SelectOptions>
                        <SelectOptions value="company">Empresa</SelectOptions>
                    </SelectSearch>
                    <SearchButton type="submit">
                        Buscar 
                        <MagnifyingGlass size={24}/>
                    </SearchButton>
                </ServiceSearchForm>
                
                <SearchResults>
                    {agendas.map((agenda: any, idAgenda: any) => (
                        <div onClick={() => handleClick(agenda)}>
                        <OptionsSchedule
                            key={idAgenda}
                            nome_servico={agenda.servico}
                            nome_agenda={agenda.nome}
                            dias_semana={agenda.dias_semana}
                        />
                        </div>
                    ))}
                </SearchResults>
            </div>
            <Content>
                <ContentCompany>
                    <img src={CompanyIcon} alt='Logo da Empresa' />

                    <h1 className="nome">{empresa && empresa.nome_fantasia}</h1>

                    <span className="spanSobre">Descrição:</span>
                    <p className="sobre">
                        {empresa && empresa.sobre}
                    </p>

                    <span className="spanSite">Site ou Google:</span>
                    <a href="" className="site">
                        {empresa && empresa.link_google}
                    </a>

                    <span className="spanTelefone">Telefone para Contato:</span>
                    <strong className="telefone">
                        {empresa && empresa.telefone}
                    </strong>

                    <span className="spanEmail">Email para Contato:</span>
                    <strong className="email">
                        {empresa && empresa.email}
                    </strong>

                    <span className="spanCEP">CEP:</span>
                    <strong className="cep">
                        {empresa && empresa.cep}
                    </strong>

                    <span className="spanEstado">Estado:</span>
                    <strong className="estado">
                        {empresa && empresa.estado}
                    </strong>

                    <span className="spanCidade">Cidade:</span>
                    <strong className="cidade">
                        {empresa && empresa.cidade}
                    </strong>

                    <span className="spanRua">Rua:</span>
                    <strong className="rua">
                        {empresa && empresa.rua}
                    </strong>

                    <span className="spanNumero">Numero:</span>
                    <strong className="numero">
                        {empresa && empresa.numero}
                    </strong>
                </ContentCompany>
                <ContentSchedules>
                    <strong>
                        {empresa && agenda?.nome}
                    </strong>
                    <strong>
                        {empresa && agenda?.servico}
                    </strong>
                    <p>
                        {empresa && agenda?.descricao}
                    </p>
                    <div>
                        <span>{empresa && agenda?.dias_semana[0]}</span>
                        <span>{empresa && agenda?.dias_semana[1]}</span>
                        <span>{empresa && agenda?.dias_semana[2]}</span>
                        <span>{empresa && agenda?.dias_semana[3]}</span>
                        <span>{empresa && agenda?.dias_semana[4]}</span>
                        <span>{empresa && agenda?.dias_semana[5]}</span>
                    </div>
                    <button disabled={empresa ? false : true} onClick={handleClickButton}>
                        {empresa ? "Abrir Agenda" : "Selecione uma Agenda"}
                    </button>
                </ContentSchedules>
            </Content>
        </>
    )
}