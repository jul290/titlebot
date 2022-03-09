const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");
const moment = require("moment");

const app = express();

app.use(cors());

// middleware function allows server to parse json
app.use(express.json());

const PORT = 5001 || process.env.PORT;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Given body of text, function will get the title, most intensive
const parseTitle = (body) => {
  const jsdom = require("jsdom");
  const dom = new jsdom.JSDOM(body);
  //   console.log(dom.window.document.querySelector("title").textContent);
  return dom.window.document.querySelector("title")
    ? dom.window.document.querySelector("title").textContent
    : "Title Not Found";
};

// Adds http protocol if it was not originally inputted
const addHttpProtocol = (url) => {
  if (url.substring(0, 4) != "http") {
    url = `http://${url}`;
  }
  return url;
};

// Post Request
app.post("/title", (req, res) => {
  let url = req.body["website"];
  console.log(url);
  url = addHttpProtocol(url);

  let googleAPI = "https://www.google.com/s2/favicons?sz=64&domain_url=";

  fetch(url)
    .then((res) => res.text())
    .then((body) => parseTitle(body))
    .then((title) =>
      res.send({
        url: url,
        date: moment().format(),
        title: title,
        favicon: `${googleAPI}${url}`,
      })
    );
});
