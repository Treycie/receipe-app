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
import empty from '../../assets/images/empty.svg'

export default function Receipes() {
  const [receipes, setReceipes] = useState([]);
  const [keyword, setKeyword] = useState("");
  const getReceipes = () => {
    // prepare URL
    const url = new URL("https://api.spoonacular.com/recipes/complexSearch");
    url.searchParams.append(
      "apiKey",
      process.env.REACT_APP_SPOONACULAR_API_KEY
    );
    url.searchParams.append('query', keyword);
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
  useEffect(getReceipes, [keyword]);

  return (
    <Container sx={{ my: "2rem" }}>
      <TextField
        fullWidth
        id="outlined-basic"
        label="Enter a keyword to search receipes and hit Enter"
        variant="outlined"
        onKeyDown={(event) => event.key ==='Enter' &
      setKeyword(event.target.value)}/>

      <Grid sx={{ mt: "1rem" }} container spacing={3}>
       {receipes.length > 0 ? receipes.map((receipe) => (
          <Grid key={receipe.id} item item xs={4}>
            <Card sx={{ maxWidth: 345, height: "100%" }}>
              <CardActionArea sx={{ height: "100%" }}>
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
          </Grid>)) : <img src={empty} />}
      </Grid>
    </Container>
  );
}
