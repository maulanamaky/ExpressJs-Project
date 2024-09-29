import express from "express";
import router from "../routes/MahasiswaRoute.js";

const app = express();

app.listen(5000, () => console.log('server running'))

app.use(router)