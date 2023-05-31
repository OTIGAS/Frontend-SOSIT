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

export function Home() {

    return (
        <>
            <div>
                <ServiceSearchForm action="">
                    <ServiceSearchInput placeholder="Buscar por..." type="text" />
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
                    <OptionsSchedule  
                        nome_fantasia='Nome Fantasia 01'
                        nome_servico='Nome Serviço 01'
                        nome_agenda='Nome Agenda 01'
                        dias_semana={['seg', 'ter', 'qua', 'qui', 'sex', 'sab']}
                    />
                    <OptionsSchedule  
                        nome_fantasia='Nome Fantasia 01'
                        nome_servico='Nome Serviço 01'
                        nome_agenda='Nome Agenda 01'
                        dias_semana={['seg', 'ter', 'qua', 'qui', 'sex', 'sab']}
                    />
                    <OptionsSchedule  
                        nome_fantasia='Nome Fantasia 01'
                        nome_servico='Nome Serviço 01'
                        nome_agenda='Nome Agenda 01'
                        dias_semana={['seg', 'ter', 'qua', 'qui', 'sex', 'sab']}
                    />
                    <OptionsSchedule  
                        nome_fantasia='Nome Fantasia 01'
                        nome_servico='Nome Serviço 01'
                        nome_agenda='Nome Agenda 01'
                        dias_semana={['seg', 'ter', 'qua', 'qui', 'sex', 'sab']}
                    />
                    <OptionsSchedule  
                        nome_fantasia='Nome Fantasia 01'
                        nome_servico='Nome Serviço 01'
                        nome_agenda='Nome Agenda 01'
                        dias_semana={['seg', 'ter', 'qua', 'qui', 'sex', 'sab']}
                    />
                    <OptionsSchedule  
                        nome_fantasia='Nome Fantasia 01'
                        nome_servico='Nome Serviço 01'
                        nome_agenda='Nome Agenda 01'
                        dias_semana={['seg', 'ter', 'qua', 'qui', 'sex', 'sab']}
                    />
                    <OptionsSchedule  
                        nome_fantasia='Nome Fantasia 01'
                        nome_servico='Nome Serviço 01'
                        nome_agenda='Nome Agenda 01'
                        dias_semana={['seg', 'ter', 'qua', 'qui', 'sex', 'sab']}
                    />
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
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAAD5+fnc3Nyrq6toaGgyMjLMzMzx8fGOjo78/PxhYWGDg4PCwsI/Pz+cnJxVVVWjo6Nzc3PDw8N9fX02NjZvb28rKyu8vLy2trbU1NTk5OR7e3taWlo7OztsbGwZGRkPDw9LS0uSkpKIiIhFRUWnnOaGAAAD8klEQVR4nO3de3+aMBTGcbS2Kmq91SriZYq8/7e4tgmOSzgErHBO9nz/2z5x8hutQiDqeQAAAAAAAAAAAAAAAAAAAAAAAAAG4aChwO960+0EvcYuYdcbb6PfPLDXm3S99TaGjxRe+l1vvoWHCnso5EAVXl7rOR+lFW7qvvCH0grf6m7qCwr5QGEJFDKSKwxXE0qUjBNbGFa9xZ/0w8QWniuPYgI1UGzhorJwoAaikJH/s3A82xXNjg4VzowjPxwq3BlHHhwqXBtHurQPJ1OTd4cK3X8tRaEnuPBWWThUA8UWjt4qAlf6YWILPS9YUobJMMGFllDICApLoJCRXOFofqAEycPEFo4uFe+HR/2wrgtH9maZwkNF4P3suNvC/qpyO/OEHZdOawcKK/T/uF7Y5P6R3Dn+zWDM5xz/8ULu8zSPF3Kfa9OFlndk7Q2F3OdLdeGL3WjTLMZrNC6KYocKKShsw3MLl2qg2EIZx6WZQt90oUxdLVOja17Hv+onYVMYEkdw21Gx0BtFK8ogeRI2hRNqf3x+j5B4jp8q7F+ows339kkvpAJVFgpLMCtc5G/eurpWWDgI35cX7uYEJtctioWFN/9hWWF/Q/5cM7n2ZFFYug9lXD8sFgb7nEFZobgj79qvpSh0pfBqXETyxrHQJ18af84TJN4TlX4BHVCFPxeSJN7XlnmLCOJNiVidIEq8N/HxWYzbLija8bm/FDNRWSh0rVDGeotMYXj7LDFW51TZwpeqwK2XGdh9IbnKd18s9MLzOyG+JePYFMZU4c99FW6c45dwaBYDhfILD/mrnSvXCuvMtVliVmg/12aNWaH7+zD/exg593vo/mspCgUXeleq0IXjUvrcIjVCbqEXjsvODyPT+aE1PoWVUFgChU+FwizxhcFpW+Jkum5hjU3hkno/NFx7ssal0CeX9RquH1rjUuj+cSkKPVPhcGK+pHo6pOYKmBXa30/zZU38n/wbxazQ/p4oj77pdnkfxb2QmGvz34nC6f1fYFZYZ65NZuF1kRO7VliCKhwbP+jLpcL8bVFTroUXqtB4r74uzN809MG0sMF6C2mF4Zb4ITWtmRFX6Pnr2dpopn/TxBdWQqGGwlahMAuFGgpbhcIsFGoobBUKs1CoobBVKMxCoYbCVv1KYX6+lFWhr5681qeZpb53LTYWqhnh2/3P+qN6fmFzrfTn5/SaZPXkx7NpvXJh/bJarZb67jz1mT2L7KP1MudN8rfJd+dlxsyft0er19S1Y/GsQOqqbbvMi8AfRy7YbtWgemMbqVw02BrL1+/6oq7LtOhZgV97senXMv+qp+1BAAAAAAAAAAAAAAAAAAAAAAAA6Nxfh+5xHDhFcuIAAAAASUVORK5CYII=" alt='Logo da Empresa' />

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
                    
                </ContentSchedules>
            </Content>
        </>
    )
}