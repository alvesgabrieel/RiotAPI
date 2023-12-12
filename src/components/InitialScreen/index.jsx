import { useState } from "react";

import * as S from "./styles";
import ListaPersonagens from "../ListaPersonagens";

const InitialScreen = () => {
  const [initialScreen, setInitialScreen] = useState(true);

  const agentsScreen = () => {
    setInitialScreen(!initialScreen);
  };

  return (
    <>
      {initialScreen ? (
        <S.BannerDivFlex>
          <S.Banner>
            <h1>Olá, seja bem vindo ao projeto Valorant-API!</h1>
            <h3>Aqui irei te falar um pouco mais sobre esse projeto</h3>
            <div>
              <p>
                Bem, primeiro tenho que dizer que esse projeto é inteiramente
                para prática, um exercício para faculdade, com o intuito de
                agregar mais conhecimento sobre o ecossistema front-end web.
              </p>

              <p>
                Aqui, pude praticar e entender um pouco mais sobre requisições
                assíncronas, mais especificamente requisitar dados de uma API
                pública ao qual a RIOT, empresa do jogo chamado
                &quot;Valorant&quot;, disponibiliza abertamente.
              </p>

              <p>
                Basicamente, nesse projeto fiz uma requisição FETCH, a fim de
                retornar dados de alguns personagens ao quais pessoalmente gosto
                de jogar. Você irá ver a lista dos personagens e poderá
                selecionar qualquer um, e todos os dados irá ser carregado na
                tela dinamicamente, de forma assíncrona, sem que ocorra o
                carregamento completo da página, e sim, a troca de conteúdo a
                cada REQUEST enviada.
              </p>

              <p>
                O projeto foi feito com <span>REACT</span> e estilizado com
                <span> Styled Components</span>.
              </p>

              <S.ButtonDiv>
                <button type="button" onClick={agentsScreen}>
                  <S.StyleGrLinkNext size={47} />
                </button>
              </S.ButtonDiv>
            </div>
          </S.Banner>
        </S.BannerDivFlex>
      ) : (
        <ListaPersonagens />
      )}
    </>
  );
};

export default InitialScreen;
