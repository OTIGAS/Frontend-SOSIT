import styled from "styled-components";

export const HomePageContent = styled.main`
    padding: 3.125rem;
    max-width: 1440px;
    margin: auto;

    display: grid;
    grid-template-columns: 2fr 1fr;

    gap: 0.625rem;

    h1 {
        font-size: 2rem;
        margin-bottom: 1.25rem;
    }

    .description-content > p:nth-child(2) {
        max-width: 53.125rem;
        margin-bottom: 3.125rem;

        font-size: 1.5rem;
        text-align: justify;
    }

    h2 {
        display: inline;
        position: relative;
        top: 1rem;

        margin-left: 1.25rem;
        font-size: 2rem;

        background-color: ${props => props.theme['color-1']};
    }

    div > div {
        max-width: 46.875rem;
        margin-left: 3.125rem;

        p {
            font-size: 1.5rem;
            text-align: justify;

            padding: 1.25rem;

            border: 1px solid ${props => props.theme['primary-neutral']};
            border-radius: 1.25rem;
        }

        button {
            position: relative;
            top: -0.75rem;

            width: 6.25rem;
            height: 2rem;

            margin-left: 82%;
            
            border: 0;
            border-radius: 8px;
            background-color: ${props => props.theme['primary-light']};

            cursor: pointer;
            transition: 0.2s;

            &:hover {
                background-color: ${props => props.theme['primary-neutral']};
            }

            &:focus {
                box-shadow: none;
            }

            a {
                text-decoration: none;
                color: #171717;
            }
        }
    }

`

export const LoginFormContent = styled.form`
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: space-between;

    padding: 1rem;
    border-radius: 1.25rem;
    border: 2px solid ${props => props.theme['primary-neutral']};
    background-color: ${props => props.theme['color-1']};

    margin-bottom: 0.75rem;

    div {
        display: flex;
        flex-direction: column;

        gap: 0.625rem;
        width: 80%;
        
        a {
            text-align: center;
            color: ${props => props.theme['color-9']};

            transition: 0.2s;

            &:hover {
                color: ${props => props.theme['primary-neutral']};
            }
        }
    }

    label {
        font-size: 2rem;
    }


`