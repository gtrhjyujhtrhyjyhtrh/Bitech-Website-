import React, { useEffect, useState } from "react";
import axios from "axios";
import Partner1 from "./Partner1.png";
import Partner2 from "./Partner2.png";
import Partner3 from "./Partner3.png";
import Partner4 from "./Partner4.png";
import Partner5 from "./Partner5.png";
import Partner6 from "./Partner6.png";
import "./Footer.css";

const partners = [
  Partner1,
  Partner2,
  Partner3,
  Partner4,
  Partner5,
  Partner6,
];

const linkStyle = {
  color: "#ddd",
  textDecoration: "none",
  transition: "0.3s",
};

function Footer({ navigate }) {
  const [footerLinks, setFooterLinks] = useState([]);

  useEffect(() => {
    fetchFooter();
  }, []);

  const fetchFooter = async () => {
    try {
      const response =await axios.get("http://localhost:5000/api/footer");
      setFooterLinks(response.data.filter((item) => item.visible));
    } catch (error) {
      console.error(error);
    }
  };
  const [displayText, setDisplayText] = useState("");
const fullText = "Send us a message!";
const [showDots, setShowDots] = useState(false);

useEffect(() => {
  let index = 0;

  const typingInterval = setInterval(() => {
    if (index < fullText.length) {
      setDisplayText(fullText.slice(0, index + 1));
      index++;
    } else {
      clearInterval(typingInterval);

      setTimeout(() => {
        setShowDots(true);
      }, 300);
    }
  }, 80);

  return () => clearInterval(typingInterval);
}, []);


  useEffect(() => {
  const style = document.createElement("style");

style.innerHTML = `
@keyframes pulseWhatsApp {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(37,211,102,0.7);
  }

  70% {
    transform: scale(1.05);
    box-shadow: 0 0 0 15px rgba(37,211,102,0);
  }

  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(37,211,102,0);
  }
}

@keyframes typing {
  0%,80%,100% {
    transform: translateY(0);
    opacity: .4;
  }

  40% {
    transform: translateY(-4px);
    opacity: 1;
  }
}

.typing-dot {
  width: 6px;
  height: 6px;
  background: #25D366;
  border-radius: 50%;
  animation: typing 2.4s infinite;
}

.typing-dot:nth-child(2) {
  animation-delay: .2s;
}

.typing-dot:nth-child(3) {
  animation-delay: .4s;
}
`;

document.head.appendChild(style);

return () => {
  document.head.removeChild(style);
};
  }, []);

  return (
    <>
      {/* Partners & Quote Section */}
      <section
        style={{
          paddingTop: "80px",
          scrollBehavior: "smooth",
          background: "#fff",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <p
                style={{
                  color: "#4CAF50",
                  fontWeight: "600",
                }}
              >
                Our Partner
              </p>

              <h2
                style={{
                  fontWeight: "700",
                  marginBottom: "15px",
                }}
              >
                Our Partners in Success
              </h2>

              <p
                style={{
                  color: "#666",
                  lineHeight: "1.8",
                }}
              >
                Our Partners in Success are trusted collaborators who share our
                vision, contribute expertise, and drive mutual growth through
                innovation, commitment, and long-term strategic relationships
                across industries.
              </p>
            </div>

            <div className="col-lg-7">
              <div
                style={{
                  overflow: "hidden",
                  width: "100%",
                }}
              >
                <div
                  className="partner-slider"
                  style={{
                    display: "flex",
                    width: "max-content",
                    willChange: "transform",
                    gap: "50px",
                  }}
                >
                  {[...partners, ...partners].map((logo, index) => (
                    <img
                      key={index}
                      src={logo}
                      alt=""
                      style={{
                        width: "150px",
                        height: "80px",
                        objectFit: "contain",
                        filter: "grayscale(100%)",
                        transition: "0.3s",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.filter = "grayscale(0%)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.filter = "grayscale(100%)";
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quote Banner */}
        <div className="container">
          <div
            style={{
              background: "#4CAF50",
              color: "white",
              textAlign: "center",
              padding: "2rem",
              borderRadius: "10px",
              maxWidth: "1000px",
              margin: "0 auto",
              position: "relative",
              top: "50px",
              zIndex: 2,
              fontWeight: "bold",
              fontSize: "clamp(1.2rem, 3vw, 2rem)",
            }}
          >
            “ Leading with Innovation, Technology, and Excellence. ”
          </div>
        </div>
      </section>

      {/* Main Dark Footer */}
      <footer
        style={{
          background: "#141b23",
          color: "white",
          paddingTop: "100px",
          paddingBottom: "0px",
        }}
      >
        <div className="container mb-5">
          <div className="row g-4">
            {/* Company */}
            <div className="col-lg-4 col-md-6">
              <h1
                style={{
                  color: "#4CAF50",
                  marginBottom: "1rem",
                  fontWeight: "bold",
                }}
              >
                BiTech
              </h1>

              <p style={{ lineHeight: "1.8", color: "#ddd" }}>
                <strong style={{ color: "#fff" }}>Bitech Global</strong> is the
                leading Apps & Games Development Company in Pakistan heading
                towards excellence. We have marked our presence in the global
                market in a very short span of time.
              </p>
            </div>

            {/* Useful Links */}
            <div className="col-lg-2 col-md-6">
              <h4 style={{ marginBottom: "1.5rem" }}>Useful Links</h4>

              {footerLinks
                .filter((item) => item.section === "useful")
                .map((item) => (
                  <p key={item.id}>
                    <a
                      href={item.route}
                      onClick={(e) => {
                        e.preventDefault();
                        navigate(item.route);
                      }}
                      style={linkStyle}
                    >
                      › {item.title}
                    </a>
                  </p>
                ))}
            </div>

            {/* Services */}
            <div className="col-lg-3 col-md-6">
              <h4 style={{ marginBottom: "1.5rem" }}>Our Services</h4>

              {footerLinks
                .filter((item) => item.section === "services")
                .map((item) => (
                  <p key={item.id}>
                    <a
                      href={item.route}
                      onClick={(e) => {
                        e.preventDefault();
                        navigate(item.route);
                      }}
                      style={linkStyle}
                    >
                      › {item.title}
                    </a>
                  </p>
                ))}
            </div>

            {/* Contact */}
            <div className="col-lg-3 col-md-6">
              <h4 style={{ marginBottom: "1.5rem" }}>Contact Us</h4>

              <p style={{ lineHeight: "1.8" }}>
                Serene Plaza, Building No. C 6, 7,
                <br />
                2nd Floor, Sector F, DHA Phase 1,
                <br />
                Islamabad, Pakistan.
              </p>

              <p style={{ marginTop: "1.5rem" }}>+92 300 5005086</p>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div
          style={{
            background: "#000",
            color: "#fff",
            textAlign: "center",
            padding: "16px 0",
            fontSize: "14px",
            width: "100%",
          }}
        >
          © 2017-2027 Bitech Pvt Ltd. All Rights Reserved.
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
     <div
  style={{
    position: "fixed",
    bottom: "20px",
    right: "20px",
    zIndex: 9999,
    display: "flex",
    alignItems: "center",
  }}
>
  
  {/* Message Bubble */}
<div
  style={{
    background: "#fff",
    borderRadius: "60px",
    padding: "12px 18px",
    marginRight: "-10px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    minWidth: "170px",
  }}
>
  <span
    style={{
      color: "#999",
      fontSize: "14px",
      whiteSpace: "nowrap",
    }}
  >
    {displayText}
  </span>

  {showDots && (
    <div
      style={{
        display: "flex",
        gap: "3px",
      }}
    >
      <span className="typing-dot"></span>
      <span className="typing-dot"></span>
      <span className="typing-dot"></span>
    </div>
  )}
</div>

{/* WhatsApp Button */}
<a
  href="https://wa.me/923005005086"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    width: "64px",
    height: "64px",
    backgroundColor: "#25D366",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    boxShadow: "0 4px 15px rgba(37,211,102,0.5)",
    animation: "pulseWhatsApp 2s infinite",
    position: "relative",
  }}
>
  <i
    className="bi bi-whatsapp"
    style={{
      fontSize: "34px",
      color: "#fff",
    }}
  />
</a>
  </div>

    </>
  );
}

export default Footer;