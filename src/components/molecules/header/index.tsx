import React, { FC } from "react";
import Button from "components/atoms/button";

import { Wrap } from "./styles";

interface IProps {
  onCreateClick: () => void;
}

const Header: FC<IProps> = ({ onCreateClick }) => (
  <Wrap>
    <Button onClick={onCreateClick} label={"Add new image"} />
  </Wrap>
);

export default Header;
