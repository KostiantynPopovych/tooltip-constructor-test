import React, { FC, useState } from "react";
import Image from "components/atoms/image";
import Button from "components/atoms/button";
import { IImage } from "types/entities";

import { Overlay } from "styles/shared";
import { Wrap, ButtonsWrap, ButtonWrap } from "./styles";

interface IProps {
  onShowDetailsClick: (img: IImage) => void;
  onRemoveClick: (id: string) => void;
  img: IImage;
}

const GridItem: FC<IProps> = ({
  onShowDetailsClick,
  onRemoveClick,
  img: { source, altText, ...rest }
}) => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <Wrap
      onMouseEnter={() => setShowOverlay(true)}
      onMouseLeave={() => setShowOverlay(false)}
    >
      {showOverlay && (
        <Overlay>
          <ButtonsWrap>
            <ButtonWrap>
              <Button
                onClick={() => onShowDetailsClick({ ...rest, source, altText })}
                label={"Show details"}
              />
            </ButtonWrap>
            <ButtonWrap>
              <Button
                onClick={() => onRemoveClick(rest.id!)}
                label={"Remove image"}
              />
            </ButtonWrap>
          </ButtonsWrap>
        </Overlay>
      )}
      <Image source={source} altText={altText} />
    </Wrap>
  );
};

export default GridItem;
