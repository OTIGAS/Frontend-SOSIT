import { Container } from "./styles";

export function ProfileCustomer() {
    return (
    <Container>
        <form action="">
            <legend>Informações do Usuário</legend>
            <label htmlFor="nome">Nome</label>
            <input id="nome" type="text" />
            <label htmlFor="email">Email</label>
            <input id="email" type="email" />
            <label htmlFor="senha">Senha</label>
            <input id="senha" type="password" />
            <label htmlFor="cpf">CPF</label>
            <input id="cpf" type="text" />
            <label htmlFor="telefone">Telefone</label>
            <input id="telefone" type="text" />
            <label htmlFor="cep">CEP</label>
            <input id="cep" type="text" />
            <label htmlFor="estado">Estado</label>
            <input id="estado" type="text" />
            <label htmlFor="cidade">Cidade</label>
            <input id="cidade" type="text" />
            <label htmlFor="rua">Rua</label>
            <input id="rua" type="text" />
            <label htmlFor="numero">Numero</label>
            <input id="numero" type="text" />
            <label htmlFor="numero">Nascimento</label>
            <input id="Nascimento" type="text" />
            <button>Cancelar</button>
            <button>Salvar</button>
        </form>
    </Container>
    )
}