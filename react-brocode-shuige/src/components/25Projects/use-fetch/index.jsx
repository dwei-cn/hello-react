import React, { useEffect } from "react"
import { signal, useSignal, useSignalEffect } from "@preact/signals-react"
import { useSignals } from "@preact/signals-react/runtime"

export default function useFetch(url, options = {}, preview) {
  // 3 states
  const data = useSignal(null)
  const pending = useSignal(false)
  const error = useSignal(null)

  async function fetchData() {
    pending.value = true
    try {
      const response = await fetch(url, { ...options })
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      let result = await response.json()

      // Check if preview is true and result is an array or an object
      // 其实有问题，object并不好选择长度
      if (preview && Array.isArray(result.products)) {
        // Slice the products array to get the first 5 items
        result.products = result.products.slice(0, 5)
      }

      data.value = result
      error.value = null
      pending.value = false
    } catch (e) {
      error.value = `${e}. Some Error Occured.`
      pending.value = false
    }
  }

  useSignalEffect(() => {
    fetchData()
  })

  useSignals()

  //   return{data.value, pending.value, error.value}
  return { data: data.value, pending: pending.value, error: error.value }
}
