import { useEffect, useState } from "react";
import { TextField, Grid, Button } from "@material-ui/core";
import "../styles/TitleBotForm.css";
const axios = require("axios");

const TitleBotForm = ({ numSearched, setNumSearched }) => {
  const [websiteURL, setWebsiteURL] = useState("");
  const [websiteTitle, setWebsiteTitle] = useState("");
  const [websiteFavicon, setWebsiteFavicon] = useState("");

  // Save previous searches in localStorage
  const saveSearched = (date, url, title) => {
    if (localStorage.getItem("searched")) {
      let storage = JSON.parse(localStorage.getItem("searched"));
      storage.push([date, url, title]);
      localStorage.setItem("searched", JSON.stringify(storage));
    } else {
      localStorage.setItem("searched", JSON.stringify([[date, url, title]]));
    }
    setNumSearched(numSearched + 1);
  };

  // Handles submission of form.
  const handleSubmit = (e) => {
    e.preventDefault();

    // Post request is made to the backend
    axios
      .post("http://localhost:5001/title", { website: websiteURL })
      .then((response) => {
        let favicon = response.data["favicon"];
        let title = response.data["title"];
        let url = response.data["url"];
        let date = response.data["date"];
        setWebsiteTitle(title);
        setWebsiteFavicon(favicon);
        saveSearched(date, url, title);
      });
  };

  // Handles change in input text
  const handleText = (e) => {
    setWebsiteURL(e.target.value);
  };

  return (
    <form id="TitleBotForm" onSubmit={handleSubmit}>
      <Grid id="CurrentResult" container>
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

        <Grid id="FormResult" container>
          <Grid item xs={1}>
            <img src={websiteFavicon} height="30px"></img>
          </Grid>
          <Grid id="WebsiteTitle" item xs={6}>
            {websiteTitle}
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default TitleBotForm;
