"use client";
import { container } from "../../inversify.config";
import { useQuery } from "@tanstack/react-query";
import { Container, Grid2, Skeleton } from "@mui/material";
import { ListProducts, listProductsUseCaseDI } from "@/domain/useCases/products/ListProducts";
import { ProductCard } from "./products/ProductCard";


export default function Home() {
  const useCase = container.get<ListProducts>(listProductsUseCaseDI)
  const products = useQuery({
      queryKey: ['products'],
      initialData: [],
      queryFn: async () => {
          const response = await useCase.getProducts()

          if(response.isFailure) return []

          return response.getValue().products
      },
  })

  const productList = () => products.data.map(item => (
    <Grid2 size={4} key={item.id}> 
    {
      ProductCard({
        description: item.description,
        image: item.image,
        title: item.title,
      })
   }
   </Grid2>
  ))

  const loadingList = () => [...Array.from({ length: 9 })].map((_, index) => (
    <Grid2 size={4} key={index}>
      <Skeleton  key={index} variant="rectangular" width="100%" height="20rem" />
    </Grid2>
  ))

  return (
    <Container sx={{
      marginTop: 3,
      marginBottom: 3,
    }}>
      <Grid2 container spacing={2}>
        {(products.isFetching ? loadingList() : productList()) }
      </Grid2>
    </Container>
  )
}
