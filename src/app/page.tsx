"use client";
import { container } from "../../inversify.config";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { IListProductsGateway, listProductsGatewayDI, ProductResponse } from "@/domain/gateways/products/ListProductsGateway";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {  Button, CardActionArea, CardActions, CardMedia, Container, Grid2, IconButton, Typography } from "@mui/material";
function RenderCard(props: ProductResponse) {
  return (
    <Card sx={{ maxWidth: "100%", minHeight: "20rem" }}>
      <CardActionArea sx={{
          // maxHeight: "20rem",
          minHeight: "20rem",
        }}>
        <CardMedia
          component="img"
          sx={{
            objectFit: "contain",
            maxHeight: "8rem",
          }}
          image={props.image}
          alt={props.title}
        />
        <CardContent>
          <Typography 
          sx={{ 
            color: 'text.secondary', 
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: '2',
            WebkitBoxOrient: 'vertical', 
          }} 
          variant="h5" 
          component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" 
            sx={{
            color: 'text.secondary',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: '3',
            WebkitBoxOrient: 'vertical', }}>
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
        <Button variant="contained" aria-label="add to Cart">
          Add to shopping cart
        </Button>
      </CardActions>
    </Card>
  );
}

export default function Home() {
  const gateway = container.get<IListProductsGateway>(listProductsGatewayDI)
  const productsOptions = queryOptions({
      queryKey: ['products'],
      queryFn: async () => {
          const response = gateway.getProducts()

          return response
      },
  })

  const products = useSuspenseQuery(productsOptions)

  return (
    <Container sx={{
      marginTop: 3,
    }}>
      <Grid2 container spacing={2}>
        {products.data.map(item => (<Grid2 size={4} key={item.id}> {RenderCard(item)} </Grid2>))}
      </Grid2>
    </Container>
  )
}
