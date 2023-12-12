import styled from "styled-components";
import { MdNavigateNext } from "react-icons/md";

import { colors } from "../../styles";

export const BannerDivFlex = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 7em;
`;

export const Banner = styled.div`
  background: ${colors.primary};
  width: 50em;
  padding: 15px;
  border-radius: 10px;

  > h1,
  > h3 {
    text-align: center;
    color: ${colors.white};
    margin-bottom: 8px;
  }

  > div {
    margin-top: 30px;

    p {
      margin-bottom: 10px;
      color: ${colors.white};
      letter-spacing: 2px;
    }

    span {
      color: ${colors.blue};
    }
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;

  > button {
    margin: 30px 0;
    width: 54px;
    height: 54px;
    color: #000;
    font-weight: bold;
    border-radius: 50%;
    border: none;
    cursor: pointer;
  }
`;

export const StyleGrLinkNext = styled(MdNavigateNext)`
  color: ${colors.primary};
`;
