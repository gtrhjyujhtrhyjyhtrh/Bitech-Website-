import React from 'react';
import Office1 from './Office1.jpg';
import Comp from './Comp.jpg';
import Rob from './Rob.jpg';
import Footer from './Footer';
import Office2 from "./Office2.jpg";
const statNumberStyle = {
  color: '#4CAF50',
  fontWeight: 'bold',
  fontSize: '3rem',
  margin: 0,
};

const statUnitStyle = {
  color: '#000',
  fontSize: '1.4rem',
  fontWeight: '600',
};


const statTextStyle = {
  color: '#555',
  marginTop: '0.5rem',
  lineHeight: '1.7',
};

const linkStyle = {
  color: '#ddd',
  textDecoration: 'none',
  transition: '0.3s',
};

const AboutUs = ({ navigate }) => {
  return (
    <>

    {/* About Hero Banner */}
<section
  style={{
    backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(${Comp})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '300px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: '#fff',
  }}
>
  <div className="container">
    

    <p
      style={{
        margin: 0,
        fontSize: '1rem',
      }}
    >
      Home / About Us
    </p>
  </div>
</section>
      
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
      
              <div className="mt-4">
                
      
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
    backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(${Rob})`,
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

<Footer navigate={navigate} />


 </>
  );
};

export default AboutUs;