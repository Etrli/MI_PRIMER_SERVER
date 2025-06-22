import express from "express";
import dotenv from "dotenv";
import router from "./src/routes/user.routes.js";
import initDB from "./db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use("/user", router);
initDB().then(() => {

  app.listen(PORT, () => {
    console.log(`Se esta ejecutando en el http://localhost:` + PORT);
  });

});
