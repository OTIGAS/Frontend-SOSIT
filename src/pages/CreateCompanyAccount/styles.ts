import styled from "styled-components";

export const Container = styled.div`
    width: 90rem;
    height: 100vh;

    margin: auto;
    padding: 20px;

    color: ${props => props.theme['color-9']};

    form {
        display: grid;
        grid-template-columns: 1fr 1fr;

        padding: 2.5rem;

        border-radius: 1rem;

        legend {
            font-size: 2.5rem;
            margin: auto;

            margin-bottom: 2.5rem;
        }

        div {
            display: flex;
            flex-direction: column;

            padding: 2.5rem;

            border-top: 1px solid ${props => props.theme['color-9']};

            label {
                text-align: start;
                font-size: 1.25rem;
                margin: 0 0 1% 10%;
            }

            input {
                margin: 0 auto 2% ;
                width: 80%;
                height: 2.5rem;

                font-size: 1.25rem;
                padding-left: 0.625rem;

                border-radius: 5px;
                color: ${props => props.theme['color-9']};
                background-color: ${props => props.theme['color-2']};
            }

            input:last-child {
                margin: 0 auto 0 ;
            }
            
        }

        button {
            margin: auto;
            margin-top: 2.5rem;

            width: 50%;
            height: 2.5rem;

            font-size: 1.25rem;

            border-radius: 5px;
            color: ${props => props.theme['color-9']};
            background-color: ${props => props.theme['color-2']};
            border: 1.5px solid ${props => props.theme['color-9']};

            cursor: pointer;
            transition: 0.2s;

            :disabled:hover {
                cursor: not-allowed;
                background-color: ${props => props.theme['red-500']};
            }

            :not(:disabled):hover {
                color: ${props => props.theme['primary-neutral']};
                background-color: ${props => props.theme['color-5']};
            }
        }
    }

    #sobre {
        margin: 0 auto 2% ;
        width: 80%;
        height: 7.5rem;

        font-size: 1.25rem;
        padding: 0.625rem;

        border-radius: 5px;
        color: ${props => props.theme['color-9']};
        background-color: ${props => props.theme['color-2']};
    }

    .contato {
        grid-column:1/3;
    }

    .legend {
        grid-column:1/3;
    }

    .buttonCancelar {
        grid-column: 1/2;
    }

    .buttonSalvar {
        grid-column: 2/3;
    }
`