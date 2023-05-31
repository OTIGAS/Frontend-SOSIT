import styled from "styled-components"

export const InputStyled = styled.input`
    height: 2.5rem;

    border-radius: 0.5rem;
    border: 2px solid ${props => props.theme['primary-neutral']};

    padding: 0.75rem;

    ::placeholder {
        color: ${props => props.theme['color-5']};
    }
`