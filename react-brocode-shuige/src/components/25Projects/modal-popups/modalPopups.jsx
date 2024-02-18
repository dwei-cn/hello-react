import React from "react"
import { signal, useSignal } from "@preact/signals-react"
import { useSignals } from "@preact/signals-react/runtime"

import Modal from "./modal"

export default function Modalpopups() {
  const showModalPopups = useSignal(false)

  const handleToggleModalPopups = () => {
    showModalPopups.value = !showModalPopups.value
  }

  const onClose = () => {
    showModalPopups.value = !showModalPopups.value
  }

  useSignals()
  return (
    <div>
      <button onClick={handleToggleModalPopups}>泡泡玛特</button>
      {showModalPopups.value && (
        <Modal
          body={<div> 新年快乐！恭喜发财！</div>}
          onClose={onClose}
          countDownTime={10}
        />
      )}
    </div>
  )
}
