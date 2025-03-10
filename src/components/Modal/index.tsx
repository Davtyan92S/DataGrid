import React, { FC } from "react";
import { Modal, Box } from "@mui/material";
import { modalStyles } from "./ModalComponent.styles"; 

interface ModalComponentProps {
  open: boolean;
  onClose: () => void;
  imageUrl: string;
}

const ModalComponent: FC<ModalComponentProps> = ({ open, onClose, imageUrl }) => (
  <Modal open={open} onClose={onClose}>
    <Box sx={modalStyles.modalBox}>
      <img src={imageUrl} alt="Modal" style={modalStyles.image as React.CSSProperties} />
    </Box>
  </Modal>
);

export default ModalComponent;
