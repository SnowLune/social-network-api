const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:5500/social-network", 
   {
      useNewUrlParser: true,
      useUnifiedTopology: true
   })
   .then(console.log("Connected MongoDB..."))

mongoose.set("debug", true);

app.use(require("./routes"));

app.listen(PORT, () => {
   console.log(`Now listening on port ${PORT}.`);
})
