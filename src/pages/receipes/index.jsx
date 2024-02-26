import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  TextField,
  Typography,
  CardActionArea,
} from "@mui/material";
import { useEffect, useState } from "react";

export default function Receipes() {
  const [receipes, setReceipes] = useState([]);
  const getReceipes = () => {
    // prepare URL
    const url = new URL("https://api.spoonacular.com/recipes/complexSearch");
    url.searchParams.append("apiKey", "42df0330e8074c8ab415d2b8fc98f505");
    // fetch receipes from API
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // update the receipes state
        setReceipes(data.results);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(getReceipes, []);

  return (
    <Container sx={{ my: "2rem" }}>
      <TextField
        fullWidth
        id="outlined-basic"
        label="Enter a keyword to search receipes and hit Enter"
        variant="outlined"
      />

      <Grid sx={{ mt: "1rem" }} container spacing={3}>
        {receipes.map(receipe => (<Grid key={receipe.id} item
           item xs={4}>
            <Card sx={{ maxWidth: 345,height:'100%' }}>
              <CardActionArea sx ={{height:'100%'}}>
                <CardMedia
                  component="img"
                  height="140"
                  image={receipe.image}
                  alt={receipe.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {receipe.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  ></Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
