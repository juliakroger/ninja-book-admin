import React from "react";
import { Statistic } from "semantic-ui-react";

const TitleList = ({ title, amount }) => (
  <Statistic>
    <Statistic.Value>{amount}</Statistic.Value>
    <Statistic.Label>{title}</Statistic.Label>
  </Statistic>
);

export default TitleList;
