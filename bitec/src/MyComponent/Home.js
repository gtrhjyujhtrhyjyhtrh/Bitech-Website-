import React, { useState, useEffect } from 'react';
import LifeAtSection from './LifeAtSection';
import People from './People.jpg';
import Rob from './Rob.jpg';
import Corp from './Corp.jpg';
import Office1 from "./Office1.jpg";
import arif from "./arif.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";
import Office2 from "./Office2.jpg";


const linkStyle = {
  color: '#ddd',
  textDecoration: 'none',
  transition: '0.3s',
};
const statNumberStyle = {
  color: '#4CAF50',
  fontWeight: 'bold',
  fontSize: '3rem',
  margin: 0,
};

const statUnitStyle = {
  fontSize: '1.7rem',
};

const statTextStyle = {
  fontSize: '1rem',
  lineHeight: '1.6',
  marginTop: '0.5rem',
  color: '#333',
};

const Home = ({ navigate }) => {
const handleContactSubmit = async (event) => {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);

  try {
    await axios.post(
      "http://localhost:5000/api/contacts",
      {
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        subject: formData.get("subject"),
        message: formData.get("message"),
      }
    );

    alert(
      "Message sent successfully. Please wait for our reply."
    );

    
  } catch (error) {
    console.error(error);

    alert("Failed to send message.");
  }
};  









const slides = [
  {
    image: People,
    subtitle: 'Future Ready IT Solutions',
    title1: 'Empowering Businesses Through',
    title2: 'Cutting-Edge Technology',
    description:
      'We empower businesses to lead with confidence, leveraging the latest innovations to drive sustainable growth, enhance agility, and gain a lasting competitive edge.',
  },
  {image:Rob,

    subtitle: 'Innovate With Confidence',
    title1: 'Innovative Solutions Through',
    title2: 'Advanced Technology',
    description:
      'We harness cutting-edge technology to deliver innovative solutions,transforming ideas into impactful digital experiences that drive growth,enhance efficiency, and ensure long-term success.',
  },
  {
    image:Corp,
    subtitle: 'Transform Your Future',
    title1: 'Empowering Digital ',
    title2: 'Transformation',
    description:
      'We guide organizations on their digital journey,unlocking new possibilities through strategic,customized technology solutions designed to meet your unique needs.',
  },
];



const [currentSlide, setCurrentSlide] = useState(0);

const nextSlide = () => {
  setCurrentSlide((prev) => (prev + 1) % slides.length);
};

