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

    :hover {
        background-color: ${props => props.theme['color-4']};
    }
`

export const SearchResults = styled.div`
    width: 31.25rem;
    height: 37.5rem;

    padding: 0.625rem;

    background-color: ${props => props.theme['color-3']};

    display: flex;
    align-items: flex-start;
    justify-content: start;
    flex-direction: column;

    overflow-y: auto;

    border-radius: 8px;
    border: 2px solid ${props => props.theme['primary-neutral']};
`

export const Content = styled.div`
    width: 45rem;

    padding: 1.25rem;

    border-radius: 8px;
    border: 2px solid ${props => props.theme['primary-neutral']};
    background-color: ${props => props.theme['color-3']};
`

export const ContentSchedules = styled.div`

`

export const ContentCompany = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-areas: 
    'img nome nome nome'
    'spanSobre spanSobre spanSobre spanSobre'
    'sobre sobre sobre sobre'
    'spanSite site site site'
    'spanTelefone spanTelefone telefone telefone'
    'spanEmail spanEmail email email'
    'spanCEP spanCEP cep cep'
    'spanEstado spanEstado estado estado'
    'spanCidade spanCidade cidade cidade'
    'spanRua spanRua rua rua'
    'spanNumero spanNumero numero numero';

    img {
        width: 6.25rem;
        height: 6.25rem;
        margin: auto 1.25rem;

        border-radius: 20px;
        border: 2px solid ${props => props.theme['primary-neutral']};
        background-color: ${props => props.theme['color-2']};

        margin-bottom: 1.25rem;
    }

    h1 {
        width: 32.5rem;
        height: auto;

        margin: auto;
        padding-left: 1rem;

        border-radius: 0.625rem;
        background-color: ${props => props.theme['color-2']};

        text-align: start;
        font-size: 1.75rem;

        flex-wrap: wrap;
    }
     
    p {
        max-height: 4.0625rem;

        text-align: justify;
        font-size: 1rem;

        margin-bottom: 0.625rem;

        padding: 0.3125rem;
        padding-right: 0.5rem;
        border-radius: 5px;
        background-color: ${props => props.theme['color-2']};

        overflow-y: auto;
    }

    strong {
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