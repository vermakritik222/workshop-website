const express = require("express");
const path = require("path");

const app = express();

// JSON Parser
app.use(express.json());

// Cookie Parser
// app.use(cookieParser());

// Serving static files
app.use(express.static(`${__dirname}/public`));

// Middleware
// app.use(universalMiddleware.sendTimeStamp);

// Routes

// app.use('/api/v1/vender', venderRouter);
// app.use('/api/v1/auth', authRouter);
// app.use('/api/v1/oder', oderRouter);
// app.use('/api/v1/restaurants', productRouter);

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/view/index.html"));
});

app.get("/about", function (req, res) {
  res.sendFile(path.join(__dirname, "/view/about.html"));
});

app.get("/service", function (req, res) {
  res.sendFile(path.join(__dirname, "/view/service.html"));
});

app.get("/price", function (req, res) {
  res.sendFile(path.join(__dirname, "/view/price.html"));
});

app.get("/location", function (req, res) {
  res.sendFile(path.join(__dirname, "/view/location.html"));
});

app.get("/contact", function (req, res) {
  res.sendFile(path.join(__dirname, "/view/contact.html"));
});

app.all("*", (req, res, next) => {
  console.log("page not found");
});

module.exports = app;
