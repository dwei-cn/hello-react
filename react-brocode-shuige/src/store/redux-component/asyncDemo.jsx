import { mywebActions1 } from "./myweb1"

export const loadData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("https://swapi.dev/api/films", {
        method: "GET",
        headers: {
          "user-agent": "Mozilla/99.0 MDN Example",
          "content-type": "application/json",
        },
      })

      if (!response.ok) {
        throw new Error("HTTP Error!")
      }

      const data = await response.json()
      return data
    }

    try {
      dispatch(mywebActions1.setDatalist([]))
      const resultData = await fetchData()
      console.log(resultData.results)
      dispatch(mywebActions1.setDatalist(resultData.results))
    } catch (err) {
      console.error(err)
    }
  }
}
