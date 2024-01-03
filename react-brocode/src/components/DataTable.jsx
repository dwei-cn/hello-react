import DataTable from "react-data-table-component";
import React, { useState } from "react";

export default function DataTableDIY({ data, columns }) {
  const [searchTerm, setSearchTerm] = useState("");

  // 所谓的filter就是查找每个item的各个value是否存在searchTerm
  const filterData = () => {
    return data.filter((item) => {
      if (searchTerm === "") {
        return true; // or return item; depending on your logic
      } else {
        // Check if any property value includes the searchTerm
        const values = Object.values(item);
        return values.some((value) => {
          if (typeof value === "string" || typeof value === "number") {
            return value
              .toString()
              .toLowerCase()
              .includes(searchTerm.toLowerCase());
          }
        });
      }
    });
  };

  return (
    <>
      <div className="datatable-search-container">
        <span>Search:   </span>
        <input
          className="datatable-search-box"
          type="text"
          value={searchTerm}
          placeholder="Filter By Name"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="datatable-search-button"
          onClick={(e) => setSearchTerm("")}
        >
          Clear
        </button>
      </div>
      <div>
        <DataTable data={filterData()} columns={columns} pagination />
      </div>
    </>
  );
}
