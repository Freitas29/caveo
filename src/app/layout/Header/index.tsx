import { Container, Grid2, IconButton } from "@mui/material";

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
export default function Header() {
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
                <AddShoppingCartIcon />
            </IconButton>
            </Grid2>
        </Container>
    )
}