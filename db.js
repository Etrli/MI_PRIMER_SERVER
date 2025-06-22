import { error } from "console";
import sequelize from "./src/config/database.js";

const initDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("tamos conectaos");
    await sequelize.sync();

  } catch (Error) {"Ta mal",Error}
};

export default initDB
