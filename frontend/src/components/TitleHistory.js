import { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { DataGrid } from "@mui/x-data-grid";

const TitleHistory = ({ numSearched, setNumSearched }) => {
  const [rows, setRows] = useState([]);
  const columns = [
    { field: "date", headerName: "Date", width: 400 },
    { field: "url", headerName: "URL", width: 360 },
    { field: "title", headerName: "Title", width: 600 },
  ];

  // Rerenders search history whenever new search is made
  useEffect(() => {
    if (!localStorage.getItem("searched")) {
      return;
    }
    let storage = JSON.parse(localStorage.getItem("searched"));
    let newRows = [];
    storage.forEach((website, index) => {
      newRows.push({
        id: index,
        date: new Date(website[0]),
        url: website[1],
        title: website[2],
      });
    });
    setRows(newRows);
  }, [numSearched]);

  // Clears previous searches
  const clearSearches = () => {
    localStorage.clear("searched");
    setNumSearched(0);
    setRows([]);
  };

  return (
    <div>
      <div style={{ height: 318, width: "100%" }}>
        <DataGrid
          initialState={{
            sorting: {
              sortModel: [{ field: "date", sort: "desc" }],
            },
          }}
          rows={rows}
          columns={columns}
        />
      </div>
      <Button onClick={clearSearches} variant="contained">
        Clear Searches
      </Button>
    </div>
  );
};
export default TitleHistory;
