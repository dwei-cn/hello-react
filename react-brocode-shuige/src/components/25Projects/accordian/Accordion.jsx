import { signal, useSignal } from "@preact/signals-react"
import { useSignals } from "@preact/signals-react/runtime"
import data from "./data"

export default function Accordion() {
  const selectedQuestions = useSignal([])
  const multiSelectEnabled = useSignal(true)
  const expandAllEnabled = useSignal(true)
  const expandButtonLabel = useSignal("Expand All")

  const clickMultiSelectButton = () => {
    multiSelectEnabled.value = !multiSelectEnabled.value
    selectedQuestions.value = []
  }

  const toggleAnswer = (id) => {
    if (multiSelectEnabled.value) {
      if (selectedQuestions.value.includes(id)) {
        selectedQuestions.value = selectedQuestions.value.filter(
          (itemID) => itemID !== id
        )
      } else {
        selectedQuestions.value = [...selectedQuestions.value, id]
      }
    } else {
      if (selectedQuestions.value.includes(id)) {
        selectedQuestions.value = selectedQuestions.value.filter(
          (itemID) => itemID !== id
        )
      } else {
        selectedQuestions.value = [id]
      }
    }
  }

  // // 精简版
  // const toggleAnswer = (id) => {
  //   const newArray = selectedQuestions.value.includes(id)
  //     ? selectedQuestions.value.filter((itemID) => itemID !== id)
  //     : multiSelectEnabled.value
  //     ? [...selectedQuestions.value, id]
  //     : [id]
  //   selectedQuestions.value = newArray
  // }

  const expandAll = () => {
    // 初始expandAllEnabled为true，这个时候点击按钮，就会把id全部加入selectedQuestions.value
    // 如果expandAllEnabled为false，则会清空selectedQuestions.value
    selectedQuestions.value = expandAllEnabled.value
      ? data.map((item) => item.id)
      : []
    expandButtonLabel.value = expandAllEnabled.value
      ? "Collapse All"
      : "Expand All"

    // 每次都会循环变更expandAllEnabled.value状态
    expandAllEnabled.value = !expandAllEnabled.value
  }

  useSignals()

  return (
    <div>
      很好的处理列表的范例
      <br />
      <br />
      <button onClick={clickMultiSelectButton}>
        Multiple Select {multiSelectEnabled.value.toString()}
      </button>{" "}
      <br /> <br />
      <button onClick={expandAll}>{expandButtonLabel.value}</button> <br />
      <br />
      Selected Questions: {selectedQuestions.value.map((id) => `${id}, `)}
      <ul>
        {data && data.length > 0 ? (
          data.map((item) => (
            <li key={item.id} onClick={() => toggleAnswer(item.id)}>
              {item.question} <br />
              {selectedQuestions.value.includes(item.id) && item.answer}
            </li>
          ))
        ) : (
          <div>Data Not Found!</div>
        )}
      </ul>
    </div>
  )
}
