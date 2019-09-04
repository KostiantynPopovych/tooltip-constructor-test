import "rc-color-picker/assets/index.css";
import React, { FC, useState, SyntheticEvent, useEffect } from "react";
import { DraggableEventHandler } from "react-draggable";
import ColorPicker from "rc-color-picker";
import Image from "components/atoms/image";
import Input from "components/atoms/input";
import Button from "components/atoms/button";
import FileInput from "components/molecules/fileInput";
import Draggable from "components/molecules/draggable";
import { debounce } from "utils/timers";
import { formatColorToRgba } from "utils/color";
import { IImage } from "types/entities";

import { RelativeWrap } from "styles/shared";
import {
  Content,
  ButtonsWrap,
  PickerWrap,
  PickerText,
  WithMargin
} from "./styles";

interface IColorChangeEvent {
  color: string;
  alpha: number;
  open: boolean;
}
interface IProps {
  img: IImage;

  onChangeImage?: (ev: SyntheticEvent) => void;
  onSaveClick: (img: IImage) => void;
}

const TooltipConstructor: FC<IProps> = ({
  img: {
    id,
    source,
    altText,
    tooltip: { text, backgroundColor, position }
  },
  onChangeImage,
  onSaveClick
}) => {
  const [tooltipText, setTooltipText] = useState("");
  const [tooltipBackgroundColor, setTooltipBackgroundColor] = useState(
    "rgba(0,0,0,)"
  );
  const [tooltipPosition, setTooltipPosition] = useState();

  useEffect(() => {
    if (position) setTooltipPosition(position);
  }, [position]);

  useEffect(() => {
    if (backgroundColor) setTooltipBackgroundColor(backgroundColor);
  }, [backgroundColor]);

  useEffect(() => {
    if (text) setTooltipText(text);
  }, [text]);

  const handleStopDrag: DraggableEventHandler = (e, { x, y }) => {
    setTooltipPosition({
      x,
      y
    });
  };

  const changeHandler = debounce(({ alpha, color }: IColorChangeEvent) => {
    const result = formatColorToRgba(color, alpha);
    setTooltipBackgroundColor(result);
  }, 200);

  return (
    <RelativeWrap>
      <Image source={source} altText={altText} isBig />
      <Draggable
        onStop={handleStopDrag}
        tooltipPosition={tooltipPosition}
        tooltipColor={tooltipBackgroundColor}
        tooltipText={tooltipText}
      />
      <Content>
        <WithMargin>
          <PickerWrap>
            <PickerText>Select background color for tooltip</PickerText>
            <ColorPicker
              animation="slide-up"
              color={tooltipBackgroundColor}
              defaultAlpha={0}
              onChange={changeHandler}
            />
          </PickerWrap>
        </WithMargin>
        <WithMargin>
          <Input
            value={tooltipText}
            placeholder={"Enter description for your tooltip here"}
            onChange={({ target: { value } }) => setTooltipText(value)}
          />
        </WithMargin>
        <ButtonsWrap>
          <FileInput
            onChange={onChangeImage}
            fileTypes={"image/*"}
            label={"Select another image..."}
          />
          <Button
            onClick={() =>
              onSaveClick({
                id,
                source,
                altText,
                tooltip: {
                  text: tooltipText,
                  backgroundColor: tooltipBackgroundColor,
                  position: tooltipPosition
                }
              })
            }
            label={"Save"}
          />
        </ButtonsWrap>
      </Content>
    </RelativeWrap>
  );
};

export default TooltipConstructor;
