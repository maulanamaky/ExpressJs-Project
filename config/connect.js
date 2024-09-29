import { Sequelize } from "sequelize";

const db = new Sequelize("Barang", "root", " ", {
    host: "localhost",
    dialect: "postgres"
})

export default db