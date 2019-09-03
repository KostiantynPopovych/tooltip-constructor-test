import React, { FC, useState, SyntheticEvent, useEffect } from "react";
import { Overlay } from "styles/shared";
import Image from "components/atoms/image";
import Input from "components/atoms/input";
import FileInput from "components/molecules/fileInput";

import { Wrap, Content } from "./styles";

interface ITooltip {
  color?: string;
  text?: string;
  position?: string;
}

interface IProps {
  source: string;
  imgName: string;
  tooltip?: ITooltip;

  onChangeImage?: (ev: SyntheticEvent) => void;
}

const TooltipConstructor: FC<IProps> = ({
  source,
  imgName,
  onChangeImage,
  tooltip: { color, text, position } = {}
}) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [tooltipText, setTooltipText] = useState("");

  useEffect(() => {
    if (text) setTooltipText(text);
  }, [text]);

  return (
    <Wrap
      onMouseEnter={() => setShowOverlay(true)}
      onMouseLeave={() => setShowOverlay(false)}
    >
      <Image source={source} altText={imgName} isBig />
      <Overlay>
        <Content>
          <Input
            value={tooltipText}
            placeholder={"Enter description for your tooltip here"}
            onChange={({ target: { value } }) => setTooltipText(value)}
          />
          <FileInput
            onChange={onChangeImage}
            fileTypes={"image/*"}
            label={"Select another image..."}
          />
        </Content>
      </Overlay>
    </Wrap>
  );
};

export default TooltipConstructor;
