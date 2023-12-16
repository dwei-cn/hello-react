import React, { Fragment, useState } from 'react';


const Card1 = () => {

    const ItemImage = "https://www.overclockers.co.uk/blog/wp-content/uploads/2023/05/Pokemon-TCG-Live-Blog-Feature.png"
    
    let [ItemTitle, setItemTitle] = useState("精灵Pokemon")  

    const ItemDescription = "Pokemon Go三周年了!"
    const ItemLink = "https://tcg.pokemon.com/en-us/tcgl/"

    const btn_click = (event) => {
        console.log('btn_click', Math.random())
        setItemTitle("可爱Pokemon")   // 更新状态之后的值
    }
     
    return (
        <Fragment>
            <div className='d-flex justify-content-center'>
                <div className='card m-3' style={{"width": "18rem"}}>
                    <img src={ItemImage} className='card-img-top' alt = '' />
                        <div className='card-body text-center'>
                            <h5 className='card-title'>{ItemTitle}</h5>
                            <p className='card-text'>{ItemDescription}</p>
                            <div className='d-flex justify-content-center align-items-center'>
                                <a href={ItemLink} className='btn btn-primary'>走，去看看！</a>
                            </div>
                            <hr />
                                <div className='d-flex justify-content-center align-items-center'>
                                    <button onClick={btn_click} className='btn btn-success'>点击</button>
                                </div>
                        </div>
                </div>

            </div>
        </Fragment>

    )
}

export default Card1;