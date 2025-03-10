import { useState, useEffect } from "react";
import { GridSortModel, GridFilterModel } from "@mui/x-data-grid";

export const useSortFilterState = () => {
  const [sortingModel, setSortingModel] = useState<GridSortModel>([]);
  const [filterModel, setFilterModel] = useState<GridFilterModel>({ items: [] });

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const sortField = searchParams.get("sortField");
    const sortDirection = searchParams.get("sortDirection");
    const filters = searchParams.get("filters");

    if (sortField && sortDirection) {
      setSortingModel([{ field: sortField, sort: sortDirection as "asc" | "desc" }]);
    }

    if (filters) {
      setFilterModel({ items: JSON.parse(filters) });
    }
  }, []);

  const updateSortModel = (newModel: GridSortModel) => {
    setSortingModel(newModel);
    const searchParams = new URLSearchParams(window.location.search);

    if (newModel.length > 0) {
      searchParams.set("sortField", newModel[0].field);
      searchParams.set("sortDirection", newModel[0].sort || "asc");
    } else {
      searchParams.delete("sortField");
      searchParams.delete("sortDirection");
    }

    window.history.replaceState({}, "", "?" + searchParams.toString());
  };

  const updateFilterModel = (newModel: GridFilterModel) => {
    setFilterModel(newModel);
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("filters", JSON.stringify(newModel.items));
    window.history.replaceState({}, "", "?" + searchParams.toString());
  };

  return { sortingModel, filterModel, updateSortModel, updateFilterModel };
};
