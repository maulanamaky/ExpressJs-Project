import express from "express"
import {
    getMahasiswaAll
} from "../controllers/MahasiswaController.js"

const router = express.Router();

router.get('/mahasiswa', getMahasiswaAll)


export default router