const express = require("express");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();
// const routeDoctor = require("./routes/api/doctor");
const apiAuth = require("./routes/api/auth");
const apiGba = require("./routes/api/gba");
// const apiAuthBridging = require("./routes/api/authBridging");
// const apiLayanan = require("./routes/api/layanan");
// const apiProduk = require("./routes/api/product");
// const apiMaster = require("./routes/api/master");
// const apiBPJS = require("./routes/ap;;90i/bpjs");
// const apiUbe = require("./routes/api/ube");
// const apiAntri = require("./routes/api/antrian");
// const apiJKN = require("./routes/api/jkn");
// const apiRSUD = require("./routes/api/rsud");
// const apiIHS = require("./routes/api/ihs");
// const apiFingerprint = require("./routes/api/fingerprint");
const apiInternal = require("./routes/api/internal");
// const apiHepi = require("./routes/api/hepi");
// const apiFirebase = require("./routes/api/firebase");
// const apiDashboard = require("./routes/api/dashboard");
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const bodyParser = require("body-parser");
const models = require("./models");
// const cron = require("./cron");
// const swaggerDocument = require('./swagger.json');
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Library API",
      version: "1.0.0",
      description: "RSUDC API",
    },
    servers: [
      {
        url:
          process.env.NODE_ENV === "production"
            ? "http://api.rsudcengkareng.com:5001/api"
            : "http://localhost:5001/api",
      },
    ],
  },
  apis: ["./routes/api/*.js"],
};
const specs = swaggerJsDoc(options);
// const routeSimrs = require("./routes/api/simrs");
const authMid = require("./middleware/authMid");
// const customMailer = require("./helpers/utility/Mailer/customMailer");
// const routeService = require("./routes/api/service");

let port = process.env.PROD_PORT;
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// const corsOpt = {
//   origin: "*",
//   methods: "*",
//   allowedHeaders: "*",
// };
app.use(cors());
app.options("*", cors());
// app.use(function (req, res, next) {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type");
//   res.setHeader("Access-Control-Allow-Credentials", true);
//   next();
// });

//START API
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
// app.use(express.json());
// app.use("/api/doctor", routeDoctor);
// app.use("/api/simrs", routeSimrs);
app.use("/api/auth", apiAuth);
// app.use("/api/auth-bridging", apiAuthBridging);
// app.use("/api/layanan", apiLayanan);
// app.use("/api/master", apiMaster);
// app.use("/api/ube", apiUbe);
// app.use("/api/jkn", apiJKN);
// app.use("/api/bpjs", apiBPJS);
// app.use("/api/antrian", apiAntri);
// app.use("/api/product", apiProduk);
// app.use("/api/rsud", apiRSUD);
// app.use("/api/ihs", apiIHS);
// app.use("/api/fingerprint", apiFingerprint);
app.use("/api/internal", apiInternal);
app.use("/api/gba", apiGba);
// app.use("/api/hepi", apiHepi);
// app.use("/api/firebase", apiFirebase);
// app.use("/api/dashboard", apiDashboard);
//SWAGGER
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
// app.use("/public/identitas", authMid);
// app.use("/public/ube", authMid);
// app.use("/public/skl_request", authMid);
app.use("/public/test", (req, res) => {
  res.json(req.originalUrl);
});
// app.use("/public/ube", authMid);
app.use("/public", express.static(path.join(__dirname, "public")));
app.use(express.static("build"));
// app.get("*", (req, res) => {
//   res.status(404).sendFile(path.resolve(__dirname, "build", "index.html"));
// });
app.get("*", function (req, res) {
  res.status(404).send("");
});
//START WEB
// app.use("/api/auth", webAuth);
app.use(function (req, res) {
  res.status(404).send("Oops! Where are you going ?");
});
if (process.env.NODE_ENV === "development") {
  port = process.env.DEV_PORT;
}
app.listen(port, () => {
  console.log("Server Running : ", port);
});
// sequelize-auto -h 192.168.200.200 -d rsudc -u admin -x admin --dialect postgres -c ./config/config.js -o ./models/auto --noInitModels -t trx_files

models.sequelize
  // .sync()
  .authenticate()
  .then(() => {
    console.log({
      env: process.env.NODE_ENV,
      dbName: models.sequelize.getDatabaseName(),
    });
  })
  .catch((err) => {
    console.log(err);
  });
