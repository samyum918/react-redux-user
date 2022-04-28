import React, { useEffect } from "react";
import "./App.css";
import { fetchUsers } from "./common/store/users";
import { useAppDispatch, useAppSelector } from "./common/hook";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

function App() {
  const users = useAppSelector((state) => state.entities.users.data);
  const dispatch = useAppDispatch();

  const columns: GridColDef[] = [
    { field: "id", headerName: "Id", width: 70 },
    { field: "name", headerName: "Name", width: 120 },
    { field: "phone", headerName: "Phone", width: 110 },
    { field: "birth", headerName: "Birth", width: 130 },
    { field: "address1", headerName: "Address1", width: 170 },
    { field: "address2", headerName: "Address2", width: 170 },
  ];

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="App">
      <h1>Get User List</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ width: 1000 }}>
          <DataGrid
            rows={users}
            columns={columns}
            disableColumnMenu={true}
            pageSize={5}
            rowsPerPageOptions={[5]}
            autoHeight={true}
            checkboxSelection
          />
        </div>
      </div>
    </div>
  );
}

export default App;
