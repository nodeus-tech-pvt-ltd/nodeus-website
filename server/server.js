import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import contactRoutes from "./routes/contactRoutes.js";


/* =========================================
   ENVIRONMENT VARIABLES
========================================= */

dotenv.config();


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

app.use(
  express.json()
);


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
   START SERVER
========================================= */

app.listen(
  PORT,
  () => {

    console.log(
      `Nodeus backend running on port ${PORT}`
    );

  }
);