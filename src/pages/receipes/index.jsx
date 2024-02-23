import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
export default function Receipes() {
  return (
    <Container sx={{ my: "2rem" }} max-width="sm">
      <TextField
        fullWidth
        id="outlined-basic"
        label="Enter a keyword to search receipes and hit Enter"
        variant="outlined"
      />

      <Grid sx={{ mt: "1rem" }} container spacing={3}>
        <Grid item xs={4}>
          <Card>
            <CardMedia
              sx={{ height: 140 }}
              image="https://media.istockphoto.com/id/1462751830/photo/stewed-cod.jpg?s=1024x1024&w=is&k=20&c=4BFA7UeFG2yjrqbaRK9yQKx3M6OWC3dEuS4_MirblTU="
            />
          </Card>
          <CardContent>
            <Typography variant="h5">Receipe Name</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Container>
  );
}
