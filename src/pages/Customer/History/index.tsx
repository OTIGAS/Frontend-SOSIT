import { HistoryContainer } from "./styles";

export function HistoryCustomer() {
    return (
        <HistoryContainer>
            <table>
                <caption>
                    Historio de Agendamentos
                </caption>
                <tr>
                    <th>
                        Empresa
                    </th>
                    <th>
                        Contato
                    </th>
                    <th>
                        Agenda
                    </th>
                    <th>
                        Serviço
                    </th>
                    <th>
                        Data
                    </th>
                    <th>
                        Inicio
                    </th>
                    <th>
                        Fim
                    </th>

                </tr>
                <tr>
                    <td>
                        Nome da Empresa
                    </td>
                    <td>
                        (00) 0.0000-0000
                    </td>
                    <td>
                        Nome da Agenda
                    </td>
                    <td>
                        Nome do Serviço
                    </td>
                    <td>
                        00/00/0000
                    </td>
                    <td>
                        00:00
                    </td>
                    <td>
                        00:00
                    </td>
                    <td>
                        Desmarcar
                    </td>
                </tr>
            </table>
        </HistoryContainer>
    )
}