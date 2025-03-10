import { SxProps, Theme } from "@mui/material";

export const columnStyles: Record<string, SxProps<Theme>> = {
  image: {
    width: "100%",
    height: "auto",
    borderRadius: 1,
    cursor: "pointer",
  },
  description: {
    fontWeight: "bold",
    color: "primary.main",
    fontSize: 14,
  },
  date: {
    fontStyle: "italic",
    color: "secondary.main",
  },
  price: {
    fontWeight: "bold",
    color: "success.main",
  },
} as const;
