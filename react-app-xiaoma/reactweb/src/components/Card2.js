import React, { Fragment } from 'react';

const Card2 = (props) => {

    // const ItemImage = "https://www.overclockers.co.uk/blog/wp-content/uploads/2023/05/Pokemon-TCG-Live-Blog-Feature.png"
    // const ItemTitle = "Pokemon TCG Live Blog Feature"
    // const ItemDescription = "This is a live blog feature for the Pokemon TCG."
    // const ItemLink = "https://tcg.pokemon.com/en-us/tcgl/"


    return (
        <Fragment>
            <div className='d-flex justify-content-center'>
                <div className='card m-3' style={{"width": "18rem"}}>
                    <img src={props.ItemImage} className='card-img-top' alt = '' />
                        <div className='card-body'>
                            <h5 className='card-title'>{props.ItemTitle}</h5>
                            <p className='card-text'>{props.ItemDescription}.</p>
                            <div className='d-flex justify-content-center align-items-center'>
                                <a href={props.ItemLink} className='btn btn-primary'>走，去看看！</a>
                            </div>
                        </div>
                </div>

            </div>
        </Fragment>

    )
}

export default Card2;