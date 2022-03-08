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
const parseTitle = (body) => {
  let match = body.match(/<title>([^<]*)<\/title>/);
  if (!match || typeof match[1] !== "string") return "Title Not Found";
  //   throw new Error("Unable to parse the title tag");

  return match[1];
};

app.post("/title", (req, res) => {
  console.log(req.body["website"]);
  fetch(req.body["website"])
    .then((res) => res.text())
    .then((body) => parseTitle(body))
    .then((title) =>
      res.send({ title: title, favicon: `${req.body["website"]}/favicon.ico` })
    );
});

app.get("/favicon", (req, res) => {});
