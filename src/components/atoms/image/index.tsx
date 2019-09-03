import React, { FC } from "react";

import { Img } from "./styles";

interface IProps {
  source: string;
  altText: string;
  isBig?: boolean;
}

const Image: FC<IProps> = ({ source, altText, isBig }) => (
  <Img src={source} alt={altText} isBig={isBig} />
);

export default Image;
