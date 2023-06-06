import { HISTORY_COMMITMENTS_CUSTOMER } from "../../../api/schedules";
import { HistoryContainer } from "./styles";

export function HistoryCompany() {

    const token = window.localStorage.getItem('token');

    async function getHistory(token: string) {
        if (token) {
            const {url, options} = HISTORY_COMMITMENTS_CUSTOMER(token);
            const response = await fetch(url, options);
            const json = await response.json();
            console.log(json);
        }
    }

    if (token) getHistory(token);

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