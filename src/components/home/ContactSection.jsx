import {
  useState,
} from "react";

import {
  motion,
} from "framer-motion";

import {
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Mail,
  MessageSquare,
  Send,
} from "lucide-react";

import "../../styles/home/ContactSection.css";


function ContactSection() {

  const [
    formData,
    setFormData,
  ] = useState({

    name: "",

    email: "",

    company: "",

    service: "",

    message: "",

  });


  const [
    submitted,
    setSubmitted,
  ] = useState(false);


  function handleChange(
    event
  ) {

    const {
      name,
      value,
    } = event.target;


    setFormData({

      ...formData,

      [name]: value,

    });


    if (
      submitted
    ) {

      setSubmitted(
        false
      );

    }

  }


  function handleSubmit(
    event
  ) {

    event.preventDefault();


    const subject =

      `New Nodeus inquiry — ${formData.name}`;


    const body =

`Name: ${formData.name}

Work email: ${formData.email}

Company: ${formData.company || "Not provided"}

Service needed: ${formData.service}

Message:

${formData.message}`;


    const mailtoLink =

      `mailto:hello@nodeus.tech?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(
        body
      )}`;


    window.location.href =

      mailtoLink;


    setSubmitted(
      true
    );

  }


  return (

    <section
      className="contact-section"
      id="contact"
    >


      <div
        className="contact-section-glow"
      />


      <div
        className="contact-container"
      >


        {/* =============================
            SECTION HEADER
        ============================== */}

        <motion.div

          className="contact-section-header"

          initial={{

            opacity: 0,

            y: 25,

          }}

          whileInView={{

            opacity: 1,

            y: 0,

          }}

          viewport={{

            once: true,

            amount: 0.2,

          }}

          transition={{

            duration: 0.65,

          }}

        >


          <span
            className="contact-eyebrow"
          >

            GET IN TOUCH

          </span>


          <h2>

            Let’s build something
            <span> better together.</span>

          </h2>


          <p>

            Tell us what your business
            needs. Our team will explore
            the right people, processes,
            and capabilities to help you
            move forward.

          </p>


        </motion.div>


        {/* =============================
            CONTACT GRID
        ============================== */}

        <div
          className="contact-main-grid"
        >


          {/* =============================
              CONTACT INFORMATION
          ============================== */}

          <motion.div

            className="contact-information"

            initial={{

              opacity: 0,

              x: -25,

            }}

            whileInView={{

              opacity: 1,

              x: 0,

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
              className="contact-information-top"
            >


              <span
                className="contact-information-label"
              >

                TALK TO OUR TEAM

              </span>


              <h3>

                A conversation is
                the first step.

              </h3>


              <p>

                Whether you need
                customer support,
                operational expertise,
                technology services,
                or a scalable team,
                we are ready to learn
                more about your goals.

              </p>


            </div>


            <a

              href="mailto:hello@nodeus.tech"

              className="contact-email-card"

            >


              <span
                className="contact-email-icon"
              >

                <Mail
                  size={21}
                />

              </span>


              <span
                className="contact-email-content"
              >


                <small>

                  EMAIL OUR TEAM

                </small>


                <strong>

                  hello@nodeus.tech

                </strong>


              </span>


              <ArrowUpRight
                size={20}
              />


            </a>


            <div
              className="contact-response-note"
            >


              <span>

                WHAT HAPPENS NEXT

              </span>


              <p>

                We review your inquiry
                and connect you with
                the right Nodeus team
                member.

              </p>


            </div>


          </motion.div>


          {/* =============================
              CONTACT FORM
          ============================== */}

          <motion.div

            className="contact-form-wrapper"

            initial={{

              opacity: 0,

              x: 25,

            }}

            whileInView={{

              opacity: 1,

              x: 0,

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
              className="contact-form-header"
            >


              <span>

                START THE CONVERSATION

              </span>


              <h3>

                Tell us how we can help.

              </h3>


              <p>

                Complete the form and
                we will get back to you.

              </p>


            </div>


            <form

              className="contact-form"

              onSubmit={
                handleSubmit
              }

            >


              <div
                className="contact-form-row"
              >


                <div
                  className="contact-form-group"
                >


                  <label
                    htmlFor="contact-name"
                  >

                    Your name

                  </label>


                  <input

                    id="contact-name"

                    name="name"

                    type="text"

                    value={
                      formData.name
                    }

                    onChange={
                      handleChange
                    }

                    placeholder="John Smith"

                    autoComplete="name"

                    required

                  />


                </div>


                <div
                  className="contact-form-group"
                >


                  <label
                    htmlFor="contact-email"
                  >

                    Work email

                  </label>


                  <input

                    id="contact-email"

                    name="email"

                    type="email"

                    value={
                      formData.email
                    }

                    onChange={
                      handleChange
                    }

                    placeholder="john@company.com"

                    autoComplete="email"

                    required

                  />


                </div>


              </div>


              <div
                className="contact-form-group"
              >


                <label
                  htmlFor="contact-company"
                >

                  Company

                  <span>

                    Optional

                  </span>

                </label>


                <div
                  className="contact-input-icon"
                >


                  <Building2
                    size={17}
                  />


                  <input

                    id="contact-company"

                    name="company"

                    type="text"

                    value={
                      formData.company
                    }

                    onChange={
                      handleChange
                    }

                    placeholder="Your company name"

                    autoComplete="organization"

                  />


                </div>


              </div>


              <div
                className="contact-form-group"
              >


                <label
                  htmlFor="contact-service"
                >

                  What can we help with?

                </label>


                <select

                  id="contact-service"

                  name="service"

                  value={
                    formData.service
                  }

                  onChange={
                    handleChange
                  }

                  required

                >


                  <option
                    value=""
                    disabled
                  >

                    Select a solution

                  </option>


                  <option
                    value="Customer Experience & Support"
                  >

                    Customer Experience
                    & Support

                  </option>


                  <option
                    value="Business Operations"
                  >

                    Business Operations

                  </option>


                  <option
                    value="Sales & Revenue Operations"
                  >

                    Sales & Revenue
                    Operations

                  </option>


                  <option
                    value="Technology & IT Services"
                  >

                    Technology & IT
                    Services

                  </option>


                  <option
                    value="AI & Automation"
                  >

                    AI & Automation

                  </option>


                  <option
                    value="Finance & Accounting"
                  >

                    Finance &
                    Accounting

                  </option>


                  <option
                    value="Marketing & Creative"
                  >

                    Marketing &
                    Creative

                  </option>


                  <option
                    value="Something else"
                  >

                    Something else

                  </option>


                </select>


              </div>


              <div
                className="contact-form-group"
              >


                <label
                  htmlFor="contact-message"
                >

                  Tell us about your
                  challenge

                </label>


                <div
                  className="contact-textarea-icon"
                >


                  <MessageSquare
                    size={17}
                  />


                  <textarea

                    id="contact-message"

                    name="message"

                    value={
                      formData.message
                    }

                    onChange={
                      handleChange
                    }

                    rows="5"

                    placeholder="Tell us a little about what you need help with..."

                    required

                  />


                </div>


              </div>


              <button

                type="submit"

                className="contact-submit-button"

              >


                Start a conversation


                <Send
                  size={17}
                />


              </button>


              {

                submitted && (

                  <div
                    className="contact-success"
                  >


                    <CheckCircle2
                      size={17}
                    />


                    <span>

                      Your email application
                      should open with your
                      inquiry ready to send.

                    </span>


                  </div>

                )

              }


            </form>


          </motion.div>


        </div>


      </div>


    </section>

  );

}


export default ContactSection;