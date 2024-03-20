import React, { useEffect } from "react"

// ref用于引用特定的DOM元素，handler是一个回调函数，用于处理点击事件发生在指定元素之外时的操作。
export default function UseOnClickOutside(ref, handler) {
  useEffect(() => {
    function listener(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        //如果ref.current存在且点击事件的目标不包含在ref.current中（即点击在引用外部），则条件为真，应该执行handler(event)来处理这种情况。

        handler(event)
      }
    }

    document.addEventListener("click", listener)

    return () => {
      document.removeEventListener("click", listener)
    }
  }, [ref, handler])
}
