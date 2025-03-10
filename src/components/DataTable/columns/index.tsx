import { GridColDef } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";

export const baseColumns: GridColDef[] = [
  {
    field: "image",
    headerName: "Image",
    width: 150,
    sortable: false,
    renderCell: (params) => (
      <Box
        component="img"
        src={params.value}
        alt="item"
        sx={{ width: "100%", height: "auto", borderRadius: 1, cursor: "pointer" }}
      />
    ),
  },
  {
    field: "description",
    headerName: "Description",
    width: 250,
    sortable: true,
    renderCell: (params) => (
      <Typography sx={{ fontWeight: "bold", color: "primary.main", fontSize: 14 }}>
        {params.value}
      </Typography>
    ),
  },
  {
    field: "date",
    headerName: "Date",
    width: 180,
    type: "date",
    sortable: true,
    valueGetter: (params) => new Date(params),
    renderCell: (params) => (
      <Typography sx={{ fontStyle: "italic", color: "secondary.main" }}>
        {params.value.toLocaleDateString()} 
      </Typography>
    ),
  },
  {
    field: "price",
    headerName: "Price",
    width: 120,
    sortable: true,
    type: "number",
    renderCell: (params) => (
      <Typography sx={{ fontWeight: "bold", color: "success.main" }}>
        ${params.value}
      </Typography>
    ),
  },
];
