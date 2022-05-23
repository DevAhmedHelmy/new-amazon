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
const productRoutes = require("./routes/product");
const categoryRoutes = require("./routes/category");
const authRotues = require("./routes/auth");


app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/auth", authRotues);
 

const PORT = process.env.PORT || 3000;
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("hello");
  }
});
