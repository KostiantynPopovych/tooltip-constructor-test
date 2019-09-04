import React, { FC, useState, useEffect } from "react";
import ErrorText from "components/atoms/errorText";
import GridItem from "components/molecules/gridItem";
import Header from "components/molecules/header";
import Modal from "components/molecules/modal";
import ViewTooltipModal from "components/organisms/viewTooltipModal";
import TooltipConstructor from "components/organisms/tooltipConstructor";
import FileInput from "components/molecules/fileInput";

import { IImage } from "types/entities";

import { Wrap, Content, ImagesWrap } from "./styles";

interface IProps {
  images: Array<IImage>;
  isLoading: boolean;
  requestSetImage: (img: IImage) => void;
  requestRemoveImage: (id: string) => void;
  requestGetImages: () => void;
}

const GridPage: FC<IProps> = ({
  requestSetImage,
  requestGetImages,
  requestRemoveImage,
  images,
  isLoading
}) => {
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentImg, setCurrentImg] = useState<IImage>();
  const [imgName, setImgName] = useState("");
  const [imgBase, setImgBase] = useState("");
  const [errorFileFormat, setErrorFileFormat] = useState(false);

  useEffect(() => {
    requestGetImages();
  }, []);

  const handleDetailsClick = (img: IImage) => {
    setCurrentImg(img);
    setShowViewModal(true);
  };

  const handleCreateClick = () => {
    setShowEditModal(true);
  };

  const handleEditModalClose = () => {
    resetValues();
    setShowEditModal(false);
  };

  const resetValues = () => {
    setImgName("");
    setImgBase("");
    setErrorFileFormat(false);
    setCurrentImg(undefined);
  };

  const handleViewModalClose = () => {
    resetValues();
    setShowViewModal(false);
  };

  const handleImgUpload = ({ target: { files } }: any) => {
    const file = files[0];
    const isCorrect = file.type.split("/")[0] === "image";
    if (!isCorrect) return setErrorFileFormat(true);
    const fileReader: FileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      if (currentImg) {
        setErrorFileFormat(false);
        setCurrentImg({
          ...currentImg,
          altText: file.name,
          source: String(fileReader.result)
        });
        return;
      }
      setImgName(file.name);
      setImgBase(String(fileReader.result));
    };
  };

  const handleSaveClick = (img: IImage) => {
    requestSetImage(img);
    setShowEditModal(false);
  };

  const handleEditClick = (img: IImage) => {
    setShowViewModal(false);
    setShowEditModal(true);
  };

  const handleRemoveClick = (id: string) => {
    requestRemoveImage(id);
  };

  const showConstructor = currentImg || (imgBase && imgName);

  return (
    <>
      <Wrap>
        <Header onCreateClick={handleCreateClick} />
        <Content>
          <ImagesWrap>
            {!!images.length &&
              images.map(image => (
                <GridItem
                  onShowDetailsClick={handleDetailsClick}
                  onRemoveClick={handleRemoveClick}
                  img={image}
                  key={image.id}
                />
              ))}
          </ImagesWrap>
        </Content>
      </Wrap>
      <Modal isOpen={showEditModal} onClose={handleEditModalClose}>
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
              img={
                currentImg
                  ? currentImg
                  : {
                      altText: imgName,
                      source: imgBase,
                      tooltip: {
                        text: "",
                        position: { x: 0, y: 0 },
                        backgroundColor: "rgba(0,0,0,0)"
                      }
                    }
              }
              onChangeImage={handleImgUpload}
              onSaveClick={handleSaveClick}
            />
          )}
        </>
      </Modal>
      {showViewModal && currentImg && (
        <ViewTooltipModal
          isOpen={showViewModal}
          onClose={handleViewModalClose}
          img={currentImg}
          onEditClick={handleEditClick}
        />
      )}
    </>
  );
};

export default GridPage;
