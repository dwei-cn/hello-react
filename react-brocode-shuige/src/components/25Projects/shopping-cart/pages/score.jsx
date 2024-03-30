import React from "react"
import { signal, useSignal, useSignalEffect } from "@preact/signals-react"
import { useSignals } from "@preact/signals-react/runtime"

import { userSliceAction } from "../../../../store/shopping-cart/user"
import { useSelector, useDispatch } from "react-redux"

export default function Score() {
  const score = useSignal(0)
  const dispatch = useDispatch()
  const scoreLocal = useSelector((state) => state.user.score) // configureStore里面的key
  const totalScoreLocal = useSelector((state) => state.user.totalScore) // configureStore里面的key

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
        onClick={() => dispatch(userSliceAction.submitScore(score.value))}
      >
        Submit
      </button>{" "}
      <br />
      <button
        onClick={() => dispatch(userSliceAction.calTotalScore(scoreLocal))}
      >
        Calculate Total Score
      </button>
      <br />
      <button onClick={() => dispatch(userSliceAction.resetScore())}>
        Reset Score
      </button>
      <br />
      <button onClick={() => dispatch(userSliceAction.resetAll())}>
        Reset All
      </button>
    </div>
  )
}
