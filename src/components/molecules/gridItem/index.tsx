import React, { FC } from "react";
import Image from "components/atoms/image";
import Button from "components/atoms/button";
import { IImage } from "types/entities";

interface IProps {
  onClick: (img: IImage) => void;
  img: IImage;
}

const GridItem: FC<IProps> = ({ onClick, img: { url, altText, ...rest } }) => (
  <Button onClick={() => onClick({ ...rest, url, altText })}>
    <Image source={url} altText={altText} />
  </Button>
);

export default GridItem;
