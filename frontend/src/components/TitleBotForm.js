import { useState } from "react";
import { TextField, Grid, Button } from "@material-ui/core";
import "../styles/TitleBotForm.css";
const axios = require("axios");

const TitleBotForm = () => {
  //   const [grabbedDate, setGrabbedDate] = useState("Date");
  const [websiteURL, setWebsiteURL] = useState("");
  const [submittedWebsiteURL, setSubmittedWebsiteURL] = useState("");
  const [websiteTitle, setWebsiteTitle] = useState("");
  const [websiteFavicon, setWebsiteFavicon] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(websiteURL);
    axios
      .post("http://localhost:5001/title", { website: websiteURL })
      .then((response) => {
        setSubmittedWebsiteURL(websiteURL);
        setWebsiteTitle(response.data["title"]);
        setWebsiteFavicon(response.data["favicon"]);
      });
  };
  const handleText = (e) => {
    setWebsiteURL(e.target.value);
  };

  return (
    <form id="TitleBotForm" onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={10}>
          <TextField
            id="outlined-basic"
            label="Website URL"
            value={websiteURL}
            onChange={handleText}
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={2}>
          <Button id="GrabButton" variant="contained" type="submit">
            Grab
          </Button>
        </Grid>
        <Grid item xs={6}>
          {websiteTitle}
        </Grid>
        <Grid item xs={6}>
          <img src={websiteFavicon} height="30px"></img>
        </Grid>
      </Grid>
    </form>
  );
};

export default TitleBotForm;
