import styled from "styled-components";

export const Container = styled.div`
  width: 87.5rem;

  .meu-evento-personalizado {
    background-color: blue;

    margin-left: -107px;
    width: 201.5%;
  }

  .fc-timegrid-slots tr {
    border: 1px dashed ${(props) => props.theme["color-9"]};
  }

  .fc-timegrid-slots .fc-timegrid-slot.fc-timegrid-slot-minor {
    border-bottom: 1px solid ${(props) => props.theme["color-9"]};
  }

  .fc-timegrid-col {
    border: 1px solid ${(props) => props.theme["color-9"]}; /* Defina a cor de fundo desejada */
  }

  .fc-col-header-cell-cushion .fc-toolbar-title {
    color: ${(props) => props.theme["color-9"]};
  }

  .fc-timegrid-slots .fc-timegrid-slot.fc-widget-header {
    border: 1px solid ${(props) => props.theme["red-500"]}; /* Defina a cor de fundo desejada para as linhas da parte superior da agenda */
  }

  .fc-timegrid-col.fc-widget-header {
    background-color: red; /* Defina a cor de fundo desejada para as linhas das colunas */
  }
`;
