import dotenv from "dotenv";
import express, { json, urlencoded } from "express";
import "express-async-errors";
import cors from "cors";

// Obter variáveis do env
dotenv.config();

// import database from "./app/database/index.js";
// import routes from "./app/routes/index.js"; // Import API routes

// Estabelecer conexão com o banco de dados
// (async () => {
//    await database();
// })();

// Criar instância express
const app = express();

// Definir origem do cors
const corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204 (default)
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
};
app.use(cors(corsOptions));
app.use(json());
app.use(urlencoded({ extended: true }));

// Colocar rotas API
// app.use("/api", routes);

app.get("/", (req, res) => {
    res.json({ message: "Bem Vindo to Blog NodeJS API." });
});

// eslint-disable-next-line no-unused-vars
app.use(function (error, req, response, next) {
    if (process.env.APP_DEBUG) {
        console.error(error);
        return response.status(error.statusCode ?? 500).json({
            status: "Error",
            message: error.message,
            error: error,
        });
    } else {
        return response.status(error.statusCode ?? 500).json({
            status: "Error",
            message: error.message,
        });
    }
});

const port = process.env.NODE_LOCAL_PORT || 3001;
app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Blog NodeJS API listening on port ${port}`);
    console.log(`---> http://${process.env.NODE_APP_HOST}:${port}`);
});
