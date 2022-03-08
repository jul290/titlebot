import { TextField, Grid, Button } from "@material-ui/core";
import "../styles/TitleBotForm.css";
const TitleBotForm = () => {
  return (
    <form class="TitleBotForm">
      <Grid container>
        <Grid item xs={10}>
          <TextField
            id="outlined-basic"
            label="Website URL"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={2}>
          <Button id="GrabButton" variant="contained">
            Grab
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default TitleBotForm;
