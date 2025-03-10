import { SxProps, Theme } from "@mui/material";

export const modalStyles: Record<string, SxProps<Theme>> = {
  modalBox: {
    padding: 2,
    backgroundColor: "white",
    maxWidth: 600,
    margin: "auto",
    borderRadius: 2,
    boxShadow: 24,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  image: {
    width: "100%",
    borderRadius: 2,
  },
} as const;
