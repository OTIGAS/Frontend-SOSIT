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

import CompanyIcon from '../../../assets/company-icon.svg'
import { useForm } from "../../../hooks/useForm"
import { SCHEDULE_POST_SERVICE } from "../../../api/api"

export function Home() {

    const token = window.localStorage.getItem('token')

    const service = useForm('');

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (token) {
            console.log(service.value, token)
            const {url, options} = SCHEDULE_POST_SERVICE({
                query: service.value
            }, token);
            console.log(url, options)
            const response = await fetch(url, options);
            const json = await response.json();
            console.log(json);
        }
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
                    <OptionsSchedule  
                        nome_fantasia='Nome Fantasia 01'
                        nome_servico='Nome Serviço 01'
                        nome_agenda='Nome Agenda 01'
                        dias_semana={['seg', 'ter', 'qua', 'qui', 'sex', 'sab']}
                    />
                </SearchResults>
            </div>
            <Content>
                <ContentCompany>
                    <img src='#' alt='Logo da Empresa' />

                    <h1 className="nome"></h1>

                    <span className="spanSobre">Descrição:</span>
                    <p className="sobre"></p>

                    <span className="spanSite">Site ou Google:</span>
                    <a href="" className="site"></a>

                    <span className="spanTelefone">Telefone para Contato:</span>
                    <strong className="telefone"></strong>

                    <span className="spanEmail">Email para Contato:</span>
                    <strong className="email"></strong>

                    <span className="spanCEP">CEP:</span>
                    <strong className="cep"></strong>

                    <span className="spanEstado">Estado:</span>
                    <strong className="estado"></strong>

                    <span className="spanCidade">Cidade:</span>
                    <strong className="cidade"></strong>

                    <span className="spanRua">Rua:</span>
                    <strong className="rua"></strong>

                    <span className="spanNumero">Numero:</span>
                    <strong className="numero"></strong>
                </ContentCompany>
                <ContentSchedules>
                    <strong></strong>
                    <strong></strong>
                    <p></p>
                    <div>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <button disabled>Selecione uma Agenda</button>
                </ContentSchedules>
            </Content>
        </>
    )
}