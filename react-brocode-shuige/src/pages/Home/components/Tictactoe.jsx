import { useState } from "react"

export default function Tictactoe() {
  const [squares, setSquares] = useState(Array(9).fill("")) // 初始化空array
  const [nextMove, setNextMove] = useState("⭕")
  const [snapshot, setSnapshot] = useState([])
  const [gameon, setGameon] = useState(true)

  const handleClickBoard = (index) => {
    if (!gameon) {
      alert("We got a winner, game over!")
      return
    }

    const squaresCopy = squares.slice()
    if (squaresCopy[index] === "") {
      squaresCopy[index] = nextMove
      setSquares(squaresCopy)
      setNextMove(nextMove === "⭕" ? "❌" : "⭕")

      const winner = hasWinner(squaresCopy) // 必须给实时的数据，才能得到real-time value

      if (winner) {
        setGameon(false)
      }
      setSnapshot([...snapshot, squaresCopy])
    } else {
      alert("You can't change this square!")
    }
  }

  const handleStepsClick = (index) => {
    const squaresCopy2 = snapshot[index].slice()
    console.log(squaresCopy2)
    setSquares(squaresCopy2)
    setSnapshot(snapshot.slice(0, index + 1))

    // 根据index的奇偶性判断
    setNextMove(index % 2 === 0 ? "❌" : "⭕")
    setGameon(true)
  }

  // 判断胜利条件
  const hasWinner = (squares) => {
    // 先列举出全部的情况，然后进行遍历，取出squares里面所有的各个对应位置的值
    // 如果值都是一致且相同，说明存在winner
    const winCases = [
      // 横
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      // 竖
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      // 对角线
      [0, 4, 8],
      [2, 4, 6],
    ]
    // console.log(squares)
    for (let i = 0; i < winCases.length; i++) {
      const [a, b, c] = winCases[i]

      if (squares && (squares[a] === "⭕" || squares[a] === "❌")) {
        if (squares[a] === squares[b] && squares[a] === squares[c])
          return squares[a]
      }
    }
    return false
  }

  const handleReset = () => {
    setSquares(Array(9).fill(""))
    setNextMove("⭕")
    setSnapshot([])
    setGameon(true)
  }

  return (
    <div className="game">
      <div className="game-board">
        <h5>
          {!hasWinner(squares)
            ? `下一步由${nextMove}执棋`
            : `游戏结束，获胜者为 ${hasWinner(squares)} !`}
        </h5>
        <div className="row-1">
          {squares.slice(0, 3).map((value, index) => (
            <button
              key={index}
              className="square"
              onClick={() => handleClickBoard(index)}
            >
              {value}
            </button>
          ))}
        </div>
        <div className="row-2">
          {squares.slice(3, 6).map((value, index) => (
            <button
              key={index + 3}
              className="square"
              onClick={() => handleClickBoard(index + 3)}
            >
              {value}
            </button>
          ))}
        </div>
        <div className="row-3">
          {squares.slice(6, 10).map((value, index) => (
            <button
              key={index + 6}
              className="square"
              onClick={() => handleClickBoard(index + 6)}
            >
              {value}
            </button>
          ))}
        </div>
        <br />

        <button onClick={handleReset}>Reset</button>
      </div>

      <div className="game-steps">
        Steps
        <ol>
          <li key="001">
            <button onClick={() => handleReset()}>Game Start / Reset</button>
          </li>
          {snapshot.map((value, index) => (
            <li key={index}>
              <button onClick={() => handleStepsClick(index)}>
                Go to steps #{index}
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
