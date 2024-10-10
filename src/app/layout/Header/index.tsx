"use client";
import { Badge, Container, Grid2, IconButton } from "@mui/material";

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useShoppingCart } from "@/app/shopping-cart/useShoppingCart";

export default function Header() {
    const products = useShoppingCart((state) => state.products)

    return (
        <Container sx={{
            margin: 0,
            height: '10vh',
            display: "flex",
            alignItems: "center",
            width: "100vw",
            justifyContent: "flex-end",
            backgroundColor: "#fff",
            boxShadow: "1px 1px 7px 0px #656565;"
        }}>
            <Grid2>
            <IconButton color="primary" aria-label="add to shopping cart">
                <Badge badgeContent={products.length} color="primary">
                    <AddShoppingCartIcon />
                </Badge>
            </IconButton>
            </Grid2>
        </Container>
    )
}