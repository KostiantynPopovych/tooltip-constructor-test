import React, { FC } from "react";

import { Wrap, Text } from "./styles";

interface IProps {
  backgroundColor?: string;
  text?: string;
}

const Tooltip: FC<IProps> = ({ backgroundColor, text = "" }) => (
  <Wrap backgroundColor={backgroundColor}>
    <Text>{text}</Text>
  </Wrap>
);

export default Tooltip;
