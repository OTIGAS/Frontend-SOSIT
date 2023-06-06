import styled from "styled-components";

export const LayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    main {
        max-width: 90rem;
        max-height: 50.9375rem;
        margin: 0 auto;

        background-color: ${props => props.theme['color-2']};

        padding: 1.25rem;

        display: grid;
        grid-template-columns: auto 1fr;
        gap: 1.25rem;
    }
`

export const NavContent = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-around;
    
    height: 3.125rem;

    a {
        font-size: 1.5rem;
        text-decoration: none;
        color: ${props => props.theme['color-9']};

        padding: 0 1rem;
        border-radius: 5px;

        transition: 0.2s;
        border-bottom: 2px solid transparent;

        &:hover {
            color: ${props => props.theme['primary-neutral']};
        }

        &.active {
            color: ${props => props.theme['primary-neutral']};
        }
    }

`