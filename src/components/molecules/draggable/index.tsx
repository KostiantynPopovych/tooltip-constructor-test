import React, { FC } from "react";
import DraggableInternal from "react-draggable";
import Tooltip from "components/atoms/tooltip";

import { Wrap } from "./styles";

interface IProps {
  onStop?: (...args: any) => void;
  tooltipPosition: {
    x: number;
    y: number;
  };
  tooltipColor: string;
  tooltipText: string;
}

const Draggable: FC<IProps> = ({
  onStop,
  tooltipPosition,
  tooltipColor,
  tooltipText
}) => (
  <Wrap>
    <DraggableInternal
      position={tooltipPosition}
      onStop={onStop}
      disabled={!onStop}
      bounds="parent"
    >
      <div style={{ display: "flex", width: "fit-content", paddingBottom: 10 }}>
        <Tooltip backgroundColor={tooltipColor} text={tooltipText} />
      </div>
    </DraggableInternal>
  </Wrap>
);
export default Draggable;
