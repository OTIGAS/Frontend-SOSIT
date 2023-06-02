import { Container } from "./styles";

export function ProfileCustomer() {
    return (
    <Container>
        <form action="">
            <legend className="legenda">Informações do Usuário</legend>
            <label htmlFor="nome">Nome</label>
            <input id="nome" type="text" className="inputNome" />
            <label htmlFor="email">Email</label>
            <input id="email" type="email" className="inputEmail" />
            <label htmlFor="senha">Senha</label>
            <input id="senha" type="password" className="inputSenha" />
            <label htmlFor="cpf">CPF</label>
            <input id="cpf" type="text" className="inputCpf" />
            <label htmlFor="telefone">Telefone</label>
            <input id="telefone" type="text" className="inputTelefone" />
            <label htmlFor="cep">CEP</label>
            <input id="cep" type="text" className="inputCep" />
            <label htmlFor="estado">Estado</label>
            <input id="estado" type="text" className="inputEstado" />
            <label htmlFor="cidade">Cidade</label>
            <input id="cidade" type="text" className="inputCidade" />
            <label htmlFor="rua">Rua</label>
            <input id="rua" type="text" className="inputRua" />
            <label htmlFor="numero">Número</label>
            <input id="numero" type="text" className="inputNumero" />
            <button className="buttonCancelar">Cancelar</button>
            <button className="buttonSalvar">Salvar</button>
        </form>
    </Container>
    )
}