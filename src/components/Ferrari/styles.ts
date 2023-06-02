import styled from "styled-components";

export const SOSIT = styled.div`
    .carbutton {
  width: 200px;
  height: 70px;
  padding: 20px;
  background: #212121;
  border: 6px double #e8e8e8;
  transition: 0.2s;
}

.caption {
  color: #e8e8e8;
  font-family: 'Courier New', Courier, monospace;
  font-size: 20px;
  transition: 0.2s;
}

.car {
  fill: #e8e8e8;
  width: 50px;
  height: 50px;
  margin-left: -120px;
  margin-top: -35px;
  transition: 0.2s ease-in-out;
}

.carbutton:not(:hover) .car {
  opacity: 0%;
  transform: translateX(-150px);
}

.carbutton:hover .caption {
  opacity: 0%;
}

.carbutton:focus .car {
  transform: translateX(120px);
}

`;
