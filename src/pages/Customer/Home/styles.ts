import styled from "styled-components";

export const ServiceSearchForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0 auto;
    margin-bottom: 1.25rem;
`

export const ServiceSearchInput = styled.input`
    width: 18.75rem;
    height: 4.0625rem;

    color: ${props => props.theme['color-9']};
    background-color: ${props => props.theme['color-3']};

    border: 2px solid ${props => props.theme['primary-neutral']};
    border-right: 0;
    border-radius: 8px 0 0 8px;
    padding: 0.75rem;

    font-size: 1.5rem;

    transition: 0.2s;

    :hover {
        background-color: ${props => props.theme['color-4']};
    }
`

export const SelectSearch = styled.select`
    width: 6.25rem;
    height: 4.0625rem;

    color: ${props => props.theme['color-9']};
    background-color: ${props => props.theme['color-3']};

    border: 2px solid ${props => props.theme['primary-neutral']};
    border-right: 0;
    border-left: 0;
    border-radius: 0;
    padding: 0.75rem 0.5rem;

    font-size: 1.25rem;

    transition: 0.2s;
    cursor: pointer;

    :hover {
        background-color: ${props => props.theme['color-4']};
    }
`

export const SelectOptions = styled.option`
    font-size: 1rem;

    color: ${props => props.theme['color-9']};
    background-color: ${props => props.theme['color-3']};
`

export const OptionsContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;

    width: 100%;

    margin-top: 0.625rem;
    gap: 0.625rem;

    border-radius: 8px;
    border: 1px solid ${props => props.theme['primary-neutral']};
    background-color: ${props => props.theme['color-2']};

    padding: 1.25rem;

    text-align: center;

    div {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;

        gap: 0.625rem;
        flex-wrap: wrap;
    }

    transition: 0.2s;

    cursor: pointer;

    :hover {
        background-color: ${props => props.theme['color-4']};
    }
`

export const SearchButton = styled.button`
    width: 6.25rem;
    height: 4.0625rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;

    color: ${props => props.theme['color-9']};
    background-color: ${props => props.theme['color-3']};

    border-radius: 0 8px 8px 0;
    border: 2px solid ${props => props.theme['primary-neutral']};

    font-size: 1.25rem;

    transition: 0.2s;
    cursor: pointer;

    :not(:disabled):hover {
        background-color: ${props => props.theme['color-4']};
    }

    :disabled {
        font-size: 0.625rem;
        cursor: not-allowed;
        background-color: ${props => props.theme['red-500']};
    }
`

export const SearchResults = styled.div`
    width: 37.5rem;
    height: 43.125rem;

    padding: 0.625rem;

    background-color: ${props => props.theme['color-3']};

    display: flex;
    align-items: flex-start;
    justify-content: start;
    flex-direction: column;

    overflow-y: auto;

    border-radius: 8px;
    border: 2px solid ${props => props.theme['primary-neutral']};

    scrollbar-width: thin;
    scrollbar-color: blue orange;

    ::-webkit-scrollbar {
        width: 12px;
    }

    ::-webkit-scrollbar-track {
        background: ${props => props.theme['color-3']};
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme['color-5']};
        border-radius: 20px;
        border: 3px solid ${props => props.theme['color-3']};
    }

    div {
        width: 100%;
    }
`

export const Content = styled.div`
    width: 48.75rem;

    padding: 1.25rem;

    border-radius: 8px;
    border: 2px solid ${props => props.theme['primary-neutral']};
    background-color: ${props => props.theme['color-3']};
`

export const ContentSchedules = styled.div`
    height: max-content;
    margin: auto 0;

    background-color: ${props => props.theme['color-2']};
    border: 1px solid ${props => props.theme['primary-neutral']};
    border-radius: 8px;

    padding: 0.625rem;

    display: grid;
    grid-template-columns: 0.75fr 1.25fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: 
    'nomeAgenda sobre diaSemana'
    'nomeServico sobre button';

    strong:nth-child(1) {
        grid-area: nomeAgenda;
    }

    strong:nth-child(2) {
        grid-area: nomeServico;
    }

    strong {
        text-align: center;
        
        display: flex;
        align-items: center;
        justify-content: center;

        margin: auto;
        width: 85%;
        height: 80%;

        background-color: ${props => props.theme['color-3']};
        border-radius: 5px;
    }

    p {
        display: flex;
        align-items: center;
        justify-content: center;

        grid-area: sobre;
        height: 11.25rem;

        background-color: ${props => props.theme['color-3']};
        border-radius: 5px;

        text-align: center;

        padding: 0.3125rem;

        overflow-y: auto;

        scrollbar-width: thin;
        scrollbar-color: blue orange;

        ::-webkit-scrollbar {
            width: 12px;
        }

        ::-webkit-scrollbar-track {
            background: ${props => props.theme['color-3']};
        }

        ::-webkit-scrollbar-thumb {
            background-color: ${props => props.theme['color-5']};
            border-radius: 20px;
            border: 3px solid ${props => props.theme['color-3']};
        }
    }

    div {
        grid-area: diaSemana;

        display: grid;
        grid-template-columns: 1fr 1fr 1fr;

        span {
            margin: auto;
        }

        width: 90%;
        margin: 0 auto;
        background-color: ${props => props.theme['color-3']};
    }

    button {
        width: 80%;
        height: 50%;

        margin: auto;

        border: 1px solid  ${props => props.theme['primary-neutral']};
        background-color: ${props => props.theme['color-3']};
        border-radius: 8px;

        color: ${props => props.theme['color-9']};

        transition: 0.2s;
        cursor: pointer;

        :not(:disabled)hover {
            background-color: ${props => props.theme['color-5']};
            color: ${props => props.theme['primary-neutral']};
        }

        :disabled:hover {
            background-color: ${props => props.theme['red-300']};
            cursor: not-allowed;
        }
    }
`

