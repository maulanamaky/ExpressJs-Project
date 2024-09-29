import { Sequelize } from "sequelize";
import db from "../config/connect.js";

const {DataTypes} = Sequelize

const Mahasiswa = db.define("Mahasiswa", {

    id: DataTypes.STRING,
    nama: DataTypes.STRING,
    Jurusan: DataTypes.STRING

},
{
    freezeTableName : true
})

export default Mahasiswa