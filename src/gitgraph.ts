import { gitgraph } from "./renderer";

export const draw = () => {
  const main = gitgraph.branch("main");
  main.commit("initial commit");

  const develop = gitgraph.branch("develop");
  develop.commit("Add one commit");

  const feature = gitgraph.branch("feature");
  feature.commit("One commit").commit("Two commit").commit("Three commit");

  develop.merge(feature);

  main.merge(develop).tag("v1.0.0");
};
