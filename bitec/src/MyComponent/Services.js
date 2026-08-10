import React from 'react';
import Art from './Art.jpg';
import Andr from './Andr.png';
import Xcode from './Xcode.png';
import Fig from './Fig.png';
import Adobe from './Adobe.png';
import Unity from './Unity.png';
import Goog from './Goog.png';
import Appr from './Appr.png';
import Meta from './Meta.png';
import Ai from './Ai.png';
import Web from './Web.png';
import Rest from './Rest.png';
import Cloud from './Cloud.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from './Footer';
import { 
  
  faGlobe,
  faGamepad,
  faBullhorn,
  faPen,
  faGears,
  faCartShopping,
  faMagnifyingGlass,
  faPalette,
  faIdCard,
  faPassport
} from "@fortawesome/free-solid-svg-icons";

import { 
  faAndroid,
  faApple
} from "@fortawesome/free-brands-svg-icons";

const linkStyle = {
  color: '#ddd',
  textDecoration: 'none',
  transition: '0.3s ease',
  cursor: 'pointer',
};

const cardStyle = {
  background: "#fff",
  border: "1px solid #eee",
  borderRadius: "12px",
  padding: "35px 25px",
  textAlign: "center",
  height: "100%",
};



const Services = ({navigate}) => {
  return (
    <>
      {/* About Hero Banner */}
     <section
       style={{
         backgroundImage: `linear-gradient(rgba(0,0,0,0.50), rgba(0,0,0,0.65)), url(${Art})`,
         backgroundSize: 'cover',
         backgroundPosition: 'center 39%',
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
           Home / Services
         </p>
       </div>
     </section>




<section className="py-5">
        <div className="container">
          <h4 style={{ fontSize:'18px', color: '#4CAF50', fontWeight: 'bold' }}>Our Services</h4>
      
          <h1
            style={{
              fontWeight: 'bold',
              marginTop: '2vh',
              marginBottom: 0,
            }}
          >
            Discover What We Can 
          </h1>
      
          <h1 style={{ fontWeight: 'bold', marginBottom: '3rem' }}>
            Offer You
          </h1>
          </div>
          </section>


<section className='"py=5"'>
  <div className="container " >
    <p
  style={{
    marginTop: "-80px", 
  }}
>
  Unlock the full potential of your digital vision with our comprehensive
  services. From mobile app and web development to iOS-specific solutions,
  we build high-performance platforms tailored to your needs. Our expert
  team ensures every project is scalable, responsive, and future-ready.
</p>

<p className="Discover">
  We also craft intuitive UI/UX designs, eye-catching graphics, and
  result-driven ASO and SEO strategies to boost visibility and engagement.
  Backed by smart digital marketing, we help you reach the right audience
  at the right time, ensuring your brand stands out in today’s competitive
  landscape.
</p>
</div>
</section>







<div className="container">
  <div className="row align-items-start">
    <div className="col-lg-6">
      <div className="service-card mb-4">      
            <div className="d-flex justify-content-center align-items-center rounded-4 mb-3"
    style={{
      width: "64px",
      height: "64px",
      background: "#E8F5E9",
    }}
  >
    <FontAwesomeIcon
  icon={faAndroid}
  style={{
    color: "#4CAF50",
    fontSize: "30px",
  }}
/>
  </div>

  <h4 className="fw-bold">App Development</h4>
           <p>
    At BiTech Global, we specialize in building high-performance mobile
    applications that bring your ideas to life—right in the palm of your users'
    hands. Our mobile development team creates intuitive, scalable, and
    feature-rich apps tailored for both iOS and Android platforms. Whether
    you're launching a new product, streamlining internal processes, or
    enhancing customer engagement, we design and develop mobile solutions that
    align with your business goals. From initial concept to deployment and
    ongoing support, our approach ensures a seamless user experience backed by
    the latest technologies.
  </p>

  <p>Our mobile app development services include:</p>

  <ul>
    <li>Custom iOS & Android App Development</li>
    <li>Cross-Platform Solutions (Flutter, React Native)</li>
    <li>UI/UX Design Focused on Mobile Experience</li>
    <li>API Integration & Backend Development</li>
    <li>App Testing & Quality Assurance</li>
    <li>App Store Deployment & Support</li>
  </ul>

  <p>
    Empower your business with a mobile presence that delivers performance,
    usability, and results. Let BiTech Global be your partner in turning
    concepts into powerful mobile experiences.
  </p>
      </div>

      <div className="service-card mb-4">
        <div className="d-flex justify-content-center align-items-center rounded-4 mb-3"
    style={{
      width: "64px",
      height: "64px",
      background: "#E8F5E9",
    }}
  >
    <FontAwesomeIcon
  icon={faGamepad}
  style={{
    color: "#4CAF50",
    fontSize: "30px",
  }}
/>
  </div>
        <h4 className='fw-bold'>Game Development</h4>
          <p>
    BiTech Global creates high-quality 3D games for iOS and Android, delivering immersive experiences across a variety of genres from simulations to infotainment and entertainment. Our expert team blends creativity with technology to build engaging, visually rich games that perform seamlessly across platforms. Whether you're launching a casual game or a complex interactive experience, we turn your vision into reality with precision and innovation. </p>
      </div>

      <div className="service-card mb-4">
        <div className="d-flex justify-content-center align-items-center rounded-4 mb-3"
    style={{
      width: "64px",
      height: "64px",
      background: "#E8F5E9",
    }}
  >
    <FontAwesomeIcon
  icon={faBullhorn}
  style={{
    color: "#4CAF50",
    fontSize: "30px",
  }}
/>
  </div>
        <h4 className='fw-bold'>Digital Marketing</h4>
        <p>Strategic. Scalable. Results-Driven.</p>
        <p>In an increasingly digital world, a strong online presence is critical to business success. At Bitech Pvt Limited, we deliver comprehensive digital marketing solutions designed to enhance brand visibility, attract qualified leads, and drive sustainable growth.
</p>
        <p>Our approach is rooted in strategy, creativity, and data. Whether you're aiming to improve search engine rankings, expand your social media footprint, or launch high-converting ad campaigns, our team of digital experts works closely with you to create tailored strategies that align with your business objectives.</p>
      </div>
      <div className="service-card mb-4">
        <div className="d-flex justify-content-center align-items-center rounded-4 mb-3"
    style={{
      width: "64px",
      height: "64px",
      background: "#E8F5E9",
    }}
  >
    <FontAwesomeIcon
  icon={faPen}
  style={{
    color: "#4CAF50",
    fontSize: "30px",
  }}
/>
  </div>
        <h4 className='fw-bold'>UI / UX Design</h4>
        <p>At BiTech Global, we design experiences that make technology feel effortless. Our UI/UX team focuses on creating clean, user-friendly interfaces that not only look great but work beautifully across all devices. We take the time to understand your users, your goals, and your brand then bring it all together through thoughtful design. From the first wireframe to the final screen, we pay attention to the details that shape user behavior and satisfaction. Whether it’s a mobile app, web platform, or a full-scale product, we make sure the experience is smooth, intuitive, and engaging at every step. Great design isn’t just about visuals it’s about solving real problems through clarity and simplicity. That’s what we do best.</p>
      </div>
      <div className="service-card mb-4">
        <div className="d-flex justify-content-center align-items-center rounded-4 mb-3"
    style={{
      width: "64px",
      height: "64px",
      background: "#E8F5E9",
    }}
  >
    <FontAwesomeIcon
  icon={faGears}
  style={{
    color: "#4CAF50",
    fontSize: "30px",
  }}
/>
  </div>
         <h4 className='fw-bold'>ERP Solutions</h4>
         <p className='fw-bold'>Empower Your Business with Intelligent ERP</p>
        <p> Our ERP solutions are built to align with your business processes, integrating all departments — from finance to HR and operations — into a single smart platform. Whether you're a growing startup or an enterprise, we design and deploy custom ERP systems that scale with you.</p>
<p>Capabilities:</p>
      <ul>
    <li>Centralized Dashboard for Real-Time Insights</li>
    <li>Inventory & Supply Chain Management</li>
    <li>Payroll, HRM, and Financial Reporting</li>
    <li>Role-Based Access & User Management</li>
    <li>Custom Workflow Automation</li>
  </ul>
  <p>Reimagine productivity with our powerful ERP platforms, optimized for flexibility and performance.</p>
      </div>
      <div className="service-card mb-4">
        <div className="d-flex justify-content-center align-items-center rounded-4 mb-3"
    style={{
      width: "64px",
      height: "64px",
      background: "#E8F5E9",
    }}
  >
    <FontAwesomeIcon
  icon={faCartShopping}
  style={{
    color: "#4CAF50",
    fontSize: "30px",
  }}
/>
  </div>
        <h4 className='fw-bold'>E-commerce Development</h4>
        
        <p>Whether you're a retailer starting your digital journey or an established brand looking to scale, we develop high-performance e-commerce platforms that drive sales and offer seamless user experiences. From Shopify and WooCommerce to custom Laravel or CodeIgniter-based stores — we build for success.</p> <ul>
    <p>E-commerce Services:</p>
    <li>Custom Store Design & Development</li>
    <li>Payment Gateway Integration</li>
    <li>Product Management System</li>
    <li>SEO & Conversion Optimization</li>
    <li>Mobile-Responsive Design</li> <li>Product Management System</li>
    <li>Order Tracking & Inventory Management</li>
  </ul>
  <p>Launch your store with us — your e-commerce success starts here.</p>
        
      </div>
    </div>

   
    <div className="col-lg-6">
      <div className="service-card mb-4">
        <div className="d-flex justify-content-center align-items-center rounded-4 mb-3"
    style={{
      width: "64px",
      height: "64px",
      background: "#E8F5E9",
    }}
  >
    <FontAwesomeIcon
  icon={faApple}
  style={{
    color: "#4CAF50",
    fontSize: "30px",
  }}
/>
  </div>
       <h4 className=' service-icon.light fw-bold'>IOS Development</h4>
          <p>
    We specialize in transforming ideas into fully functional mobile applications. With a passion for innovation, a creative mindset, and proven experience in product development, we bring concepts to life. Our team develops high-quality apps for Android, iOS, and Unity, delivering seamless solutions across all major mobile platforms.</p></div>

      <div className="service-card mb-4">
        <div className="d-flex justify-content-center align-items-center rounded-4 mb-3"
    style={{
      width: "64px",
      height: "64px",
      background: "#E8F5E9",
    }}
  >
    <FontAwesomeIcon
  icon={faGlobe}
  style={{
    color: "#4CAF50",
    fontSize: "30px",
  }}
/>
  </div>
       <h4 className='fw-bold'>Web Development</h4>
        <p>At BiTech Global, we go beyond writing code, we build meaningful digital experiences. Our expertise in website development transforms ideas into powerful online platforms that engage and inspire. With a strong focus on innovation and user-centered design, we create websites that not only stand out visually but also enhance your brand’s online presence. Discover the difference of seamless, results-driven web development with BiTech Global, where every interaction tells your story with purpose and precision.</p>
        
      </div>

      <div className="service-card mb-4">
        <div className="d-flex justify-content-center align-items-center rounded-4 mb-3"
    style={{
      width: "64px",
      height: "64px",
      background: "#E8F5E9",
    }}
  >
    <FontAwesomeIcon
  icon={faMagnifyingGlass}
  style={{
    color: "#4CAF50",
    fontSize: "30px",
  }}
/>
  </div>
        <h4 className='fw-bold'>ASO & SEO</h4>
           <p>
    Getting your app noticed in a crowded marketplace takes more than just great development — it needs smart optimization. At BiTech Global, our ASO experts help your app stand out on the App Store and Google Play by improving visibility, increasing downloads, and driving better user engagement. We focus on keyword strategy, compelling app descriptions, optimized visuals, and performance tracking to ensure your app reaches the right audience. Whether you’re launching a new app or looking to boost an existing one, we tailor our ASO strategy to match your goals and market trends.
  </p>

  <p>Our ASO services include:</p>

  <ul>
    <li>Keyword Research & Implementation</li>
    <li>App Title & Description Optimization</li>
    <li>Creative Assets (Icons, Screenshots, Preview Videos)</li>
    <li>Review & Rating Management</li>
    <li>Competitor Analysis & Reporting</li>
  </ul>
  <p>Search Engine Optimization (SEO)</p>
  <p>
    Your website is your digital storefront and SEO is what brings people to the door. At BiTech Global, we craft customized SEO strategies that help your business rank higher, get noticed faster, and grow organically. From technical SEO and on-page optimization to content strategy and link building, our team ensures your online presence is strong, search-friendly, and aligned with the latest algorithm updates. We don’t believe in shortcuts — just honest, data-driven work that delivers long-term results.
  </p>
<p>Our SEO services include:</p>
<ul>
    <li>Website Audit & Technical SEO</li>
    <li>Keyword Research & Content Planning</li>
    <li>On-Page & Off-Page Optimization</li>
    <li>Backlink Strategy & Outreach</li>
    <li>Performance Monitoring & Reporting</li>
  </ul>
      </div>

      <div className="service-card mb-4">
        <div className="d-flex justify-content-center align-items-center rounded-4 mb-3"
    style={{
      width: "64px",
      height: "64px",
      background: "#E8F5E9",
    }}
  >
    <FontAwesomeIcon
  icon={faPalette}
  style={{
    color: "#4CAF50",
    fontSize: "30px",
  }}
/>
  </div>
        <h4 className='fw-bold'>Graphic Design</h4>
          <p>
    At BiTech Global, we believe that strong visuals are at the heart of every great brand. Our graphic design services focus on creating compelling, high-quality designs that communicate your message with clarity and creativity. From concept to completion, we ensure every design aligns with your brand identity and captures your audience’s attention. Whether you need a brand-new logo, marketing materials, social media visuals, or corporate stationery, our team brings fresh ideas and professional execution to every project. We combine thoughtful design with a deep understanding of your goals to deliver visuals that not only look good but serve a clear purpose.
      </p></div>

      <div className="service-card mb-4">
        <div className="d-flex justify-content-center align-items-center rounded-4 mb-3"
    style={{
      width: "64px",
      height: "64px",
      background: "#E8F5E9",
    }}
  >
    <FontAwesomeIcon
  icon={faIdCard}
  style={{
    color: "#4CAF50",
    fontSize: "30px",
  }}
/>
  </div>
        <h4 className='fw-bold'>CRM Solutions</h4>
          <p>
    Our CRM solutions enable you to track leads, manage customers, automate communication, and drive conversions — all from one unified platform. We help you turn every interaction into a business opportunity.</p>
      
      <p>Key Features:</p>
<ul>
    <li>Lead & Contact Management</li>
    <li>Sales Funnel Automation</li>
    <li>Customer Support Ticketing</li>
    <li>Email & SMS Campaign Integration</li>
    <li>Detailed Analytics & Reporting</li>
  </ul>
  <p>With our CRM tools, grow your customer base while keeping relationships strong and personal.</p>
  </div>
      <div className="service-card mb-4">
        <div className="d-flex justify-content-center align-items-center rounded-4 mb-3"
    style={{
      width: "64px",
      height: "64px",
      background: "#E8F5E9",
    }}
  >
    <FontAwesomeIcon
  icon={faPassport}
  style={{
    color: "#4CAF50",
    fontSize: "30px",
  }}
/>
  </div>
        <h4 className='fw-bold'>Visa Services</h4>
          <p>
   At Bitech Global, we transform complex visa processes into smooth digital journeys. Our visa management solutions streamline everything from application tracking to document verification and real-time updates. Whether you're an agency or an individual consultant, our system enhances transparency, reduces processing time, and improves client communication.
Features:
Online Application Portal
Document Upload & Verification
Real-Time Status Tracking
Multi-country Visa Workflow Support
Secure Data Handling & GDPR Compliant
Let us help you digitalize your visa services and deliver a seamless experience to your clients. </p>
      </div>
    </div>
  </div>
</div>







<section className="py-5">
  <div className="container text-center">

    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        marginBottom: "15px",
      }}
    >
      <h4
        style={{
          fontSize: "16px",
          color: "#111",
          fontWeight: "700",
          margin: 0,
        }}
      >
        Our Tools
      </h4>

      <span
        style={{
          width: "30px",
          height: "2px",
          backgroundColor: "#0d6efd",
          display: "inline-block",
        }}
      ></span>
    </div>

    <h1
      style={{
        fontWeight: "700",
        fontSize: "38px",
        margin: 0,
        color: "#101820",
      }}
    >
      Our Design and Development Tools
    </h1>

  </div>
</section>


<section style={{ padding: "40px 20px", background: "#fff" }}>
  <div className="container">
    <div className="row g-4">

      {/* Card 1 */}
      <div className="col-lg-3 col-md-6">
        <div
          style={{
            background: "#fff",
            border: "1px solid #eee",
            borderRadius: "12px",
            padding: "35px 25px",
            textAlign: "center",
            height: "100%",
          }}
        >
            <img
    src={Andr}
    alt="Android Studio"
    style={{
      width: "55px",
      height: "55px",
      objectFit: "contain",
      marginBottom: "15px",
    }}
  />
          <h4 style={{ fontWeight: "600", marginBottom: "15px" }}>
            Android Studio
          </h4>
          <p style={{ color: "#666", margin: 0 }}>
            Android app development and deployment solutions.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="col-lg-3 col-md-6">
        <div
          style={{
            background: "#fff",
            border: "1px solid #eee",
            borderRadius: "12px",
            padding: "35px 25px",
            textAlign: "center",
            height: "100%",
          }}
        >
          <img
    src={Xcode}
    alt="Android Studio"
    style={{
      width: "55px",
      height: "55px",
      objectFit: "contain",
      marginBottom: "15px",
    }}
  />
          <h4 style={{ fontWeight: "600", marginBottom: "15px" }}>Xcode</h4>
          <p style={{ color: "#666", margin: 0 }}>
            Apple's official IDE for developing seamless iOS and macOS apps.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="col-lg-3 col-md-6">
        <div
          style={{
            background: "#fff",
            border: "1px solid #eee",
            borderRadius: "12px",
            padding: "35px 25px",
            textAlign: "center",
            height: "100%",
          }}
        >
          <img
    src={Fig}
    alt="Android Studio"
    style={{
      width: "55px",
      height: "55px",
      objectFit: "contain",
      marginBottom: "15px",
    }}
  />
          <h4 style={{ fontWeight: "600", marginBottom: "15px" }}>Figma</h4>
          <p style={{ color: "#666", margin: 0 }}>
            Collaborative design tool for creating user interfaces and interactive prototypes.
          </p>
        </div>
      </div>

      {/* Card 4 */}
      <div className="col-lg-3 col-md-6">
        <div
          style={{
            background: "#fff",
            border: "1px solid #eee",
            borderRadius: "12px",
            padding: "35px 25px",
            textAlign: "center",
            height: "100%",
          }}
        >
          <img
    src={Adobe}
    alt="Android Studio"
    style={{
      width: "55px",
      height: "55px",
      objectFit: "contain",
      marginBottom: "15px",
    }}
    ></img>
          <h4 style={{ fontWeight: "600", marginBottom: "15px" }}>Adobe</h4>
          <p style={{ color: "#666", margin: 0 }}>
            Creative software suite for design, video, and digital content creation.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>



<section style={{ paddingtop: "10px 20px", background: "#fff" }}>
  <div className="container">
    <div className="row g-3">

      {/* Card 1 */}
      <div className="col-lg-3 col-md-6">
        <div style={cardStyle}>
            <img
    src={Unity}
    alt="Android Studio"
    style={{
      width: "55px",
      height: "55px",
      objectFit: "contain",
      marginBottom: "15px",
    }}
    ></img>
          <h4>Unity 3D</h4>
          <p>Real-time development platform for creating interactive 2D, 3D, and VR experiences.</p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="col-lg-3 col-md-6">
        <div style={cardStyle}>
          <img
    src={Goog}
    alt="Android Studio"
    style={{
      width: "55px",
      height: "55px",
      objectFit: "contain",
      marginBottom: "15px",
    }}
    ></img>
          <h4>Google Ads</h4>
          <p>Online advertising platform to reach audiences across Google's vast network.</p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="col-lg-3 col-md-6">
        <div style={cardStyle}>
           <img
    src={Appr}
    alt="Android Studio"
    style={{
      width: "55px",
      height: "55px",
      objectFit: "contain",
      marginBottom: "15px",
    }}
    ></img>
          <h4>Apple Search Ads</h4>
          <p>Promote your app directly in the App Store search results.</p>
        </div>
      </div>

      {/* Card 4 */}
      <div className="col-lg-3 col-md-6">
        <div style={cardStyle}>
           <img
    src={Meta}
    alt="Android Studio"
    style={{
      width: "55px",
      height: "55px",
      objectFit: "contain",
      marginBottom: "15px",
    }}
    ></img>
          <h4>Meta Ads</h4>
          <p>Advertising platform to reach audiences on Facebook, Instagram, and Messenger</p>
        </div>
      </div>

     </div>
  </div>
</section>


<section style={{ padding: "40px 20px", background: "#fff" }}>
  <div className="container">
    <div className="row g-4">

      {/* Card 1 */}
      <div className="col-lg-3 col-md-6">
        <div
          style={{
            background: "#fff",
            border: "1px solid #eee",
            borderRadius: "12px",
            padding: "35px 25px",
            textAlign: "center",
            height: "100%",
          }}
        >
            <img
    src={Web}
    alt="Android Studio"
    style={{
      width: "55px",
      height: "55px",
      objectFit: "contain",
      marginBottom: "15px",
    }}
  />
          <h4 style={{ fontWeight: "600", marginBottom: "15px" }}>
            Web Development
          </h4>
          <p style={{ color: "#666", margin: 0 }}>
            Modern tools like HTML5, CSS3, JavaScript, React, and Bootstrap for responsive web apps.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="col-lg-3 col-md-6">
        <div
          style={{
            background: "#fff",
            border: "1px solid #eee",
            borderRadius: "12px",
            padding: "35px 25px",
            textAlign: "center",
            height: "100%",
          }}
        >
          <img
    src={Ai}
    alt="Android Studio"
    style={{
      width: "55px",
      height: "55px",
      objectFit: "contain",
      marginBottom: "15px",
    }}
  />
          <h4 style={{ fontWeight: "600", marginBottom: "15px",whiteSpace:'nowrap', fontSize:'20px' }}>AI And Machiene Learning</h4>
          <p style={{ color: "#666", margin: 0 }}>
            Smart solutions using OpenAI, TensorFlow, and Python for automation and intelligent systems.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="col-lg-3 col-md-6">
        <div
          style={{
            background: "#fff",
            border: "1px solid #eee",
            borderRadius: "12px",
            padding: "35px 25px",
            textAlign: "center",
            height: "100%",
          }}
        >
          <img
    src={Rest}
    alt="Android Studio"
    style={{
      width: "55px",
      height: "55px",
      objectFit: "contain",
      marginBottom: "15px",
    }}
  />
          <h4 style={{ fontWeight: "600", marginBottom: "15px" }}>REST APIs</h4>
          <p style={{ color: "#666", margin: 0 }}>
           Robust backend integration using RESTful APIs, Node.js, Laravel, and cloud services.
          </p>
        </div>
      </div>

      {/* Card 4 */}
      <div className="col-lg-3 col-md-6">
        <div
          style={{
            background: "#fff",
            border: "1px solid #eee",
            borderRadius: "12px",
            padding: "35px 25px",
            textAlign: "center",
            height: "100%",
          }}
        >
           <img
    src={Cloud}
    alt="Android Studio"
    style={{
      width: "55px",
      height: "55px",
      objectFit: "contain",
      marginBottom: "15px",
    }}
  />
          <h4 style={{ fontWeight: "600", marginBottom: "15px" }}>Cloud & DevOps</h4>
          <p style={{ color: "#666", margin: 0 }}>
            Scalable deployments using AWS, Google Cloud, CI/CD pipelines, and Docker.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>





<Footer navigate={navigate} />





</>
  );
}

export default Services;
