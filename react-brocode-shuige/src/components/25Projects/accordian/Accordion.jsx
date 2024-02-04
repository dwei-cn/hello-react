import { signal, useSignal } from "@preact/signals-react"
import { useSignals } from "@preact/signals-react/runtime"
import data from "./data"

export default function Accordion() {
  const showAnswerArray = useSignal([])
  const multiSelectStatus = useSignal(true)

  const clickMultiSelectButton = () => {
    multiSelectStatus.value = !multiSelectStatus.value
    showAnswerArray.value = []
  }

  const toggleAnswer = (id) => {
    if (multiSelectStatus.value) {
      if (showAnswerArray.value.includes(id)) {
        showAnswerArray.value = showAnswerArray.value.filter(
          (itemID) => itemID !== id
        )
      } else {
        showAnswerArray.value = [...showAnswerArray.value, id]
      }
    } else {
      if (showAnswerArray.value.includes(id)) {
        showAnswerArray.value = showAnswerArray.value.filter(
          (itemID) => itemID !== id
        )
      } else {
        showAnswerArray.value = [id]
      }
    }
  }

  useSignals()

  return (
    <div>
      <button onClick={clickMultiSelectButton}>Multiple Select</button> <br />
      Multiple Select Status: {multiSelectStatus.value.toString()} <br />
      Selected Questions: {showAnswerArray.value.map((id) => `${id}, `)}
      <ul>
        {data && data.length > 0 ? (
          data.map((item) => (
            <li key={item.id} onClick={() => toggleAnswer(item.id)}>
              {item.question} <br />
              {showAnswerArray.value.includes(item.id) && item.answer}
            </li>
          ))
        ) : (
          <div>Data Not Found!</div>
        )}
      </ul>
    </div>
  )
}
