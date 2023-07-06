const express = require("express");
const app = express();
const port = 3000;

app.get("/api/main", (req, res) => {
  const response = {
    message:
      "Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application. It's a layer built on the top of the Node js that helps manage servers and routes.",
    features: ["Routing", "Middleware", "Error Handling"],
    website: "https://expressjs.com/",
  };
  res.json(response);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
