import React, { FC, useRef, SyntheticEvent } from "react";
import Button from "components/atoms/button";

import { Input } from "./styles";

interface IProps {
  fileTypes: string;
  label: string;

  onChange?: (ev: SyntheticEvent) => void;
}

const FileInput: FC<IProps> = ({ onChange, fileTypes, label }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handlePress = () => {
    inputRef!.current!.click();
  };

  return (
    <Button onClick={handlePress} label={label}>
      <Input
        ref={inputRef}
        type="file"
        onChange={onChange}
        accept={fileTypes}
      />
    </Button>
  );
};

export default FileInput;
