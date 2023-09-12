const { DB_NAME, DB_HOST, DB_PORT, DB_USER, DB_PASSWORD } = process.env;
const mysqlConfig = {
    database: DB_NAME as string,
    host: DB_HOST as string,
    port: DB_PORT as string,
    user: DB_USER as string,
    password: DB_PASSWORD as string,
};

export default mysqlConfig;
