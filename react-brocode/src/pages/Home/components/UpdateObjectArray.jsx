import { useEffect, useState } from "react"

export default function UpdateObjectArray() {
  const [car, setCar] = useState({ year: 2024, make: "BMW", model: "M2" })
  const [foods, setFoods] = useState(["🍔", "🍌", "☕️", "🍡"])
  const [newFood, setNewFood] = useState("")

  const [cars, setCars] = useState([
    { year: new Date().getFullYear(), make: "BMW", model: "M2" },
  ])
  const [prevCars, setPrevCars] = useState(cars)
  const [carYear, setCarYear] = useState("")
  const [carMake, setCarMake] = useState("")
  const [carModel, setCarModel] = useState("")

  // const [carsLen, setCarsLen] = useState(cars.length())

  //更新prev Car 这个object其中的value为新的event的target.value
  const handleYear = (e) => {
    setCar((car) => ({ ...car, year: e.target.value })) // 注意curly brace外面再加个bracket
  }

  const handleMake = (e) => {
    setCar((car) => ({ ...car, make: e.target.value }))
  }

  const handleModel = (e) => {
    setCar((car) => ({ ...car, model: e.target.value })) // 添加新item为{}
  }

  const handleYear2 = (e) => {
    setCarYear(e.target.value)
  }

  const handleMake2 = (e) => {
    setCarMake(e.target.value.toUpperCase())
  }

  const handleModel2 = (e) => {
    setCarModel(e.target.value.toUpperCase())
  }

  const handleAddCar = () => {
    setPrevCars(cars) // 提前保存下cars，在cars产生变化之前
    const newCar = { year: carYear, make: carMake, model: carModel }
    setCars((cars) => [...cars, newCar]) // add a new item to array
    setCarYear("")
    setCarMake("")
    setCarModel("")
  }

  const handleRemoveCar = (index) => {
    setPrevCars(cars)
    setCars(cars.filter((_, i) => i !== index))
  }

  const resetCar2 = () => {
    setPrevCars(cars)
    setCars([{ year: 2024, make: "BMW", model: "M2" }])
  }

  useEffect(() => {
    if (cars.length > prevCars.length) {
      window.alert(
        `Cars have increased! Pre cars: ${prevCars.length} Current cars: ${cars.length}`
      )
    } else if (cars.length < prevCars.length) {
      window.alert(
        `Cars have decreased! Pre cars: ${prevCars.length} Current cars: ${cars.length}`
      )
    }
  }, [cars, prevCars])

  // const handleFood1 = () => {
  //   if (foods.includes(newFood)) {
  //     window.alert("Food already exists!");
  //   } else {
  //     setFoods((foods) => [...foods, newFood]); // 添加新item为[]
  //   }

  //   setNewFood("");
  // };

  const handleFood2 = () => {
    const newFood2 = document.getElementById("foodInput").value
    document.getElementById("foodInput").value = ""

    if (foods.includes(newFood2)) {
      window.alert("Food already exists!")
    } else {
      setFoods([...foods, newFood2]) // 添加新item为[]
    }
  }

  const resetCar = () => {
    setCar((car) => ({ ...car, year: 2024, make: "BMW", model: "M2" }))
  }

  const resetFood = () => {
    setFoods(["🍔", "🍌", "☕️", "🍡"])
    setNewFood("")
  }

  const handleRemoveFood = (index) => {
    console.log(index)
    setFoods(foods.filter((_, i) => i !== index)) // filter，结果是不等于index的item
  }

  return (
    <div>
      <h4>Favorite Car 1 (useState)</h4>
      <p>
        My favorite car is {car.year} {car.make} {car.model}.
      </p>
      {/* value就是实时值 */}
      <input value={car.year} type={"number"} onChange={handleYear}></input>
      <br />
      <input value={car.make} type={"text"} onChange={handleMake}></input>
      <br />
      <input value={car.model} type={"text"} onChange={handleModel}></input>
      <br />
      <button onClick={resetCar}>Reset</button>
      <br />

      <h4>Favorite Car 2</h4>
      <ul>
        {cars.map(
          (
            car,
            index // {}的话就需要return
          ) => (
            <li key={index} onDoubleClick={() => handleRemoveCar(index)}>
              {car.year} {car.make} {car.model}
            </li>
          )
        )}
      </ul>
      <input placeholder="year" value={carYear} onChange={handleYear2}></input>
      <br />
      <input placeholder="make" value={carMake} onChange={handleMake2}></input>
      <br />
      <input
        placeholder="model"
        value={carModel}
        onChange={handleModel2}
      ></input>
      <br />
      <button onClick={handleAddCar}>Add a car</button>
      <button onClick={resetCar2}>Reset</button>

      <h4>Favorite Foods</h4>
      <ul>
        {foods.map((food, index) => (
          // array map直接就产生了index
          // 如果event不用的话就不需要传入
          // index是可以直接用的
          <li key={index} onDoubleClick={() => handleRemoveFood(index)}>
            {food}
          </li>
        ))}
      </ul>
      <input //最原始的状态，通过document.getElementById取值，不在意onchange和value
        type="text"
        // value={newFood}
        // onChange={(e) => setNewFood(e.target.value)}
        id="foodInput"
        placeholder="Enter a foodie"
      />
      <br />
      <button onClick={handleFood2}>Add food</button>
      <button onClick={resetFood}>Reset</button>
    </div>
  )
}
