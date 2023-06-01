import styled from "styled-components";

export const Container = styled.div`
    width: 87.5rem;
    height: 48.4375rem;
    
    table {
        width: 100%;
        height: 100%;
    }

    tr{
        :hover {
            background-color: ${props => props.theme['color-2']};
        }
    }

    td {
        background-color: ${props => props.theme['color-3']};
        text-align: center;

        
    }

    .disponivel {
        background-color: ${props => props.theme['primary-neutral']};
    }
`