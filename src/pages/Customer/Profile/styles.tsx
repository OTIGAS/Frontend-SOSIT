import styled from "styled-components";

export const Container = styled.div`
  width: 90rem;
  height: 48.4375rem;

  form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 0.75fr calc((1fr) * 11);
    grid-template-areas: 
    'legenda legenda'
    'nome cep'
    'inputNome inputCep'
    'email estado'
    'inputEmail inputEstado'
    'senha cidade'
    'inputSenha inputCidade'
    'cpf rua'
    'inputCpf inputRua'
    'telefone numero'
    'inputTelefone inputNumero'
    'buttonCancelar buttonSalvar';

    column-gap: 1.25rem;

    width: calc(100% - 2.5rem);
    height: 100%;
  }

  legend {
    margin: auto 0;
    text-align: center;
    font-size: 2rem;
  }

  label {
    text-align: start;
    margin-top: auto;
    margin-left: 10%;
    font-size: 1.25rem;
  }

  input {
    margin: auto;
    width: 80%;
    height: 60%;

    font-size: 1.25rem;
    padding-left: 0.625rem;

    border-radius: 5px;
    color: ${props => props.theme['color-9']};
    background-color: ${props => props.theme['color-5']};
  }

  button {
    margin: auto;
    width: 50%;
    height: 50%;

    font-size: 1.25rem;

    border-radius: 5px;
    border: 1.5px solid black;
    color: ${props => props.theme['color-9']};
    background-color: ${props => props.theme['color-5']};

    cursor: pointer;
    transition: 0.2s;

    :hover {
      color: ${props => props.theme['primary-neutral']};
      background-color: ${props => props.theme['color-1']};
    }
  }

  .legenda {
    grid-area: legenda;
  }

  .inputNome {
    grid-area: inputNome;
  }

  .inputCep {
    grid-area: inputCep;
  }

  .inputEmail {
    grid-area: inputEmail;
  }

  .inputEstado {
    grid-area: inputEstado;
  }

  .inputSenha {
    grid-area: inputSenha;
  }

  .inputCidade {
    grid-area: inputCidade;
  }

  .inputCpf {
    grid-area: inputCpf;
  }

  .inputRua {
    grid-area: inputRua;
  }

  .inputTelefone {
    grid-area: inputTelefone;
  }

  .inputNumero {
    grid-area: inputNumero;
  }

  .buttonCancelar {
    grid-area: buttonCancelar;
  }

  .buttonSalvar {
    grid-area: buttonSalvar;
  }
`