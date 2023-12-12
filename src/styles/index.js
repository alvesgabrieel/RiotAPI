import { createGlobalStyle } from "styled-components";

import bg from "../assets/bg.png";

export const colors = {
  primary: "#ff4655",
  white: "#fff",
  blue: "#4fc3f7",
};

const EstiloGlobal = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    body {
        background-image: url(${bg});
        background-size: cover;
        background-size: auto;
        overflow-x: hidden;
    }
`;

export default EstiloGlobal;
