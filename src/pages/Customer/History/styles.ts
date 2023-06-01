import styled from "styled-components";

export const HistoryContainer = styled.div`
    width: 87.5rem;
    height: 48.4375rem;

    table {
        width: 100%;
    }

    caption {
        font-size: 1.75rem;
    }

    tr {
        height: 3.125rem;    
    }

    tr:nth-child(2n+1) {
        background-color: ${props => props.theme['color-3']};
    }

    td {
        height: 50px;
        text-align: center; 
    }

    td:last-child {
        width: 100px;
        
        font-size: 1.25rem;

        padding: 0.3125rem 0.625rem;
        
        border-radius: 8px;

        background-color: ${props => props.theme['color-1']};

        cursor: pointer;
        transition: 0.2s;

        :hover {
            background-color: ${props => props.theme['red-300']};
        }
    }

`