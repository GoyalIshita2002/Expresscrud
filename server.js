import express from "express"
import { connection } from "./postgres/connection.js";
import router from "./view/router.js";

const app = express();
const PORT = 8000;
app.use(express.json());
app.use(router)


app.get('/',(req,res)=>{
    return res.json({message: "Hello,how are you"})
})
connection();
app.listen(PORT, ()=>{
    return console.log(`server is running at port no ${PORT}`)
})