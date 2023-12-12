import { useEffect, useState } from "react";

import AgentsList from "../../services/api";
import * as S from "./styles";

const ListaPersonagens = () => {
  const [agentInfo, setAgentInfo] = useState(null);
  const [selectAgent, setSelectAgent] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const getInfo = await AgentsList();
      setAgentInfo(getInfo);
    };

    fetchData();
  }, []);

  const handleAgentClick = (agent) => {
    setSelectAgent(agent);
  };

  return (
    <>
      <S.MainContent>
        {agentInfo && (
          <div>
            {agentInfo.map((agent, index) => (
              <div key={index}>
                <S.AgentsList onClick={() => handleAgentClick(agent)}>
                  {agent.name}
                </S.AgentsList>
              </div>
            ))}
          </div>
        )}
        {selectAgent && (
          <div>
            <h2>Função do agente: {selectAgent.role}</h2>
            <div className="flex">
              <S.imageAgent src={selectAgent.img} alt={selectAgent.name} />
              <p>{selectAgent.description}</p>
            </div>
          </div>
        )}
      </S.MainContent>
    </>
  );
};

export default ListaPersonagens;
