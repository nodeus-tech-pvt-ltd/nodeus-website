import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  Building2,
  Check,
  MapPin,
} from "lucide-react";

import {
  Link,
  useParams,
} from "react-router-dom";

import jobsData from "../../data/careers/jobsData";

import "../../styles/pages/jobDetails.css";


function JobDetails() {

  const {
    slug,
  } = useParams();


  const job = jobsData.find(

    (item) => (
      item.slug === slug
    )

  );


  if (
    !job
  ) {

    return (

      <main
        className="job-not-found"
      >

        <div
          className="job-details-container"
        >

          <span>

            JOB NOT FOUND

          </span>


          <h1>

            This opportunity is no longer available.

          </h1>


          <p>

            The position you are looking
            for may have been removed or
            the link may be incorrect.

          </p>


          <Link
            to="/careers"
            className="job-back-button"
          >

            <ArrowLeft
              size={17}
            />

            Back to careers

          </Link>

        </div>

      </main>

    );

  }


  return (

    <main
      className="job-details-page"
    >


      {/* HERO */}

      <section
        className="job-details-hero"
      >

        <div
          className="job-details-container"
        >


          <Link
            to="/careers"
            className="job-back-link"
          >

            <ArrowLeft
              size={16}
            />

            Back to careers

          </Link>


          <div
            className="job-details-label"
          >

            OPEN POSITION

          </div>


          <h1>

            {
              job.title
            }

          </h1>


          <p>

            {
              job.summary
            }

          </p>


          <div
            className="job-meta"
          >


            <span>

              <Building2
                size={16}
              />

              {
                job.department
              }

            </span>


            <span>

              <MapPin
                size={16}
              />

              {
                job.location
              }

            </span>


            <span>

              <Briefcase
                size={16}
              />

              {
                job.type
              }

              {" · "}

              {
                job.workplace
              }

            </span>


          </div>


        </div>

      </section>


      {/* CONTENT */}

      <section
        className="job-details-content"
      >

        <div
          className="job-details-container"
        >


          <div
            className="job-details-layout"
          >


            <article
              className="job-description"
            >


              <section>

                <h2>

                  About the role

                </h2>


                <p>

                  {
                    job.description
                  }

                </p>

              </section>


              <section>

                <h2>

                  What you will do

                </h2>


                <ul>

                  {
                    job.responsibilities.map(

                      (
                        responsibility
                      ) => (

                        <li
                          key={
                            responsibility
                          }
                        >

                          <Check
                            size={17}
                          />

                          <span>

                            {
                              responsibility
                            }

                          </span>

                        </li>

                      )

                    )
                  }

                </ul>

              </section>


              <section>

                <h2>

                  What we are looking for

                </h2>


                <ul>

                  {
                    job.requirements.map(

                      (
                        requirement
                      ) => (

                        <li
                          key={
                            requirement
                          }
                        >

                          <Check
                            size={17}
                          />

                          <span>

                            {
                              requirement
                            }

                          </span>

                        </li>

                      )

                    )
                  }

                </ul>

              </section>


              <section>

                <h2>

                  What you can expect

                </h2>


                <ul>

                  {
                    job.benefits.map(

                      (
                        benefit
                      ) => (

                        <li
                          key={
                            benefit
                          }
                        >

                          <Check
                            size={17}
                          />

                          <span>

                            {
                              benefit
                            }

                          </span>

                        </li>

                      )

                    )
                  }

                </ul>

              </section>


            </article>


            {/* APPLY CARD */}

            <aside
              className="job-apply-card"
            >


              <span>

                INTERESTED?

              </span>


              <h3>

                Apply for this position.

              </h3>


              <p>

                Send us your information
                and our team will review
                your application.

              </p>


              <a
                href={
                  `mailto:careers@nodeus.tech?subject=Application for ${job.title}`
                }

                className="job-apply-button"
              >

                Apply now

                <ArrowRight
                  size={17}
                />

              </a>


              <small>

                Please include your CV
                and relevant experience
                in your application.

              </small>


            </aside>


          </div>


        </div>

      </section>


    </main>

  );

}


export default JobDetails;