import { useState } from "react";

import { motion } from "framer-motion";

import {
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Mail,
  MessageSquare,
  Send,
} from "lucide-react";

import AnimatedPage from "../../components/shared/AnimatedPage";

import "../../styles/pages/contact.css";


/* =================================
   API URL
================================== */

// const API_URL =
//   import.meta.env.VITE_API_URL
//   || "http://localhost:5000";


function Contact() {

  /* =================================
     INITIAL FORM DATA
  ================================== */

  const initialFormData = {

    fullName: "",

    email: "",

    company: "",

    service: "",

    message: "",

  };


  /* =================================
     FORM STATE
  ================================== */

  const [formData, setFormData] = useState(
    initialFormData
  );


  const [formStatus, setFormStatus] = useState(
    "idle"
  );


  const [formMessage, setFormMessage] =
    useState("");


  /* =================================
     HANDLE INPUT CHANGES
  ================================== */

  const handleChange = (event) => {

    const {
      name,
      value,
    } = event.target;


    setFormData((currentData) => {

      return {

        ...currentData,

        [name]: value,

      };

    });


    /*
      Clear an old success or error
      message when the user starts
      editing the form again.
    */

    if (
      formStatus !== "sending"
    ) {

      setFormStatus(
        "idle"
      );


      setFormMessage(
        ""
      );

    }

  };


  /* =================================
     HANDLE FORM SUBMISSION
  ================================== */

  const handleSubmit = async (event) => {

    event.preventDefault();


    /*
      Prevent duplicate requests.
    */

    if (
      formStatus === "sending"
    ) {

      return;

    }


    setFormStatus(
      "sending"
    );


    setFormMessage(
      ""
    );


    try {

      const response = await fetch(

        "/api/contact",

        {

          method: "POST",

          headers: {

            "Content-Type":
              "application/json",

          },

          body: JSON.stringify(
            formData
          ),

        }

      );


      /*
        Read the response safely.
      */

      const data =
        await response.json();


      if (
        !response.ok
      ) {

        throw new Error(

          data.message

          ||

          "Unable to send your inquiry. Please try again."

        );

      }


      setFormStatus(
        "success"
      );


      setFormMessage(

        data.message

        ||

        "Thank you! Your inquiry has been received. We’ll be in touch soon."

      );


      /*
        Clear the form only after
        the request succeeds.
      */

      setFormData(
        initialFormData
      );

    }

    catch (error) {

      console.error(

        "Contact form error:",

        error

      );


      setFormStatus(
        "error"
      );


      setFormMessage(

        error.message

        ||

        "We couldn’t send your inquiry. Please try again."

      );

    }

  };


  const isSending =

    formStatus === "sending";


  return (

    <AnimatedPage>

      <main className="contact-page">


        {/* =================================
            HERO
        ================================== */}

        <section className="contact-hero">

          <div className="contact-hero-content">

            <motion.span
              className="section-eyebrow"

              initial={{
                opacity: 0,
                y: 18,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.5,
              }}
            >

              LET&apos;S START A CONVERSATION

            </motion.span>


            <motion.h1

              initial={{
                opacity: 0,
                y: 28,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.65,
                delay: 0.08,
              }}
            >

              Build the right team.

              <br />

              <span>

                Scale with confidence.

              </span>

            </motion.h1>


            <motion.p

              initial={{
                opacity: 0,
                y: 22,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.6,
                delay: 0.16,
              }}
            >

              Tell us about your business,
              your challenges, and what you
              want to achieve. We&apos;ll help
              you explore the right people,
              processes, and operational
              support for your goals.

            </motion.p>


            <motion.div
              className="contact-hero-points"

              initial={{
                opacity: 0,
                y: 20,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.6,
                delay: 0.24,
              }}
            >

              <span>

                <CheckCircle2
                  size={17}
                />

                Flexible engagement models

              </span>


              <span>

                <CheckCircle2
                  size={17}
                />

                Dedicated teams built around you

              </span>

            </motion.div>

          </div>


          {/* HERO SIDE CARD */}

          <motion.div
            className="contact-hero-card"

            initial={{
              opacity: 0,
              x: 35,
            }}

            animate={{
              opacity: 1,
              x: 0,
            }}

            transition={{
              duration: 0.7,
              delay: 0.18,
            }}
          >

            <div
              className="contact-card-icon"
            >

              <MessageSquare
                size={25}
              />

            </div>


            <span
              className="contact-card-label"
            >

              START WITH A CONVERSATION

            </span>


            <h2>

              Your next capability

              <br />

              starts here.

            </h2>


            <p>

              Whether you need customer
              support, business operations,
              technology expertise, or a
              dedicated team, we&apos;ll help you
              find the right approach.

            </p>


            <div
              className="contact-card-line"
            />


            <div
              className="contact-card-detail"
            >

              <Clock3
                size={18}
              />

              <div>

                <strong>

                  Clear next steps

                </strong>

                <span>

                  We&apos;ll review your
                  requirements and
                  discuss the right model.

                </span>

              </div>

            </div>

          </motion.div>

        </section>


        {/* =================================
            CONTACT CONTENT
        ================================== */}

        <section
          className="contact-content"
        >


          {/* CONTACT FORM */}

          <motion.div
            className="contact-form-wrapper"

            initial={{
              opacity: 0,
              y: 35,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            viewport={{
              once: true,
              amount: 0.15,
            }}

            transition={{
              duration: 0.65,
            }}
          >

            <div
              className="contact-form-heading"
            >

              <span
                className="section-eyebrow"
              >

                TELL US ABOUT YOUR NEEDS

              </span>


              <h2>

                How can we help?

              </h2>


              <p>

                Share a few details and
                our team will get back to
                you to discuss your
                requirements.

              </p>

            </div>


            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >


              <div
                className="contact-form-grid"
              >


                {/* FULL NAME */}

                <div
                  className="form-group"
                >

                  <label
                    htmlFor="fullName"
                  >

                    Full name

                  </label>


                  <input

                    id="fullName"

                    type="text"

                    name="fullName"

                    value={
                      formData.fullName
                    }

                    onChange={
                      handleChange
                    }

                    placeholder={
                      "Your full name"
                    }

                    disabled={
                      isSending
                    }

                    required

                  />

                </div>


                {/* EMAIL */}

                <div
                  className="form-group"
                >

                  <label
                    htmlFor="email"
                  >

                    Work email

                  </label>


                  <input

                    id="email"

                    type="email"

                    name="email"

                    value={
                      formData.email
                    }

                    onChange={
                      handleChange
                    }

                    placeholder={
                      "you@company.com"
                    }

                    disabled={
                      isSending
                    }

                    required

                  />

                </div>


                {/* COMPANY */}

                <div
                  className="form-group"
                >

                  <label
                    htmlFor="company"
                  >

                    Company

                  </label>


                  <input

                    id="company"

                    type="text"

                    name="company"

                    value={
                      formData.company
                    }

                    onChange={
                      handleChange
                    }

                    placeholder={
                      "Company name"
                    }

                    disabled={
                      isSending
                    }

                  />

                </div>


                {/* SERVICE */}

                <div
                  className="form-group"
                >

                  <label
                    htmlFor="service"
                  >

                    What are you
                    interested in?

                  </label>


                  <select

                    id="service"

                    name="service"

                    value={
                      formData.service
                    }

                    onChange={
                      handleChange
                    }

                    disabled={
                      isSending
                    }

                    required

                  >

                    <option
                      value=""
                      disabled
                    >

                      Select an option

                    </option>


                    <option
                      value="customer-experience"
                    >

                      Customer Experience
                      & Support

                    </option>


                    <option
                      value="business-operations"
                    >

                      Business Operations
                      & Back Office

                    </option>


                    <option
                      value="sales-revenue"
                    >

                      Sales & Revenue
                      Operations

                    </option>


                    <option
                      value="technology-it"
                    >

                      Technology & IT
                      Services

                    </option>


                    <option
                      value="ai-automation"
                    >

                      AI & Automation

                    </option>


                    <option
                      value="finance-accounting"
                    >

                      Finance & Accounting

                    </option>


                    <option
                      value="marketing-creative"
                    >

                      Marketing & Creative

                    </option>


                    <option
                      value="other"
                    >

                      Other

                    </option>

                  </select>

                </div>

              </div>


              {/* MESSAGE */}

              <div
                className="form-group"
              >

                <label
                  htmlFor="message"
                >

                  Tell us about your
                  requirements

                </label>


                <textarea

                  id="message"

                  name="message"

                  value={
                    formData.message
                  }

                  onChange={
                    handleChange
                  }

                  rows="6"

                  placeholder={
                    "What are you looking to build, improve, or scale?"
                  }

                  disabled={
                    isSending
                  }

                  required

                />

              </div>


              {/* SUBMIT BUTTON */}

              <button

                type="submit"

                className="contact-submit-button"

                disabled={
                  isSending
                }

                aria-busy={
                  isSending
                }

              >

                {

                  isSending

                    ? "Sending inquiry..."

                    : "Send inquiry"

                }


                <Send
                  size={17}
                />

              </button>


              {/* FORM STATUS */}

              <div
                className="contact-form-status"
                aria-live="polite"
              >

                {

                  formStatus === "success"

                  &&

                  (

                    <div
                      className="contact-form-success"
                      role="status"
                    >

                      <CheckCircle2
                        size={18}
                      />

                      <span>

                        {
                          formMessage
                        }

                      </span>

                    </div>

                  )

                }


                {

                  formStatus === "error"

                  &&

                  (

                    <div
                      className="contact-form-error"
                      role="alert"
                    >

                      <span>

                        {
                          formMessage
                        }

                      </span>

                    </div>

                  )

                }

              </div>


              {/* FORM NOTE */}

              <p
                className="form-note"
              >

                By submitting this form,
                you agree that Nodeus may
                contact you regarding your
                inquiry.

              </p>

            </form>

          </motion.div>


          {/* =================================
              CONTACT INFORMATION
          ================================== */}

          <motion.aside
            className="contact-information"

            initial={{
              opacity: 0,
              y: 35,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            viewport={{
              once: true,
              amount: 0.15,
            }}

            transition={{
              duration: 0.65,
              delay: 0.1,
            }}
          >


            <div
              className="contact-info-intro"
            >

              <span
                className="section-eyebrow"
              >

                WHAT HAPPENS NEXT

              </span>


              <h2>

                A simple path

                <br />

                to the right solution.

              </h2>

            </div>


            <div
              className="contact-steps"
            >


              {/* STEP 01 */}

              <div
                className="contact-step"
              >

                <span>

                  01

                </span>


                <div>

                  <h3>

                    We review your needs

                  </h3>


                  <p>

                    We look at your goals,
                    current challenges,
                    workflows, and the
                    capabilities you need.

                  </p>

                </div>

              </div>


              {/* STEP 02 */}

              <div
                className="contact-step"
              >

                <span>

                  02

                </span>


                <div>

                  <h3>

                    We explore the right
                    model

                  </h3>


                  <p>

                    Together, we discuss
                    the team structure,
                    services, processes,
                    and engagement model
                    that fit your business.

                  </p>

                </div>

              </div>


              {/* STEP 03 */}

              <div
                className="contact-step"
              >

                <span>

                  03

                </span>


                <div>

                  <h3>

                    We define next steps

                  </h3>


                  <p>

                    You receive a clear
                    direction for moving
                    forward with the right
                    people and operational
                    support.

                  </p>

                </div>

              </div>

            </div>


            {/* EMAIL CARD */}

            <div
              className="contact-email-card"
            >

              <div
                className="contact-email-icon"
              >

                <Mail
                  size={21}
                />

              </div>


              <div>

                <span>

                  Prefer email?

                </span>


                <a
                  href={
                    "mailto:info@nodeus.tech"
                  }
                >

                  info@nodeus.tech

                  <ArrowUpRight
                    size={16}
                  />

                </a>

              </div>

            </div>

          </motion.aside>

        </section>

      </main>

    </AnimatedPage>

  );

}


export default Contact;