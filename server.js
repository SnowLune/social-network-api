const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://127.0.0.1:27017/", 
   {
      useNewUrlParser: true,
      useUnifiedTopology: true
   })
   .then(console.log("Connected MongoDB..."))
   .catch((error) => { console.log(error) } )

mongoose.set("debug", true);

app.use(require("./routes"));

app.listen(PORT, () => {
   console.log(`Now listening on port ${PORT}.`);
})
