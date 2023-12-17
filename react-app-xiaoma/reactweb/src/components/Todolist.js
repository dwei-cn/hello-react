import React, {useState} from 'react';


const Todolist = () => {

    const [newItem, setNewItem] = useState("")
    const [items, setItems] = useState([])

    const addItem = () => {
        //console.log(newItem)
        if (!newItem) {
            alert("Please enter a task")
            return
        }

        const item = {
            id: Math.floor(Math.random() * 10000),
            value: newItem
        }

        //setItems(items.concat(item))
        setItems(oldList => [...oldList, item])   // 传入updated items array, 作用和上面concat几乎一回事
        setNewItem("")

        console.log(items)
         
    }

    const deleteItem = (id) => {
        const newArray = items.filter(item => item.id!== id)
        setItems(newArray)
    }


    return (
        <div>
            <input 
                type="text" 
                value={newItem}  
                placeholder="Add a task" 
                onChange = {e=>setNewItem(e.target.value)} // 没有onchange你是输入不了的
            />

            <button onClick={addItem}> Add a task </button>

            <ul>
                {/* <li>Go to the gym</li>
                <li>hung out with kobe</li>
                <li>watch nba game</li> */}

                 {items.map((item) =>{
                    return <li key={item.id}>{item.value}<button onClick={()=>deleteItem(item.id)}>❌</button></li> 
                 })}
            </ul>


        </div>

    )


}

export default Todolist;
