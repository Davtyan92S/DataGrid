import { SxProps, Theme } from "@mui/material";

export const dataTableStyles: Record<string, SxProps<Theme>> = {
  container: {
    height: 500,
    width: "100%",
    bgcolor: "background.paper",
    p: 2,
    borderRadius: 2,
  },
  loadingBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "400px",
  },
  errorBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "400px",
  },
  dataGrid: {
    "& .MuiDataGrid-columnHeaders": { bgcolor: "primary.light" },
    "& .MuiDataGrid-cell": { fontSize: 14 },
  },
} as const; 
