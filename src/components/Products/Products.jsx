import React from 'react';
import { Grid , Typography, Container } from '@material-ui/core';

import Product from './Product/Product'
import useStyles from './styles'

const Products = ({ products, onAddToCart }) => {
    const classes = useStyles();

    const isEmpty = !products.length;

    const NoProducts = () => (
        <>
        <Typography align="center" variant="h3">
            Welcome to the shop! <br></br>
        </Typography>
        <Typography align="center" variant="subtitle1">
            Please choose a category from the navigation bar to get started.
        </Typography>
        </>
    )

    const HasProducts = () => (
        <main className={classes.content}>
            <Grid container justifyContent="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={14} sm={7} md={5} lg={4}>
                        <Product product={product} onAddToCart={onAddToCart} />
                    </Grid> 
                ))}
            </Grid>
        </main>
    )

    return (
        <Container>
            <div className={classes.toolbar} />
            { isEmpty? <NoProducts /> : <HasProducts /> }
        </Container>
    )
}

export default Products;