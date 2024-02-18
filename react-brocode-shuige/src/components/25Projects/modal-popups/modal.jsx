import React, { useEffect } from "react"
import "./modal.css"
import { signal, useSignal, useSignalEffect } from "@preact/signals-react"
import { useSignals } from "@preact/signals-react/runtime"

export default function Modal({
  id,
  header,
  body,
  footer,
  onClose,
  countDownTime,
}) {
  const countDown = useSignal(countDownTime)
  const countDownInitial = countDownTime

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     if (countDown.value >= 0) {
  //       countDown.value -= 1
  //     } else {
  //       onClose() // 可以直接调用方程
  //     }
  //   }, countDownTime * 100) // 1000 毫秒即 1 秒钟
  //   // console.log(countDown.value)
  //   return () => clearTimeout(timer)
  // }, [countDown.value])

  useSignalEffect(() => {
    const timer = setTimeout(() => {
      if (countDown.value >= 0) {
        countDown.value -= 1
      } else {
        onClose() // 可以直接调用方程
      }
    }, countDownTime * 100) // 1000 毫秒即 1 秒钟
    console.log(countDown.value)
    return () => clearTimeout(timer)
  })

  useSignals()

  return (
    <>
      {countDown.value >= 0 && (
        <div id={id || "Modal"} className="modal-container">
          <div className="modal-content">
            <div className="header">
              <span className="close-modal-icon" onClick={onClose}>
                &minus; &times;{" "}
              </span>
              {header ? header : "敷衍的Header"}
            </div>
            <div className="body">
              {body ? body : "很敷衍的body"}
              <br />
              {`本弹窗即将在${countDownInitial}秒钟之后关闭, 还剩${countDown.value} 秒...`}
            </div>
            <div className="footer">{footer ? footer : "更加敷衍的Footer"}</div>
          </div>
        </div>
      )}
    </>
  )
}
