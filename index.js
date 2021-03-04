const express = require("express");
const app = express();

app.set("port", process.env.PORT || 8000);
app.use(express.urlencoded({ extended: false }));
app.listen(app.get("port"), () => {
  console.log("server on port", app.get("port"));
});
