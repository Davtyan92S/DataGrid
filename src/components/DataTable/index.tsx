import React, { useMemo } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, CircularProgress, Typography } from "@mui/material";
import useFetchData from "../../hooks/useFetchData";
import { baseColumns } from "./columns";
import ModalComponent from "../Modal";
import { usePaginationState } from "../../hooks/usePaginationState";
import { useSortFilterState } from "../../hooks/useSortFilterState";
import { useRowClickHandler } from "../../hooks/useRowClickHandler";
import { dataTableStyles } from "./DataTable.styles";

const DataTable: React.FC = () => {
  const { data, loading, error } = useFetchData("/data.json");
  const { paginationModel, updatePagination } = usePaginationState();
  const { sortingModel, filterModel, updateSortModel, updateFilterModel } = useSortFilterState();
  const { openModal, modalImage, setOpenModal, handleRowClick } = useRowClickHandler();

  const columns = useMemo(() => baseColumns, []);

  if (loading) {
    return (
      <Box sx={dataTableStyles.loadingBox}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={dataTableStyles.errorBox}>
        <Typography color="error">Error: {error}</Typography>
      </Box>
    );
  }

  return (
    <Box sx={dataTableStyles.container}>
      <DataGrid
        rows={data}
        columns={columns}
        sortingMode="client"
        sortModel={sortingModel}
        onSortModelChange={updateSortModel}
        filterModel={filterModel}
        onFilterModelChange={updateFilterModel}
        onRowClick={handleRowClick}
        pagination
        paginationMode="client"
        pageSizeOptions={[5, 10, 20]}
        paginationModel={paginationModel}
        onPaginationModelChange={updatePagination}
        sx={dataTableStyles.dataGrid} 
      />
      <ModalComponent open={openModal} onClose={() => setOpenModal(false)} imageUrl={modalImage} />
    </Box>
  );
};

export default DataTable;
