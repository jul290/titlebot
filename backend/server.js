const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:5001",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

const app = express();

app.use(cors());

// middleware function allows server to parse json
app.use(express.json());

const PORT = 5001 || process.env.PORT;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Given body of text, function will get the title
// const parseTitle = (body) => {
//   let match = body.match(/<title>([^<]*)<\/title>/);
//   if (!match || typeof match[1] !== "string") return "Title Not Found";
//   //   throw new Error("Unable to parse the title tag");

//   return match[1];
// };

const parseTitle = (body) => {
  const jsdom = require("jsdom");
  const dom = new jsdom.JSDOM(body);
  //   console.log(dom.window.document.querySelector("title").textContent);
  return dom.window.document.querySelector("title")
    ? dom.window.document.querySelector("title").textContent
    : "Title Not Found";
  //   c; // 'Hello world'
};

// Adds http protocol if it was not originally inputted
const addHttpProtocol = (url) => {
  if (url.substring(0, 4) != "http") {
    url = `http://${url}`;
  }
  return url;
};

app.post("/title", (req, res) => {
  let url = req.body["website"];
  url = addHttpProtocol(url);

  let googleAPI = "https://www.google.com/s2/favicons?sz=64&domain_url=";

  fetch(url)
    .then((res) => res.text())
    .then((body) => parseTitle(body))
    .then((title) =>
      res.send({
        title: title,
        favicon: `${googleAPI}${url}`,
      })
    );
});

app.get("/favicon", (req, res) => {});
