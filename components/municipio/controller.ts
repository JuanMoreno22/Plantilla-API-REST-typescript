import { Request, response } from "express";


export const getMunicipio =(req: Request,res=response)=>{
    res.json({
        msg:'get Municipio'
    })
}