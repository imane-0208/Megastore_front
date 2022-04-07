import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { GetAllProductsDashboardDocument } from "@/graphql/generated/graphql";
import { useQuery } from "@apollo/client";

const columns = [
  { field: "uuid", headerName: "uuid", width: 70 },
  { field: "price", headerName: "price", width: 130 },
  { field: "name", headerName: "name", width: 130 },
];

export const DataTable: any = () => {
  const { data , loading , error} = useQuery(GetAllProductsDashboardDocument);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (data) {
      console.log(data.getAllProducts);
      setProducts(data.getAllProducts);
    }
  }, [data]);

  return (
    <>
      {data ? (
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={products}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </div>
      ) : null}
    </>
  );
};

export default DataTable;
