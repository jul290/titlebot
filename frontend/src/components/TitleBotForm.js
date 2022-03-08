import { useState } from "react";
import { TextField, Grid, Button } from "@material-ui/core";
import "../styles/TitleBotForm.css";

const TitleBotForm = () => {
  const [websiteURL, setWebsiteURL] = useState("Website URL");
  const [websiteTitle, setWebsiteTitle] = useState("Website Title");

  const [websiteFavicon, setWebsiteFavicon] = useState("Website Favicon");
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
        <Grid item xs={4}>
          {websiteURL}
        </Grid>
        <Grid item xs={4}>
          {websiteTitle}
        </Grid>
        <Grid item xs={4}>
          {websiteFavicon}
        </Grid>
      </Grid>
    </form>
  );
};

export default TitleBotForm;
