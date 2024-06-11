import {DataTypes ,Sequelize } from "sequelize";

const UserModel = async(sequelize)=>{
    const User = sequelize.define(
        'User',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            Name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
            email: {
            type: DataTypes.STRING,
            unique: true,
          },
          password: {
            type: DataTypes.STRING,
          },
        },
      );
      return User;
      }
    export{
      UserModel
    }