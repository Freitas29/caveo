"use client";
import { Badge, Box, Card, CardContent, CardMedia, Container, Grid2, IconButton, MenuItem, Typography } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Delete from "@mui/icons-material/Delete";
import Menu from '@mui/material/Menu';
import { useEffect, useState } from "react";
import { GetAllProductsInShoppingCartAdapter } from "@/application/shopping-cart/GetAllProductsInShoppingCartAdapter";
import { ProductsRepositoryZuntand } from "@/application/repository/ProductRepositoryZustand";
import { ProductOutputInShoppingCartOutput } from "@/domain/useCases/shopping-cart/GetAllProductsInShoppingCart";
import { useMemo } from "react";
import { useShoppingCart } from "@/app/shopping-cart/useShoppingCart";
import { RemoveProductInShoppingCartAdapter } from "@/application/shopping-cart/RemoveProductInShoppingCartAdapter";

function cardItem(props: ProductOutputInShoppingCartOutput, removeProduct: (id: number) => void) {
    return (
        <Card sx={{ display: 'flex', width: "100%" }} variant="elevation">
            <CardMedia
                component="img"
                sx={{ width: "80px", objectFit: "contain" }}
                image={props.imageUrl}
                alt={props.title}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography sx={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: '1',
                        maxWidth: "20ch",
                        WebkitBoxOrient: 'vertical',
                    }} component="div" variant="h5">
                        {props.title}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        component="div"
                        sx={{ color: 'text.secondary' }}
                    >
                        Preço
                    </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                    <IconButton onClick={() => removeProduct(props.id)} aria-label="next">
                        <Delete />
                    </IconButton>
                </Box>
            </Box>
        </Card>
    );
}

export default function Header() {
    const repo = useShoppingCart()
    const zuntandRepo = useMemo(() => new ProductsRepositoryZuntand(repo), [repo])
    const getAllProductsUseCase = useMemo(() => new GetAllProductsInShoppingCartAdapter(zuntandRepo), [zuntandRepo]);
    const removeProductUseCase = useMemo(() => new RemoveProductInShoppingCartAdapter(zuntandRepo), [zuntandRepo]);


   const [products, setProduct] = useState<ProductOutputInShoppingCartOutput[]>([])

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (event: unknown, reason: string) => {
        if(!reason) return
        setAnchorEl(null);
    };

    useEffect(() => {
        (async () => {
            const response = await getAllProductsUseCase.getAllProducts()
            setProduct(response.products)
        })();
    }, [getAllProductsUseCase])


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
                <Menu
                    variant="menu"
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    {products.map((product) => (
                        <MenuItem selected key={product.id} onClick={() => handleClose}>
                            {cardItem(product, (id: number) => removeProductUseCase.removeProduct(id))}
                        </MenuItem>
                    ))}
                </Menu>
                <IconButton
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    color="primary"
                    aria-label="add to shopping cart">
                    <Badge
                        badgeContent={products.length}
                        color="primary">
                        <AddShoppingCartIcon />
                    </Badge>
                </IconButton>
            </Grid2>
        </Container>
    )
}