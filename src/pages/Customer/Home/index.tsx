import { useContext, useEffect } from "react"

import { useNavigate } from "react-router-dom";

import CompanyIcon from '../../../assets/company-icon.svg'
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

import { useForm } from "../../../hooks/useForm"

import { ScheduleContext } from "../../../context/ScheduleContext"

import { OptionsSchedule } from "../../../components/OptionsSchedules/"

interface Agenda {
    id: string;
    servico: string;
    descricao: string;
    company_id: string;
    nome: string;
    dias_semana: string[];
  }

export function Home() {
    const navigate = useNavigate();

    const service = useForm('');

    const {agenda, empresa, agendas, loading, searchSchedule, searchCompany} = useContext(ScheduleContext);

    const token = window.localStorage.getItem('token');

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if(token) {
            searchSchedule(token, service.value);
        }
    }

    function handleClickSchedule(agenda: Agenda) {
        if(agenda) {
            searchCompany(agenda);
        }
    }

    function handleClickButton() {
        navigate('/cliente/agendar');
    }

    useEffect(() => {
        if(token) {
            searchSchedule(token, service.value);
        }
    }, [])

    return (
        <>
            <div>
                <ServiceSearchForm onSubmit={handleSubmit}>
                    <ServiceSearchInput placeholder="Buscar por..." {...service} />
                    <SelectSearch>
                        <SelectOptions value="service">Serviço</SelectOptions>
                        <SelectOptions value="company">Empresa</SelectOptions>
                    </SelectSearch>
                    <SearchButton type="submit" disabled={loading ? true : false}>
                        {loading ? "Pesquisando..." : "Buscar"} 
                        <MagnifyingGlass size={24}/>
                    </SearchButton>
                </ServiceSearchForm>
                
                <SearchResults>
                    {agendas.map((agenda: Agenda) => (
                        <div onClick={() => handleClickSchedule(agenda)}>
                        <OptionsSchedule
                            key={agenda.id}
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