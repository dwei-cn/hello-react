import React from "react"
import { signal, useSignal, useSignalEffect } from "@preact/signals-react"
import { useSignals } from "@preact/signals-react/runtime"

import { shoppingSliceAction } from "../../../../store/shopping-cart/shopping"
import { useSelector, useDispatch } from "react-redux"

export default function Score() {
  const score = useSignal(0)
  const dispatch = useDispatch()
  const scoreLocal = useSelector((state) => state.shopping.score) // configureStore里面的key
  const totalScoreLocal = useSelector((state) => state.shopping.totalScore) // configureStore里面的key

  useSignals()

  return (
    <div>
      <h4>Score: {scoreLocal} </h4>
      <h4>Total Score: {totalScoreLocal} </h4>
      <br />
      <input
        type="number"
        onChange={(e) => (score.value = e.target.value)}
      />{" "}
      <br />
      <br />
      <button
        onClick={() => dispatch(shoppingSliceAction.submitScore(score.value))}
      >
        Submit
      </button>{" "}
      <br />
      <button
        onClick={() => dispatch(shoppingSliceAction.calTotalScore(scoreLocal))}
      >
        Calculate Total Score
      </button>
      <br />
      <button onClick={() => dispatch(shoppingSliceAction.resetScore())}>
        Reset Score
      </button>
      <br />
      <button onClick={() => dispatch(shoppingSliceAction.resetAll())}>
        Reset All
      </button>
    </div>
  )
}
