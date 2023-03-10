import React, { FC, useState, useEffect } from "react";
import ErrorText from "components/atoms/errorText";
import GridItem from "components/molecules/gridItem";
import Header from "components/molecules/header";
import Button from "components/atoms/button";
import Modal from "components/molecules/modal";
import ViewTooltipModal from "components/organisms/viewTooltipModal";
import TooltipConstructor from "components/organisms/tooltipConstructor";
import FileInput from "components/molecules/fileInput";

import { IImage } from "types/entities";

import {
  Content,
  ImagesWrap,
  ImageWrap,
  UploadWrap,
  WithMargin
} from "./styles";

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
  images
}) => {
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [currentImg, setCurrentImg] = useState<IImage | null>(null);
  const [errorFileFormat, setErrorFileFormat] = useState(false);

  useEffect(() => {
    requestGetImages();
  }, []);

  const handleImgUpload = ({ target: { files } }: any, fromCreate = false) => {
    const file = files[0];
    const isCorrect = file.type.split("/")[0] === "image";
    if (!isCorrect) return setErrorFileFormat(true);
    const fileReader: FileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      setErrorFileFormat(false);
      setCurrentImg({
        ...(currentImg
          ? currentImg
          : {
              tooltip: {
                text: "",
                position: { x: 0, y: 0 },
                backgroundColor: "rgba(0,0,0,0)"
              }
            }),
        altText: file.name,
        source: String(fileReader.result)
      });
      if (fromCreate) {
        setShowEditModal(true);
        setShowUploadModal(false);
      }
    };
  };

  const resetImg = () => {
    setCurrentImg(null);
  };

  const handleCreateClick = () => {
    setShowUploadModal(true);
  };

  const handleDetailsClick = (img: IImage) => {
    setCurrentImg(img);
    setShowViewModal(true);
  };

  const handleEditClick = (img: IImage) => {
    setShowViewModal(false);
    setCurrentImg(img);
    setShowEditModal(true);
  };

  const handleUploadModalClose = () => {
    setShowUploadModal(false);
    setErrorFileFormat(false);
  };

  const handleEditModalClose = () => {
    resetImg();
    setShowEditModal(false);
    setShowUploadModal(false);
  };

  const handleViewModalClose = () => {
    resetImg();
    setShowViewModal(false);
  };

  const handleSaveClick = (img: IImage) => {
    requestSetImage(img);
    setShowEditModal(false);
  };

  const handleRemoveClick = (id: string) => {
    requestRemoveImage(id);
  };

  return (
    <>
      <Header onCreateClick={handleCreateClick} />
      <Content>
        <ImagesWrap>
          {!!images.length &&
            images.map(image => (
              <ImageWrap key={image.id}>
                <GridItem
                  onShowDetailsClick={handleDetailsClick}
                  onRemoveClick={handleRemoveClick}
                  img={image}
                />
              </ImageWrap>
            ))}
        </ImagesWrap>
      </Content>
      {showUploadModal && (
        <Modal withSmallMobileScale>
          <UploadWrap>
            <WithMargin>
              <FileInput
                onChange={e => handleImgUpload(e, true)}
                fileTypes={"image/*"}
                label={"Upload your image"}
              />
            </WithMargin>
            {errorFileFormat && (
              <WithMargin>
                <ErrorText>Wrong file type...</ErrorText>
              </WithMargin>
            )}
            <WithMargin>
              <Button onClick={handleUploadModalClose} label={"Close"} />
            </WithMargin>
          </UploadWrap>
        </Modal>
      )}
      {showEditModal && currentImg && (
        <Modal withMobileScale>
          <TooltipConstructor
            img={currentImg}
            onChangeImage={handleImgUpload}
            onSaveClick={handleSaveClick}
            onCloseClick={handleEditModalClose}
          />
        </Modal>
      )}
      {showViewModal && currentImg && (
        <ViewTooltipModal
          onClose={handleViewModalClose}
          img={currentImg}
          onEditClick={handleEditClick}
        />
      )}
    </>
  );
};

export default GridPage;
