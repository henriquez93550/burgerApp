// Importing dependencies
const express = require("express");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");

// Importing files
const routes = require("./routes/handlers");

const PORT = process.env.PORT || 9001;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride("_method"));

// Configure Express Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Configure Routes
app.use("/", routes);

// starts the server
app.listen(PORT, () => {
    console.log(`Server is starting at PORT ${PORT}`);
});

