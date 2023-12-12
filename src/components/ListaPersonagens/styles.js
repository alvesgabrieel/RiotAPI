import styled from "styled-components";

import { colors } from "../../styles";

export const MainContent = styled.div`
  display: flex;

  > div {
    width: 100vh;
    color: ${colors.white};
  }

  > div:nth-child(1) {
    h2 {
      width: fit-content;
    }
  }

  > div:nth-child(2) {
    padding: 32px;

    h2 {
      text-align: center;
      margin-bottom: 16px;
    }

    p {
      font-size: 32px;
    }
  }
`;

export const AgentsList = styled.h2`
  font-size: 130px;
  color: ${colors.white};
  cursor: pointer;
`;

export const imageAgent = styled.img`
  width: 100%;
`;
