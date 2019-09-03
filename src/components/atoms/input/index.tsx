import React, { FC, ChangeEvent } from "react";

import { InputInternal } from "./styles";

interface IProps {
  value: string;
  placeholder?: string;
  onChange?: (ev: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<IProps> = ({ onChange, value, placeholder }) => (
  <InputInternal onChange={onChange} value={value} placeholder={placeholder} />
);

export default Input;
