import { Sequelize } from "sequelize";
import { UserModel } from "../Model/user.js";
import { configDotenv } from "dotenv";
let user = null;
const connection = async ()=>{
  let sequelize;

  if (process.env.DB_URL) {
    sequelize = new Sequelize(process.env.DB_URL);
  } else {
    sequelize = new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PW,
      {
        host: 'localhost',
        dialect: 'postgres',
      },
    );
  }

      try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        user = await UserModel(sequelize);
        await sequelize.sync();
        console.log("Model has been created successfully");
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

export{
    connection,
    user
}

