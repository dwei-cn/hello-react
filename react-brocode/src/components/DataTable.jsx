import DataTable from "react-data-table-component"
import React, { useState, useMemo } from "react"

export default function DataTableDIY({ data, columns }) {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredData = useMemo(() => {
    if (!searchTerm) return data

    return data.filter((item) => {
      const values = Object.values(item)

      return values.some(
        (value) =>
          (typeof value === "string" || typeof value === "number") &&
          value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    })
  }, [data, searchTerm])

  return (
    <>
      <div className="datatable-search-container">
        <span>Search: </span>
        <input
          className="datatable-search-box"
          type="text"
          value={searchTerm}
          placeholder="Filter By Name"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="datatable-search-button"
          onClick={() => setSearchTerm("")}
        >
          Clear
        </button>
      </div>
      <div>
        <DataTable data={filteredData} columns={columns} pagination />
      </div>
    </>
  )
}
