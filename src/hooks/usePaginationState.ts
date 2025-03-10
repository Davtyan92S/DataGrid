import { useState, useEffect } from "react";
import { GridPaginationModel } from "@mui/x-data-grid";

export const usePaginationState = () => {
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    page: 0,
    pageSize: 5,
  });

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const page = searchParams.get("page");
    const pageSize = searchParams.get("pageSize");

    if (page && pageSize) {
      setPaginationModel({
        page: parseInt(page, 10),
        pageSize: parseInt(pageSize, 10),
      });
    }
  }, []);

  const updatePagination = (newModel: GridPaginationModel) => {
    setPaginationModel(newModel);
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("page", newModel.page.toString());
    searchParams.set("pageSize", newModel.pageSize.toString());
    window.history.replaceState({}, "", "?" + searchParams.toString());
  };

  return { paginationModel, updatePagination };
};
