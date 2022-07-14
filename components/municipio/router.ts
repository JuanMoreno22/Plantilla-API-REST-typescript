import { getMunicipio } from './controller';
import { Router } from "express";


const router= Router()

router.get('/',getMunicipio);







export default router;