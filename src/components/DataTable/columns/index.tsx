import { GridColDef } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";
import { columnStyles } from "./Columns.styles"; 

export const baseColumns: GridColDef[] = [
  {
    field: "image",
    headerName: "Image",
    width: 150,
    sortable: false,
    renderCell: (params) => (
      <Box component="img" src={params.value} alt="item" sx={columnStyles.image} />
    ),
  },
  {
    field: "description",
    headerName: "Description",
    width: 250,
    sortable: true,
    renderCell: (params) => <Typography sx={columnStyles.description}>{params.value}</Typography>,
  },
  {
    field: "date",
    headerName: "Date",
    width: 180,
    type: "date",
    sortable: true,
    valueGetter: (params) => new Date(params), 
    renderCell: (params) => (
      <Typography sx={columnStyles.date}>{params.value.toLocaleDateString()}</Typography>
    ),
  },
  {
    field: "price",
    headerName: "Price",
    width: 120,
    sortable: true,
    type: "number",
    renderCell: (params) => <Typography sx={columnStyles.price}>${params.value}</Typography>,
  },
];

export const getRowHeight = (params: { model: any }) => {
  const content = params.model.description || "";
  const numLines = content.split("\n").length;
  return Math.min(Math.max(100, numLines * 30), 300); 
};
