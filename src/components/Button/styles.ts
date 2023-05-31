import styled from "styled-components";

export const ButtonStyled = styled.button`
    width: 80%;
    height: 2.5rem;

    border-radius: 0.5rem;
    color: #171717;
    border: 1px solid ${props => props.theme['primary-dark']};
    background-color: ${props => props.theme['primary-light']};

    cursor: pointer;
    transition: 0.2s;

    &:disabled {
        opacity: 0.70;
        cursor: not-allowed;
        background-color: ${props => props.theme['red-500']};
    }

    &:not(:disabled)hover {
        background-color: ${props => props.theme['primary-neutral']};
    }

    &:focus {
        box-shadow: none;
    }
`