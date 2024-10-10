import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";

type Props = {
  image: string
  title: string
  description: string
  onClick: () => void
}

export function ProductCard(props: Props) {
    return (
      <Card sx={{ maxWidth: "100%", minHeight: "20rem" }}>
        <CardActionArea sx={{
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
          <Button onClick={props.onClick} variant="contained" aria-label="add to Cart">
            Add to shopping cart
          </Button>
        </CardActions>
      </Card>
    );
}