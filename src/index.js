import dotenv from "dotenv";
import connectDB from "./db/index.js";


dotenv.config({
    path: './env'
});

connectDB();






// this is commented because this is the first approach for connecting databse and debugging
// import express from "express"
// const app = express()

// ( async() => {
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         app.on("error", () => {
//             console.log("ERROR: ", error);
//             throw error
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on port ${process.env.PORT}`);
//         })

//     } catch(error){
//         console.error("ERROR: ", error)
//     }
// })()