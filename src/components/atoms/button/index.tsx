import React, { FC } from "react";

import { ButtonInternal, Label } from "./styles";

interface IProps {
  onClick?: (...args: any) => void;
  label?: string;
}

const Button: FC<IProps> = ({ onClick, label, children }) => (
  <ButtonInternal onClick={onClick} withBackground={!!label}>
    {label && <Label>{label}</Label>}
    {children}
  </ButtonInternal>
);

export default Button;
