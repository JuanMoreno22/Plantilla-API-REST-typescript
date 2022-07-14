import mongoose from "mongoose";


class dbConecction{

    private mongo_key:string

   
    constructor(){
        this.mongo_key=process.env.MONGO||""
        
    }

    conexion(){
        try {
            mongoose.connect(this.mongo_key)
            console.log('Base de datos conectada')
        } catch (error) {
            console.log(error)
            throw new Error ('Error en la base de datos')
            
        }

    }

}





export default dbConecction