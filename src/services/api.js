async function AgentsList() {
  const response = await fetch("https://valorant-api.com/v1/agents");
  const agents = await response.json();

  const jett = agents.data[23];
  const reyna = agents.data[21];
  const chamber = agents.data[5];
  const killjoy = agents.data[11];
  const sky = agents.data[7];
  const omen = agents.data[22];

  const agentInfo = [
    {
      name: jett.displayName,
      img: jett.fullPortrait,
      role: jett.role.displayName,
      description: jett.description,
    },
    {
      name: reyna.displayName,
      img: reyna.fullPortrait,
      role: reyna.role.displayName,
      description: reyna.description,
    },
    {
      name: chamber.displayName,
      img: chamber.fullPortrait,
      role: chamber.role.displayName,
      description: chamber.description,
    },
    {
      name: killjoy.displayName,
      img: killjoy.fullPortrait,
      role: killjoy.role.displayName,
      description: killjoy.description,
    },
    {
      name: sky.displayName,
      img: sky.fullPortrait,
      role: sky.role.displayName,
      description: sky.description,
    },
    {
      name: omen.displayName,
      img: omen.fullPortrait,
      role: omen.role.displayName,
      description: omen.description,
    },
  ];

  return agentInfo;
}

export default AgentsList;
