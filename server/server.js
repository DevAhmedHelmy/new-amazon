const express = require("express");
const cors = require("cors"); 
const app = express(); 

// let corOptions = { 
//   origin: "http://localhost:3000",
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// };
// app.use(cors(corOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());  


 // user routes and use them
const userRoutes = require("./routes/user");
app.use("/api/users", userRoutes);

 
 

const PORT = process.env.PORT || 3000;
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("hello");
  }
});
