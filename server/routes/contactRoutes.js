import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";


/* =========================================
   ENVIRONMENT VARIABLES
========================================= */

dotenv.config();


/* =========================================
   ROUTER
========================================= */

const router = express.Router();


/* =========================================
   EMAIL TRANSPORTER
========================================= */

const transporter = nodemailer.createTransport({

  service: "gmail",

  auth: {

    user: process.env.EMAIL_USER,

    pass: process.env.EMAIL_PASS,

  },

});


/* =========================================
   CONTACT FORM
========================================= */

router.post(
  "/",

  async (req, res) => {

    const {

      fullName,

      email,

      company,

      service,

      message,

    } = req.body;


    /* =========================================
       VALIDATION
    ========================================= */

    if (
      !fullName ||
      !email ||
      !message
    ) {

      return res.status(400).json({

        success: false,

        message:
          "Full name, email, and message are required.",

      });

    }


    try {

      /* =========================================
         SEND EMAIL
      ========================================= */

      await transporter.sendMail({

        from: {

          name:
            "Nodeus Website",

          address:
            process.env.EMAIL_USER,

        },


        to:
          process.env.EMAIL_TO,


        replyTo:
          email,


        subject:
          `New Nodeus inquiry from ${fullName}`,


        html: `

          <div
            style="
              font-family:
                Arial,
                sans-serif;

              max-width:
                650px;

              margin:
                0 auto;

              padding:
                30px;

              color:
                #172033;

              background:
                #f8fafc;
            "
          >

            <h1
              style="
                margin:
                  0 0 25px;

                color:
                  #2563eb;
              "
            >

              New Nodeus Contact Inquiry

            </h1>


            <p>

              <strong>

                Full name:

              </strong>

              ${fullName}

            </p>


            <p>

              <strong>

                Email:

              </strong>

              ${email}

            </p>


            <p>

              <strong>

                Company:

              </strong>

              ${company || "Not provided"}

            </p>


            <p>

              <strong>

                Service:

              </strong>

              ${service || "Not selected"}

            </p>


            <div
              style="
                margin-top:
                  25px;

                padding:
                  20px;

                border-radius:
                  12px;

                background:
                  white;
              "
            >

              <strong>

                Requirements:

              </strong>


              <p
                style="
                  line-height:
                    1.7;

                  white-space:
                    pre-wrap;
                "
              >

                ${message}

              </p>

            </div>

          </div>

        `,

      });


      /* =========================================
         SUCCESS RESPONSE
      ========================================= */

      return res.status(200).json({

        success: true,

        message:
          "Your inquiry has been sent successfully.",

      });

    } catch (error) {

      console.error(
        "Contact email error:",
        error
      );


      return res.status(500).json({

        success: false,

        message:
          "Unable to send your inquiry. Please try again later.",

      });

    }

  }

);


export default router;