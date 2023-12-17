import React, {useState} from 'react';


const Todolist = () => {

    const [newItem, setNewItem] = useState("")    
    const [items, setItems] = useState([])     // 注意 setItems 是一个函数，要传入state变化后新的值， items则是每次user输入的值

    const addItem = () => {

        // 更新array，然后往setItems中传入新的item array


        //console.log(newItem)
        if (!newItem) {
            alert("Please enter a task")
            return
        }

        // 添加的是带有id的object，而不只是value
        const newItemObject = {
            id: Math.floor(Math.random() * 10000),
            value: newItem
        }

        //setItems(items.concat(newItemObject))
        setItems(oldList => [...oldList, newItemObject])   // 传入更新updated items array, 作用和上面concat几乎一回事
        setNewItem("")  // 每次click之后自动还原setNewItem为空

        console.log(items)
         
    }

    const deleteItem = (id) => {
        const newArray = items.filter(item => item.id!== id)   // filter掉掉id为id的元素
        setItems(newArray)   // 也是传入更新updated items array
    }


    return (
        <div>
            <input 
                type="text" 
                value={newItem}  
                placeholder="Add a task" 
                onChange = {e=>setNewItem(e.target.value)} // 没有onchange你是输入不了的，传入当前输入的value
            />

            <button onClick={addItem}> Add a task </button>  

            <ul>
                 {items.map((item) =>{
                    return (
                        <li key={item.id}>
                            
                            {item.value}

                            <button onClick={()=>deleteItem(item.id)}>❌</button>

                        </li> 
                    )
                    
                 })}
            </ul>


        </div>

    )


}

export default Todolist;
