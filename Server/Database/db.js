import mongoose from 'mongoose';



const DbConnection=async()=>{
    const USERNAME = process.env.DB_USERNAME;
    const PASSWORD = process.env.DB_PASSWORD;
    const DB_URL=`mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.tbjz6yz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    try{
     await  mongoose.connect(DB_URL,{useNewUrlParser:true});
     console.log('DATABASE CONNECTED SUCCESSFULLY')
    }
    catch(error){
        console.log('Error while connecting with the database',error.message);
    }
}
export default DbConnection;