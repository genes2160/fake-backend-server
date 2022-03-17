const express = require("express");
const path = require("path");
const config = require("dotenv");
const cors = require("cors");
const compression = require("compression");
const colors = require("colors");
const app = express();
const morgan = require("morgan");
const halmet = require("helmet");

// custom module import
// const connectDB = require("./config/db");
const error = require("./middleware/error.middleware");
const { responses } = require("./utility/response.js");

app.use(compression());
app.use(express.json());
app.use(
  halmet({
    contentSecurityPolicy: false,
    frameguard: true,
  })
);

//Load envirnoment variable
config.config({ path: "./.env" });

// Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// enable cors
app.use(cors());

// Ping app for testing connection
app.get("/api/*", (req, res) => {
  res.status(200).send(
    responses(
      200,
      {
        data: [],
        events: [],
        id: "324245345453454",
        image: `./assets/image/noimage`,
        tracks: [],
        message: ``,
      },
      true
    )
  );
});

// Ping app for testing connection
app.post("/api/*", (req, res) => {
  res.status(200).send(
    responses(
      200,
      {
        data: [],
        events: [],
        id: "324245345453454",
        image: `./assets/image/noimage`,
        tracks: [],
        message: ``,
      },
      true
    )
  );
});

// Ping app for testing connection
app.put("/api/*", (req, res) => {
  res.status(200).send(
    responses(
      200,
      {
        data: [],
        events: [],
        id: "324245345453454",
        image: `./assets/image/noimage`,
        tracks: [],
        message: ``,
      },
      true
    )
  );
});

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

// Connect to database
// connectDB();

app.use(error);

const port = process.env.PORT || 7000;
const server = app.listen(port, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port http://localhost:${port}`
      .yellow
  );
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
});
