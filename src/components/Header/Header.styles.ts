import { SxProps, Theme } from "@mui/material";

export const headerStyles: Record<string, SxProps<Theme>> = {
  appBar: {
    position: "static",
    bgcolor: "primary.main",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    flexGrow: 1,
    fontWeight: "bold",
  },
} as const;
