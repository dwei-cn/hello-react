import React, { useEffect, useRef } from "react"
import { signal, useSignal, useSignalEffect } from "@preact/signals-react"
import { useSignals } from "@preact/signals-react/runtime"
import useOutsideClick from "./useOutsideClick"

export default function UseOnclickOutsideTest() {
  const showContent = useSignal(false)
  const divRef = useRef(null)

  const refHandler = () => {
    // showContent.value = false
    //alert("Clicked outside the div!")
    console.log("你出界了!")
  }

  useOutsideClick(divRef, refHandler)

  useSignals()
  return (
    <div>
      {showContent.value ? (
        <div style={{ background: "lightBlue", width: "40em" }} ref={divRef}>
          <h4>This is a random content</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
            autem commodi vitae voluptatibus minus, blanditiis error in dolorem
            fugiat reprehenderit impedit, voluptates, tempora sunt deserunt.
            Soluta impedit laboriosam error voluptatum?
          </p>
          <b>you can click outside to hide</b>
        </div>
      ) : (
        <button onClick={() => (showContent.value = !showContent.value)}>
          Show Content
        </button>
      )}
    </div>
  )
}
