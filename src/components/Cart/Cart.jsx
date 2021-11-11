import React, { useEffect } from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import useStyles from './styles'
import CartItem from './CartItem/CartItem'

const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart, fetchCart}) => {
    const classes = useStyles();

    const isEmpty = !cart.length;

    useEffect(() => {
        fetchCart();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const EmptyCart = () => (
        <Typography variant="subtitle1">You have no items in your cart...  <br></br>
            <Link to="/" className={classes.link}>Start shopping!</Link>    
        </Typography>
    )

    //ADD SUBTOTAL
    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.map((item) => (
                    <Grid key={item.id} item xs={12} sm={4}>
                        <CartItem item={item} handleUpdateCartQty={handleUpdateCartQty} handleRemoveFromCart={handleRemoveFromCart}/>
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h4">
                    Subtotal: £{cart.map(item => item.price * item.quantity).reduce((acc, item) => item + acc).toFixed(2)}
                </Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty Cart</Button>
                    <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
                </div>
            </div>
        </>
    )

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
            { isEmpty? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}

export default Cart
