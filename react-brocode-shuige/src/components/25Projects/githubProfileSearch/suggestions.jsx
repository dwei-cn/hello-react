import React from "react"

export default function Suggestions({ data, handleClick }) {
  // 一定要放在{}里面

  return (
    <div>
      <ul>
        {data && data.length
          ? data.map((item, index) => (
              <li key={index} onClick={handleClick}>
                {item}
              </li>
            ))
          : null}
      </ul>
    </div>
  )
}
