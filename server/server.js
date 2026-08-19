import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import contactRoutes from "./routes/contactRoutes.js";


/* =========================================
   ENVIRONMENT VARIABLES
========================================= */

dotenv.config();


/* =========================================
   PATH CONFIGURATION
========================================= */

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, "..");
const distPath = path.join(rootDir, "dist");


/* =========================================
   APP
========================================= */

const app = express();

const PORT = process.env.PORT || 5000;


/* =========================================
   MIDDLEWARE
========================================= */

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());


/* =========================================
   HEALTH CHECK
========================================= */

app.get(
  "/api/health",
  (req, res) => {

    return res.status(200).json({

      success: true,

      message:
        "Nodeus backend is running",

    });

  }
);


/* =========================================
   API ROUTES
========================================= */

app.use(
  "/api/contact",
  contactRoutes
);


/* =========================================
   SERVE REACT BUILD
========================================= */

app.use(
  express.static(distPath)
);


/* =========================================
   REACT ROUTER FALLBACK
========================================= */

app.use(
  (req, res) => {

    if (
      req.path.startsWith("/api/")
    ) {

      return res.status(404).json({

        success: false,

        message:
          "API endpoint not found",

      });

    }


    return res.sendFile(
      path.join(
        distPath,
        "index.html"
      )
    );

  }
);


/* =========================================
   START SERVER
========================================= */

app.listen(
  PORT,
  () => {

    console.log(
      `Nodeus application running on port ${PORT}`
    );

  }
);