export const ContentCompany = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-areas: 
    'img nome nome nome'
    'spanSobre spanSobre spanSobre spanSobre'
    'sobre sobre sobre sobre'
    'spanSite site site site'
    'spanTelefone telefone telefone telefone'
    'spanEmail email email email'
    'spanCEP cep cep cep'
    'spanEstado estado estado estado'
    'spanCidade cidade cidade cidade'
    'spanRua rua rua rua'
    'spanNumero numero numero numero';

    img {
        width: 6.25rem;
        height: 6.25rem;
        margin: auto 1.25rem;

        border-radius: 20px;
        border: 2px solid ${props => props.theme['primary-neutral']};
        background-color: ${props => props.theme['color-4']};

        margin-bottom: 1.25rem;

        color: ${props => props.theme['color-9']};
    }

    h1 {
        width: 100%;
        min-height: 2.5rem;
        max-height: 5rem;

        margin: auto;
        padding-left: 1rem;

        border-radius: 0.625rem;
        background-color: ${props => props.theme['color-2']};

        text-align: start;
        font-size: 1.75rem;

        flex-wrap: wrap;

        overflow-y: auto;

        scrollbar-width: thin;
        scrollbar-color: blue orange;

        ::-webkit-scrollbar {
            width: 12px;
        }

        ::-webkit-scrollbar-track {
            background: ${props => props.theme['color-2']};
        }

        ::-webkit-scrollbar-thumb {
            background-color: ${props => props.theme['color-5']};
            border-radius: 20px;
            border: 3px solid ${props => props.theme['color-2']};
        }
    }
     
    p {
        height: 4.0625rem;

        text-align: justify;
        font-size: 1rem;

        margin-bottom: 0.625rem;

        padding: 0.3125rem;
        padding-right: 0.5rem;
        border-radius: 5px;
        background-color: ${props => props.theme['color-2']};

        overflow-y: auto;

        scrollbar-width: thin;
        scrollbar-color: blue orange;

        ::-webkit-scrollbar {
            width: 12px;
        }

        ::-webkit-scrollbar-track {
            background: ${props => props.theme['color-2']};
        }

        ::-webkit-scrollbar-thumb {
            background-color: ${props => props.theme['color-5']};
            border-radius: 20px;
            border: 3px solid ${props => props.theme['color-2']};
        }
    }

    strong, a {
        margin-bottom: 0.625rem;
        text-align: start;
        height: 1.75rem;

        text-align: center;

        padding: 0.3125rem;
        border-radius: 5px;
        background-color: ${props => props.theme['color-2']};
    }
    
    span {
        text-align: start;
        height: 1.5rem;
        margin-bottom: 0.3125rem;
    }

    .img {
        grid-area: img;
    }

    .nome {
        grid-area: nome;
    }

    .spanSobre {
        grid-area: spanSobre;
    }

    .sobre {
        grid-area: sobre;
    }

    .spanSite {
        grid-area: spanSite;
    }

    .site {
        grid-area: site;
    }

    .spanTelefone {
        grid-area: spanTelefone;
    }

    .telefone {
        grid-area: telefone;
    }

    .spanEmail {
        grid-area: spanEmail;
    }

    .email {
        grid-area: email;
    }

    .spanCEP {
    grid-area: spanCEP;
    }

    .cep {
        grid-area: cep;
    }

    .spanEstado {
        grid-area: spanEstado;
    }

    .estado {
        grid-area: estado;
    }

    .spanCidade {
        grid-area: spanCidade;
    }

    .cidade {
        grid-area: cidade;
    }

    .spanRua {
        grid-area: spanRua;
    }

    .rua {
        grid-area: rua;
    }

    .spanNumero {
        grid-area: spanNumero;
    }

    .numero {
        grid-area: numero;
    }

`