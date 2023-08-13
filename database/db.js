import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const user = process.env.DB_USERNAME;
const pass = process.env.DB_PASSWORD;

const DBConnection = async() => {
    try {
        // console.log(user)
        const MONGODB_URI =`mongodb://${user}:${pass}@ac-ijltuex-shard-00-00.tqz3qgx.mongodb.net:27017,ac-ijltuex-shard-00-01.tqz3qgx.mongodb.net:27017,ac-ijltuex-shard-00-02.tqz3qgx.mongodb.net:27017/?ssl=true&replicaSet=atlas-yr1xa4-shard-0&authSource=admin&retryWrites=true&w=majority`;
        await mongoose.connect(MONGODB_URI, {useNewUrlParser : true});
        console.log('Databse connected successfully');
    } catch (error) {
        console.error('Error in database connection', error.message);
    }
}

export default DBConnection;