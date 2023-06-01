import styled from "styled-components";

export const OptionsContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

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