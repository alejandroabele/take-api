const express = require("express");
const app = express();
const mongoose = require("mongoose");
const clientRoutes = require("./routes/client");
const memberRoutes = require("./routes/member");
const noteRoutes = require("./routes/note");
const { mongodbUri, port } = require("./config");
const swaggerUI = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerDocument = require("./docs/swagger.json");
// Routes
app.get("/", (req, res) => {
  res.send("Welcome to Take Home Api");
});

//Middleware
app.use(express.json());
app.use("/api", clientRoutes);
app.use("/api", memberRoutes);
app.use("/api", noteRoutes);
app.use(
  "/api-doc",
  swaggerUI.serve,
  swaggerUI.setup(swaggerJSDoc(swaggerDocument))
);

//Mongodb connection
mongoose
  .connect(mongodbUri)
  .then(() => console.log("Connected to Mongo DB "))
  .catch((err) => console.log(err));

//Listen port
app.listen(port, () => {
  console.log("Server listening on port", port);
});
