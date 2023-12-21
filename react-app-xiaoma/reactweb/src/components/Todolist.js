// https://www.youtube.com/watch?v=-l0FEONO-cM
// https://www.youtube.com/watch?v=TmDNBEdHzVs

import React, { useState, useRef, useEffect, Fragment } from 'react';


const Todolist = () => {

    const [newItem, setNewItem] = useState("")
    const [itemsArray, setitemsArray] = useState([])     // 注意 setItems 是一个函数，要传入state变化后新的值， items则是每次user输入的值

    const [newEditItem, setNewEditItem] = useState("")
    const [editItemID, setEditItemID] = useState(0)
    const [editStatus, setEditStatus] = useState(false)
    const [StyleFLG, setStyleFLG] = useState(true)

    const editInputRef = useRef(null);

    const addItem = () => {

        // 所谓的添加item，其实是更新array，然后往setItems中传入新的item array
        console.log(newItem)
        if (!newItem) {
            alert("Please enter a task")
            return
        }

        // 添加的是带有id的object，而不只是value

        let newID    // 生成一个随机的id，且不能重复
        do {
            newID = Math.floor(Math.random() * 10000);
        } while (newID <= 0);   // 如果newID小于0或者已经存在于了item.id则重新生成

        const newItemObject = {

            id: newID,
            value: newItem
        }

        //setItems(items.concat(newItemObject))
        setitemsArray(oldList => [...oldList, newItemObject])   // 加入newItemObject，并且传入更新updated items array, 作用和上面concat几乎一回事
        // itemsArray.push(newItemObject)
        // setitemsArray([...itemsArray]) 
        setNewItem("")  // 每次click之后自动还原setNewItem为空

        console.log(itemsArray)

    }

    const deleteItem = (id) => {
        const newArray = itemsArray.filter(item => item.id !== id)   // filter掉掉id为id的元素
        setitemsArray(newArray)   // 也是传入更新updated items array
        setEditStatus(false)
    }

    const openInputBox = (item) => {
        // Your edit button logic
        // Set focus to the edit input
        // 并且更新当前的edititem的id为click的item的id

        editInputRef.current?.focus(); // 在这个例子中，editInputRef.current 可能为 null 或 undefined，因此使用 ?. 可以确保在 editInputRef.current 不为 null 或 undefined 的情况下调用 focus 方法，而不会引发错误。如果直接使用 editInputRef.current.focus()，并且 editInputRef.current 为 null 或 undefined，就会导致运行时错误，通过 editInputRef.current?.focus() 确保一定不会出现空指针异常，这个时候useEffect就会产生作用，使得editInputRef.current.focus()开始生效

        console.log(item.id)
        setEditStatus(true)
        setEditItemID(item.id)
        setNewEditItem(item.value)



        setStyleFLG(!StyleFLG)
    };

    const editItem = (id) => {
        const editArray = itemsArray.map(item => {

            if (item.id === id) {
                return { ...item, value: newEditItem }  // 更新item的值
            }

            else {
                return item
            }
        })

        setitemsArray(editArray)
        setNewEditItem("")
        setEditStatus(false)
        setStyleFLG(!StyleFLG)

        console.log(itemsArray)
    }

    const resetArray = () => {
        setitemsArray([])
        setEditStatus(false)    // 直接reset Items array

    }

    const statusLight = StyleFLG ? '😇' : '🤢'

    // 将 editInputRef.current.focus() 放在 useEffect 中是为了确保在 React 完成渲染并且 DOM 元素准备就绪后再执行设置焦点的操作。
    useEffect(() => {    // 任何editStatus以及editInputRef.current不为null同时满足的时候执行editInputRef.current.focus()，将焦点设置到编辑输入框上。
        if (editStatus && editInputRef.current) {
            editInputRef.current.focus();
            //console.log("editInputRef: ", editInputRef.current.value)  // 可以看到editInputRef.current现在的状态，应该就是input box的元素
        }
    }, [editStatus]);   // 就是指定监听editStatus，也就是一旦editStatus状态发生变化，useEffect就会发挥作用



    return (
        <div>
            <p className={StyleFLG ? 'text-light bg-info' : 'text-secondary bg-warning'}>
                动画特效区域 当前状态: {statusLight}
            </p>
            <input
                className = 'input'
                type="text"
                value={newItem}   // 当前输入值
                placeholder="Please enter a task"
                onChange={e => setNewItem(e.target.value)} // 没有onchange你是输入不了的，传入当前输入的value
            />

            <button className='add-update-btn' onClick={addItem}> Add a task </button>


            {/*只有在编辑状态下, 也就是当前editStatus不为false才会出现input box*/}
            {editStatus !== false && (
                <div>
                    <div className='mt-2' />
                    <input
                        className='input'
                        type="text"
                        value={newEditItem}
                        placeholder='Edit a task'
                        onChange={e => setNewEditItem(e.target.value)}
                        ref={editInputRef}
                    />
                    <button className = 'add-update-btn' onClick={() => editItem(editItemID)}> Complete! </button>
                </div>
            )}

            <div className='mt-3' />
            <ul>
                {itemsArray.map((item) => {
                    return (
                        <li className='li' key={item.id}>

                            {item.value}

                            <button className='edit-button' onClick={() => openInputBox(item)}>✏</button>  {/* 光标跳转到input box，且传入id */}
                            <button className='delete-button' onClick={() => deleteItem(item.id)}>❌</button>
                            <button className='complete-button' onClick={() => deleteItem(item.id)}>✔</button>

                        </li>
                    )

                })}
            </ul>

            {itemsArray.length !== 0 && (  // 只有当itemsArray有东西的时候才会出现
                <div>
                    < button className='add-update-btn' onClick={resetArray}> 一键清空！🚀 </button>
                </div>
            )}

        </div >

    )


}

export default Todolist;
