import express, { Application } from 'express'
import municipioRouter from '../components/municipio/router';
import dbConecction from './database/config';

class Server {

    private app: Application;
    private port: string;
 
    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000'
        
        
        //conexion base de datos
        this.conectarDB();
        
        //definicion de rutas
        this.routes();
    }

    private apiPaths={
        municipios: '/api/municipio',
        departamento:'.api/departamento'
    }

    routes(){
        this.app.use(this.apiPaths.municipios,municipioRouter)
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port)
        })
    }

    async conectarDB(){
      const db=  new  dbConecction;
       await db.conexion()
    }




}

export default Server;