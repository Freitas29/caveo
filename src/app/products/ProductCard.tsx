import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, IconButton } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

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
          <IconButton color="primary" onClick={props.onClick} aria-label="add to Cart">
            <AddShoppingCartIcon />
          </IconButton>
        </CardActions>
      </Card>
    );
}