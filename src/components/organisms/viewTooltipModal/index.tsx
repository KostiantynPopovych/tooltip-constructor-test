import React, { FC, useState } from "react";
import Image from "components/atoms/image";
import Modal from "components/molecules/modal";
import Button from "components/atoms/button";
import Draggable from "components/molecules/draggable";
import { IImage } from "types/entities";

import { RelativeWrap } from "styles/shared";
import { ButtonsWrap } from "./styles";

interface IProps {
  onClose: () => void;
  onEditClick: (img: IImage) => void;
  img: IImage;
}

const ViewTooltipModal: FC<IProps> = ({
  onClose,
  onEditClick,
  img: {
    id,
    source,
    altText,
    tooltip: { text, backgroundColor, position }
  }
}) => {
  const [showTooltipOnHover, setShowTooltipOnHover] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltipOnHover(true);
  };

  const handleMouseLeave = () => {
    setShowTooltipOnHover(false);
  };

  return (
    <Modal withMobileScale>
      <RelativeWrap
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Image source={source} altText={altText} isBig />
        {showTooltipOnHover && (
          <Draggable
            tooltipPosition={position}
            tooltipColor={backgroundColor}
            tooltipText={text}
          />
        )}
        <ButtonsWrap>
          <Button label={"Close"} onClick={onClose} />
          <Button
            label={"Edit"}
            onClick={() =>
              onEditClick({
                id,
                source,
                altText,
                tooltip: {
                  text,
                  backgroundColor,
                  position
                }
              })
            }
          />
        </ButtonsWrap>
      </RelativeWrap>
    </Modal>
  );
};

export default ViewTooltipModal;
