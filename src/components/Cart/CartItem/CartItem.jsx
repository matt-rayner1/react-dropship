import React from 'react'
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core'
import useStyles from './styles'

const CartItem = ({ item, handleUpdateCartQty, handleRemoveFromCart }) => {
    const classes = useStyles();

    return (
        <Card>
            <CardMedia className={classes.media} image={item.image} alt={item.title} title={item.title} />
            <CardContent className={classes.cardContent}>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="h5">£{(item.price * item.quantity).toFixed(2)}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <div className={classes.buttons}>
                    <Button type="button" size="small" onClick={() => handleUpdateCartQty(item, item.quantity-1)}>-</Button>
                    <Button type="button" size="small">{item.quantity}</Button>
                    <Button type="button" size="small" onClick={() => handleUpdateCartQty(item, item.quantity+1)}>+</Button>
                </div>
                <Button variant="contained" type="button" color="secondary" onClick={() => handleRemoveFromCart(item)}>Remove</Button>
            </CardActions>
        </Card>
    )
}
export default CartItem
