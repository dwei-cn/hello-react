import React, { useEffect } from "react"
// import { Link } from "react-router-dom"
import { useSignals } from "@preact/signals-react/runtime"
import { shoppingSliceAction } from "../../../store/shopping-cart/shopping"

import { useSelector, useDispatch } from "react-redux"
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';

export default function ItemCardMUI({ item }) {

    const dispatch = useDispatch()
    const cartList = useSelector((state) => state.shopping.cart) // configureStore里面的key
    // const totalItemCountLocal = useSelector(
    //   (state) => state.shopping.totalItemCount
    // ) // configureStore里面的key
    // const totalPriceLocal = useSelector((state) => state.shopping.totalPrice) // configureStore里面的key

    const handleAddToCart = (item) => {
        dispatch(shoppingSliceAction.addToCart(item))
        // dispatch(shoppingSliceAction.countItems())
        // dispatch(shoppingSliceAction.calTotalItemPrice())
        // console.log(cartList, totalItemCountLocal, totalPriceLocal)
    }

    const handleRemoveFromCart = (item) => {
        dispatch(shoppingSliceAction.removeFromCart(item))
        // dispatch(shoppingSliceAction.countItems())
        // dispatch(shoppingSliceAction.calTotalItemPrice())
        // console.log(cartList, totalItemCountLocal, totalPriceLocal)
    }

    // useeffect里面也能dispatch
    useEffect(() => {
        dispatch(shoppingSliceAction.countItems())
        dispatch(shoppingSliceAction.calTotalItemPrice())
        // console.log(cartList, totalItemCountLocal, totalPriceLocal)
    }, [cartList])

    useSignals()

    return (
        <Card
            sx={
                {
                    width: 200,
                    background: "lightblue",
                    borderColor: "black"
                }}
        >
            <div>
                <AspectRatio minHeight="200px" maxHeight="300px">
                    <img
                        src={item.image}
                        // srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
                        loading="lazy"
                        alt={item.title}
                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                    />
                </AspectRatio>
                <Typography level="body-xs">{item.category}</Typography>
                <Typography level="title-sm">{item.title}</Typography>
                {/* <IconButton
                    aria-label="bookmark Bahamas Islands"
                    variant="plain"
                    color="neutral"
                    size="sm"
                    sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
                >
                    <BookmarkAdd />
                </IconButton> */}
            </div>

            {/* <CardContent orientation="horizontal"> */}
            <CardContent orientation="vertical">
                <div>
                    <Typography level="body-md"> Price:{" "}
                        <Typography fontSize="lg" fontWeight="lg">
                            {item.price}
                        </Typography>
                    </Typography>

                </div>

                {cartList.some((cartItem) => cartItem.id === item.id) ? (
                    <Button
                        variant="solid"
                        size="md"
                        color="primary"
                        aria-label="Add to cart"
                        sx={{ mt: 'auto', alignSelf: 'flex', fontWeight: 600 }}
                        onClick={() => handleRemoveFromCart(item)}
                    >
                        Remove from Cart
                    </Button>

                ) : (
                    <Button
                        variant="solid"
                        size="md"
                        color="primary"
                        aria-label="Add to cart"
                        sx={{ mt: 'auto', alignSelf: 'flex', fontWeight: 600 }}
                        onClick={() => handleAddToCart(item)}
                    >
                        Add to Cart
                    </Button>
                )}


            </CardContent>
        </Card>
    );
}