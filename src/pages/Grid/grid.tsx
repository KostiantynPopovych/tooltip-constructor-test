import React, { FC, useState } from "react";
import ErrorText from "components/atoms/errorText";
import GridItem from "components/molecules/gridItem";
import Header from "components/molecules/header";
import Modal from "components/molecules/modal";
import TooltipConstructor from "components/organisms/tooltipConstructor";
import FileInput from "components/molecules/fileInput";

import { IImage } from "types/entities";

import { Wrap, Content, ImagesWrap } from "./styles";

interface IProps {}
const IMGs = [
  {
    id: "1",
    altText: "first img",
    url:
      "https://upload.wikimedia.org/wikipedia/en/thumb/6/63/IMG_%28business%29.svg/1200px-IMG_%28business%29.svg.png"
  },
  {
    id: "2",
    altText: "second img",
    url: "http://qnimate.com/wp-content/uploads/2014/03/images2.jpg",
    tooltip: {
      text: "some not very long text",
      position: "right",
      backgroundColor: "#333"
    }
  }
];

const GridPage: FC<IProps> = ({}) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [imgName, setImgName] = useState("");
  const [imgBase, setImgBase] = useState("");
  const [errorFileFormat, setErrorFileFormat] = useState(false);

  const handleImageClick = (img: IImage) => {
    console.log(img);
  };

  const handleCreateClick = () => {
    setShowEditModal(true);
  };

  const handleModalClose = () => {
    setShowEditModal(false);
  };

  const handleImgUpload = ({ target: { files } }: any) => {
    const file = files[0];
    const isCorrect = file.type.split("/")[0] === "image";
    if (!isCorrect) return setErrorFileFormat(true);
    const fileReader: FileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      setImgName(file.name);
      setImgBase(String(fileReader.result));
      setErrorFileFormat(false);
    };
  };

  const showConstructor = imgBase && imgName;

  return (
    <>
      <Wrap>
        <Header onCreateClick={handleCreateClick} />
        <Content>
          <ImagesWrap>
            {!!IMGs.length &&
              IMGs.map(image => (
                <GridItem
                  onClick={handleImageClick}
                  img={image}
                  key={image.id}
                />
              ))}
          </ImagesWrap>
        </Content>
      </Wrap>
      <Modal isOpen={showEditModal} onClose={handleModalClose}>
        <>
          {!showConstructor && (
            <>
              <FileInput
                onChange={handleImgUpload}
                fileTypes={"image/*"}
                label={"Upload your image"}
              />
              {errorFileFormat && <ErrorText>Wrong file type...</ErrorText>}
            </>
          )}
          {showConstructor && (
            <TooltipConstructor
              source={imgBase}
              imgName={imgName}
              onChangeImage={handleImgUpload}
            />
          )}
        </>
      </Modal>
    </>
  );
};

export default GridPage;
