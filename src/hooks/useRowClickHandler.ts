import { useState } from "react";

export const useRowClickHandler = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalImage, setModalImage] = useState<string>("");

  const handleRowClick = (params: any) => {
    setModalImage(params.row.image);
    setOpenModal(true);
  };

  return { openModal, modalImage, setOpenModal, handleRowClick };
};
