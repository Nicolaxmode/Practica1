import {createPool} from "mysql";

const pool = createPool({
    user: 'root',
    password: 'Sandoni77@',
    host: 'localhost',
    port: 3306,
    database: 'tablas_practica'
})