const prevSlide = () => {
  setCurrentSlide((prev) =>
    prev === 0 ? slides.length - 1 : prev - 1
  );
};





  return (
    <>


   <div
  style={{
    overflow: 'hidden',
    width: '100%',
  }}
>
  <div
    style={{
      display: 'flex',
      width: `${slides.length * 100}%`,
      transform: `translateX(-${currentSlide * (100 / slides.length)}%)`,
      transition: 'transform 0.8s ease-in-out',
    }}
  >
    {slides.map((slide, index) => (
      <section
        key={index}
        style={{
          width: `${100 / slides.length}%`,
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${slide.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          color: 'white',
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10">

              <h4
                style={{
                  color: '#4CAF50',
                  fontWeight: 'bold',
                  marginBottom: '1rem',
                }}
              >
                {slide.subtitle}
              </h4>

              <h1
                style={{
                  fontWeight: 'bold',
                  fontSize: 'clamp(2rem,5vw,4rem)',
                }}
              >
                {slide.title1}
              </h1>

              <h1
                style={{
                  fontWeight: 'bold',
                  fontSize: 'clamp(2rem,5vw,4rem)',
                  marginBottom: '1.5rem',
                }}
              >
                {slide.title2}
              </h1>

              <p
                style={{
                  fontSize: 'clamp(1rem,2vw,1.25rem)',
                  lineHeight: '1.8',
                  maxWidth: '700px',
                }}
              >
                {slide.description}
              </p>

              <button
                type="button"
                className="btn btn-success mt-3"
                onClick={() => navigate('/about-us')}
                style={{
                  borderRadius: '30px',
                  padding: '10px 24px',
                }}
              >
                Learn More
              </button>

              <div className="d-flex gap-3 mt-4 flex-wrap">
                <button
                  type="button"
                  className="btn btn-dark"
                  onClick={prevSlide}
                  style={{
                    borderRadius: '30px',
                    padding: '8px 24px',
                  }}
                >
                  ← Prev
                </button>

                <button
                  type="button"
                  className="btn btn-dark"
                  onClick={nextSlide}
                  style={{
                    borderRadius: '30px',
                    padding: '8px 24px',
                  }}
                >
                  Next →
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>
    ))}
  </div>
</div>





      

     {/* Who We Are Section */}
<section className="py-5">
  <div className="container">
    <h4 style={{ color: '#4CAF50', fontWeight: 'bold' }}>Who We Are</h4>

    <h1
      style={{
        fontWeight: 'bold',
        marginTop: '2vh',
        marginBottom: 0,
      }}
    >
      Innovative IT Solutions by
    </h1>

    <h1 style={{ fontWeight: 'bold', marginBottom: '3rem' }}>
      Bitech Global
    </h1>

    <div className="row align-items-center g-5">
      {/* Left Stats */}
      <div className="col-lg-3">
        <div
          style={{
            marginBottom: '2rem',
            paddingBottom: '2rem',
            borderBottom: '1px solid #ddd',
          }}
        >
          <h1 style={statNumberStyle}>
            9+ <span style={statUnitStyle}>Years</span>
          </h1>

          <p style={statTextStyle}>
            Years of experience in software development
          </p>
        </div>

        <div
          style={{
            marginBottom: '2rem',
            paddingBottom: '2rem',
            borderBottom: '1px solid #ddd',
          }}
        >
          <h1 style={statNumberStyle}>
            50 <span style={statUnitStyle}>Awards</span>
          </h1>

          <p style={statTextStyle}>
            Winning awards as one of the world company
          </p>
        </div>

        <div>
          <h1 style={statNumberStyle}>
            100+ <span style={statUnitStyle}>Projects</span>
          </h1>

          <p style={statTextStyle}>
            Trusted by clients to solve complex challenges with
            technology-driven results.
          </p>
        </div>
      </div>

      {/* Center Image */}
      <div className="col-lg-4 text-center">
  <img
    src={Office2}
    loading="lazy"
    alt="Bitech Global team"
    className="img-fluid"
    style={{
      borderRadius: '30px',
      objectFit: 'cover',
      height: '500px', // change this value
      width: '100%',
    }}
  />
</div>

      {/* Right Content */}
      <div className="col-lg-5">
        <p style={{ fontSize: '1.05rem', lineHeight: '1.9' }}>
          <strong>
            Bitech Global stands as Pakistan's premier Apps and Games
            Development Company, rapidly progressing toward excellence.
          </strong>{' '}
          In a remarkably short time, we have established a strong
          footprint in the global market thanks to our highly skilled
          and talented team. At Bitech Global, we strive for
          perfection and aim high in everything we do.
        </p>

        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: '1.9',
          }}
        >
          More than just an IT company, Bitech Global is the
          realization of a vision by our CEO, Mr. Muhammad Arif Jameel,
          to elevate Pakistan's presence in the global IT arena.
          Since its inception in 2017, the company has grown steadily
          and productively, delivering high-quality products that set
          us apart from the competition.
        </p>

        <div className="d-flex align-items-center flex-wrap gap-4 mt-4">
         <button
  type="button"
  className="btn btn-dark"
  onClick={() => navigate('/about-us')}
  style={{
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    padding: '8px 24px 8px 8px',
    borderRadius: '30px',
  }}
>
  <span
    style={{
      background: '#fff',
      color: '#000',
      borderRadius: '50%',
      width: '28px',
      height: '28px',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    &rarr;
  </span>

  Learn More
</button>

          <div>
            <h4 style={{ margin: 0 }}>Muhammad Arif Jameel</h4>

            <p
              style={{
                color: '#4CAF50',
                fontWeight: 'bold',
                margin: 0,
              }}
            >
              Managing Director
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>






      <div
  style={{
    backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(${Office1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "90px 0",
    color: "white",
  }}
>
  <div
    style={{
      width: "90%",
      maxWidth: "1300px",
      margin: "0 auto",
    }}
  >
    {/* Top Row */}
    <div className='container'>
    <div className="row align-items-center mb-5">
      <div className="col-lg-6">
        <h5
          style={{
            color: "#4CAF50",
            fontWeight: "700",
            marginBottom: "15px",
          }}
        >
          Accurate Data, Bold Innovation
        </h5>

        <h1
          style={{
            fontWeight: "700",
            fontSize: "clamp(2.2rem,4vw,4rem)",
            lineHeight: "1.2",
          }}
        >
          Innovative Insights Driven
          <br />
          by Market Accuracy
        </h1>
      </div>

      <div className="col-lg-6">
        <p
          style={{
            fontSize: "1.15rem",
            lineHeight: "1.8",
            marginTop: "20px",
          }}
        >
          We deliver innovative insights through precise market
          research, empowering smarter decisions, strategic growth,
          and impactful results across dynamic industries.
        </p>
      </div>
    </div>

    {/* Cards */}
    <div className="row g-4">
      {/* Card 1 */}
      <div className="col-md-4">
        <div
          style={{
            background: "#3f3f3f",
            borderRadius: "25px",
            padding: "70px 30px 30px",
            position: "relative",
            height: "100%",
          }}
        >
          <div
            style={{
              width: "70px",
              height: "70px",
              background: "#fff",
              borderRadius: "50%",
              position: "absolute",
              top: "-20px",
              left: "30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <i
              className="bi bi-lightbulb-fill"
              style={{
                color: "#4CAF50",
                fontSize: "32px",
              }}
            />
          </div>

          <h3 style={{ fontWeight: "700" }}>Innovation</h3>

          <p style={{ lineHeight: "1.9" }}>
            Innovation is being the hallmark of Bitech International.
            We generate unique ideas and then make these ideas into
            existence with our expert team. All our products are
            technically sound and functioning properly on different
            stores all across the globe.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="col-md-4">
        <div
          style={{
            background: "#fff",
            color: "#000",
            borderRadius: "25px",
            padding: "70px 30px 30px",
            position: "relative",
            height: "100%",
          }}
        >
          <div
            style={{
              width: "70px",
              height: "70px",
              background: "#4CAF50",
              borderRadius: "50%",
              position: "absolute",
              top: "-20px",
              left: "30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <i
              className="bi bi-graph-up-arrow"
              style={{
                color: "#fff",
                fontSize: "30px",
              }}
            />
          </div>

          <h3 style={{ fontWeight: "700" }}>
            Market Research
          </h3>

          <p style={{ lineHeight: "1.9" }}>
            Proper planning prevents poor performance! That is why
            we plan and execute according to trends by deep market
            research, which is one of the big reasons of our success.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="col-md-4">
        <div
          style={{
            background: "#3f3f3f",
            borderRadius: "25px",
            padding: "70px 30px 30px",
            position: "relative",
            height: "100%",
          }}
        >
          <div
            style={{
              width: "70px",
              height: "70px",
              background: "#fff",
              borderRadius: "50%",
              position: "absolute",
              top: "-20px",
              left: "30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <i
              className="bi bi-check-circle-fill"
              style={{
                color: "#4CAF50",
                fontSize: "30px",
              }}
            />
          </div>

          <h3 style={{ fontWeight: "700" }}>
            Accuracy
          </h3>

          <p style={{ lineHeight: "1.9" }}>
            We do not compromise on deadlines and quality. Our
            expert team meets deadlines of projects and accomplishes
            their task within the given time frame with perfection.
          </p>
        </div>
        </div>
      </div>
    </div>
  </div>
</div>
      




      





 {/* Our Services */}
<section
  style={{
    padding: '90px 8vw',
    background: '#fff',
  }}
>
  <div className='container'>
  <div className="row g-5 align-items-start">
    <div className="col-lg-6">
      <h5 style={{ color: '#39a943', fontWeight: '700' }}>
        Our Services
      </h5>

      <h1
        style={{
          fontSize: 'clamp(2.4rem, 4vw, 4rem)',
          fontWeight: '700',
          lineHeight: '1.2',
          marginTop: '20px',
        }}
      >
        Discover What We Can
        <br />
        Offer You
      </h1>

      <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginTop: '25px' }}>
        Unlock the full potential of your digital vision with our
        comprehensive services. From mobile app and web development to iOS
        specific solutions, we build high-performance platforms tailored to
        your needs. Our expert team ensures every project is scalable,
        responsive, and future-ready.
      </p>

      <p style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
        We also craft intuitive UI/UX designs, eye-catching graphics, and
        result-driven ASO and SEO strategies to boost visibility and
        engagement.
      </p>

      <button
  type="button"
  className="btn btn-dark mt-3"
  onClick={() => navigate('/services')}
>
  <i className="bi bi-arrow-right-circle-fill me-2" />
  Explore All Services
</button>
    </div>









    <div className="col-lg-6">
      <div className="row g-4">
        <div className="col-md-6">
          <div
            style={{
              background: '#42aa38',
              color: '#fff',
              padding: '24px',
              borderRadius: '16px',
              minHeight: '260px',
            }}
          >
            <div
              style={{
                background: '#67c95e',
                width: '70px',
                height: '70px',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
              }}
            >
              <i className="bi bi-android2" style={{ fontSize: '35px' }} />
            </div>
            <h4 style={{ fontWeight: '700' }}>App Development</h4>
            <p style={{ lineHeight: '1.6' }}>
              Custom Android app development services: intuitive design,
              smooth performance, and scalable solutions for your business.
            </p>
          </div>
        </div>

        <div className="col-md-6">
          <div style={{ padding: '24px', minHeight: '260px' }}>
            <div
              style={{
                background: '#c9fbc5',
                color: '#39a943',
                width: '70px',
                height: '70px',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
              }}
            >
              <i className="bi bi-apple" style={{ fontSize: '35px' }} />
            </div>
            <h4 style={{ fontWeight: '700' }}>iOS Development</h4>
            <p style={{ lineHeight: '1.6' }}>
              Custom iOS app development services: intuitive design, smooth
              performance, and scalable solutions for your business.
            </p>
          </div>
        </div>

        <div className="col-md-6">
          <div style={{ padding: '24px', minHeight: '240px' }}>
            <div
              style={{
                background: '#c9fbc5',
                color: '#39a943',
                width: '70px',
                height: '70px',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
              }}
            >
              <i className="bi bi-globe2" style={{ fontSize: '32px' }} />
            </div>
            <h4 style={{ fontWeight: '700' }}>Web Development</h4>
            <p style={{ lineHeight: '1.6' }}>
              Responsive websites and web apps that deliver seamless
              experiences across all devices.
            </p>
          </div>
        </div>

        <div className="col-md-6">
          <div
            style={{
              background: '#42aa38',
              color: '#fff',
              padding: '24px',
              borderRadius: '16px',
              minHeight: '240px',
            }}
          >
            <div
              style={{
                background: '#67c95e',
                width: '70px',
                height: '70px',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
              }}
            >
              <i className="bi bi-bezier2" style={{ fontSize: '32px' }} />
            </div>
            <h4 style={{ fontWeight: '700' }}>UI/UX Design</h4>
            <p style={{ lineHeight: '1.6' }}>
              User-centered design strategies for mobile and web apps,
              enhancing usability and engagement.
            </p>
          </div>
          
        </div>
      </div>
    </div>
  </div>
  </div>
</section>


<LifeAtSection navigate={navigate} />










{/* Managing Director Message */}
<section style={{ padding: '100px 8vw 70px', background: '#fff' }}>
  <div className='container'>
  <div className="row align-items-center g-5">
    <div className="col-lg-6">
      <h6 style={{ color: '#39a943', fontWeight: '700', marginBottom: '16px' }}>
        Managing Director Message
      </h6>

      <h2 style={{ fontWeight: '700', marginBottom: '20px' }}>
        Muhammad Arif Jameel
      </h2>

      <p style={{ fontSize: '1rem', lineHeight: '1.7', maxWidth: '650px' }}>
        <span
          style={{
            color: '#39a943',
            fontSize: '2rem',
            fontWeight: 'bold',
            verticalAlign: 'middle',
            marginRight: '8px',
          }}
        >
          “
        </span>
        Bitech Global aims to be the largest software solutions company. We
        mostly deal in Apps development, Games developments and web solutions
        for our clients. We don't compromise on quality. Bitech Global proves
        to be a dream come true by its team. Our team work and experienced
        team of well-skilled developers, designers and marketing staff make us
        proud company all over the globe.
      </p>

      <p
        style={{
          fontFamily: 'cursive',
          fontSize: '1.5rem',
          marginTop: '22px',
          marginBottom: '0',
        }}
      >
        Muhammad Arif Jameel
      </p>
      <p style={{ marginTop: '3px' }}>Managing Director</p>
    </div>

    <div className="col-lg-6 text-center">
      <img
        src={arif}
        alt="Muhammad Arif Jameel, Managing Director"
        style={{
          width: '100%',
          maxWidth: '430px',
          height: '280px',
          objectFit: 'cover',
          borderRadius: '22px',
        }}
      />
    </div>
  </div>
  </div>
</section>



{/* Contact Us */}
<section style={{ padding: '70px 8vw 100px', background: '#fff' }}>
  <div className='container'>
  <div className="text-center mb-5">
    <h6 style={{ color: '#39a943', fontWeight: '700' }}>Contact Us</h6>
    <h2 style={{ fontWeight: '700', marginTop: '15px' }}>
      Get in Touch with Us
    </h2>
  </div>

  <div className="row g-4 align-items-stretch">
    <div className="col-lg-4">
      <div
        style={{
          height: '100%',
          minHeight: '290px',
          borderRadius: '14px',
          padding: '30px',
          color: '#fff',
          background:
            'linear-gradient(rgba(0,0,0,.78), rgba(0,0,0,.78)), radial-gradient(#2a8e32 1px, transparent 1px)',
          backgroundSize: 'auto, 18px 18px',
        }}
      >
        <h6 style={{ fontWeight: '700' }}>Address</h6>
        <p style={{ fontSize: '.9rem', lineHeight: '1.5' }}>
          Serene Plaza, Building No. C 6, 7, 2nd Floor, Sector F, DHA Phase 1,
          Islamabad, Pakistan.
        </p>

        <h6 style={{ fontWeight: '700', marginTop: '22px' }}>Contact</h6>
        <p style={{ fontSize: '.9rem', marginBottom: '4px' }}>
          <i className="bi bi-telephone-fill me-2" />
          +92 300 5005086
        </p>
        <p style={{ fontSize: '.9rem' }}>
          <i className="bi bi-envelope-fill me-2" />
          info@bitechglobal.com
        </p>

        <h6 style={{ fontWeight: '700', marginTop: '22px' }}>Open Time</h6>
        <p style={{ fontSize: '.9rem' }}>Monday - Friday: 9:00 am - 6:00 pm</p>

        <h6 style={{ fontWeight: '700', marginTop: '22px' }}>Follow Us</h6>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noreferrer"
          className="btn btn-success btn-sm rounded-circle me-2"
        >
          <i className="bi bi-facebook" />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="btn btn-success btn-sm rounded-circle"
        >
          <i className="bi bi-linkedin" />
        </a>
      </div>
    </div>

    <div className="col-lg-8">
      <form onSubmit={handleContactSubmit}>
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Your Name *</label>
            <input
              name="name"
              type="text"
              className="form-control"
              placeholder="Ex. Jhon Doe"
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Email *</label>
            <input
              name="email"
              type="email"
              className="form-control"
              placeholder="example@gmail.com"
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Phone *</label>
            <input
              name="phone"
              type="tel"
              className="form-control"
              placeholder="Enter Phone Number"
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Subject *</label>
            <input
              name="subject"
              type="text"
              className="form-control"
              placeholder="Enter subject"
              required
            />
          </div>

          <div className="col-12">
            <label className="form-label">Your Message *</label>
            <textarea
              name="message"
              className="form-control"
              rows="4"
              placeholder="Enter here..."
              required
            />
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-dark px-4">
              <i className="bi bi-send-fill me-2" />
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
  </div>
</section>



<Footer navigate={navigate} />

    </>
    
  );
};

export default Home;