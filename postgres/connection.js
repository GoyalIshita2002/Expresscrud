import { Sequelize } from "sequelize";
import { UserModel } from "../Model/user.js";

let user = null;
const connection = async ()=>{
    const sequelize = new Sequelize('crudpractice', 'johndoe', 'randompassword', {
        host: 'localhost',
        dialect: 'postgres' 
      });

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


