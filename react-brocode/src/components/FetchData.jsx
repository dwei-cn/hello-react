import { v4 as uuidv4 } from "uuid"
import React, { useState } from "react"
import data from "/Users/dwei/Documents/dwei_local/hello-react/react-brocode/src/assets/sampleJSON.json"

export default function FetchData() {
  const [isThrough, setIsThrough] = useState(false)
  const data2 = data.slice(0, 5)
  const records = data2.map((item) => ({ id: uuidv4(), ...item })) // add id for each obj

  const handleDoubleClick = () => {
    setIsThrough(!isThrough)
  }

  return (
    <div>
      <p className={isThrough && "through"} onDoubleClick={handleDoubleClick}>
        双击<strong>划线</strong>
      </p>
      <h4>Read JSON file</h4>
      {records &&
        records.map((record) => (
          <div key={record.id} className="fetch-data-box">
            <strong>{record.title}</strong>
            <br />
            {record.director}
            {record.tech &&
              record.tech.map((data) => (
                <div key={data.name}>--- {data.name} ---</div>
              ))}
          </div>
        ))}
    </div>
  )
}
