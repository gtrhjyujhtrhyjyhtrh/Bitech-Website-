import React, { useRef, useState, useEffect } from 'react';
import Office1 from './Office1.jpg';
import axios from "axios";
import Footer from './Footer';

const linkStyle = {
  color: '#ddd',
  textDecoration: 'none',
  transition: '0.3s ease',
  cursor: 'pointer',
};

const Careers = ({ navigate }) => {
  const applicationRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const applyNow = () => applicationRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });









  const submitApplication = async (event) => {
  event.preventDefault();

  const form = event.currentTarget;

  try {
    const formData = new FormData(form);

    const response = await axios.post(
      "http://localhost:5000/api/applications",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    if (response.data.success) {
      alert("Application submitted successfully!");
      setSubmitted(true);
      form.reset();
    }
  } catch (error) {
    console.error("Application Error:", error);
    alert("Failed to submit application.");
  }
};
const [selectedCareerId, setSelectedCareerId] =
  useState(null);

  

const [careers, setCareers] = useState([]);

useEffect(() => {
  fetchCareers();
}, []);

const fetchCareers = async () => {
  try {
    const response = await axios.get(
      "http://localhost:5000/api/careers"
    );

    setCareers(
      response.data.filter(
        (career) => career.status === true
      )
    );
  } catch (error) {
    console.error(error);
  }
  
};




  

  return <main className="careers-page">
    <section className="careers-content">
      <h1>Join Our Team</h1><p className="careers-eyebrow">Open Positions</p>

    {careers.map((career) => (
  <div
    key={career.id}
    className="card p-4 mb-4"
  >
    <h4
      style={{
        color: "#39a943",
        fontWeight: "700",
      }}
    >
      {career.title}
    </h4>

    <p>{career.description}</p>

    {career.departments && (
      <>
        <h5>Internship Departments</h5>
        <ul>
  {career.departments
    ?.split("\n")
    .filter(Boolean)
    .map((item, index) => (
      <li key={index}>{item}</li>
    ))}
</ul>
      </>
    )}

    {career.learningPoints && (
  <>
    <h5
      style={{
        fontWeight: "700",
        marginTop: "20px",
      }}
    >
      What You'll Learn
    </h5>

    <ul>
      {career.learningPoints
        ?.split("\n")
        .filter(Boolean)
        .map((item, index) => (
          <li key={index}>{item}</li>
        ))}
    </ul>
  </>
)}

{career.eligibility && (
  <>
    <h5
      style={{
        fontWeight: "700",
        marginTop: "20px",
      }}
    >
      Eligibility
    </h5>

    <ul>
      {career.eligibility
        ?.split("\n")
        .filter(Boolean)
        .map((item, index) => (
          <li key={index}>{item}</li>
        ))}
    </ul>
  </>
)}

    <h5>Location</h5>
    <p>{career.location}</p>

    <h5>How to Apply</h5>

    <p>Email: {career.applyEmail}</p>
    <p>WhatsApp: {career.whatsapp}</p>

   <div style={{ textAlign: "left" }}>
  <button
    onClick={() => {
      setSelectedCareerId(career.id);
      applyNow();
    }}
    style={{
      background: "#fff",
      color: "#39a943",
      border: "1px solid #39a943",
      padding: "5px 12px",
      borderRadius: "2px",
      fontSize: "12px",
      cursor: "pointer",
    }}
  >
    Apply Now
  </button>
  </div>
  </div>
))}  

      <section className="application-card" ref={applicationRef}><h2>Apply Now</h2><form onSubmit={submitApplication}>
        <label className="resume-label">Upload Resume<span className="resume-dropzone">Drag and drop your resume here or click to select<br /><small>(pdf, doc, docx)</small><input type="file" name="resume" accept=".pdf,.doc,.docx" required /></span></label>
        <label>Username<input name="username" placeholder="Enter your username" required /></label><label>Email<input type="email" name="email" placeholder="Enter your email" required /></label><label>Phone Number<input name="phone" type="tel" placeholder="Enter your Phone number" required /></label><label>Cover Letter<textarea name="coverLetter" rows="6" placeholder="Enter your cover letter" required /></label><button type="submit" className="submit-application">Submit Application</button>{submitted && <p className="application-note">Your email app is opening. Please attach the selected resume before sending.</p>}
      </form></section>
    </section>


<Footer navigate={navigate} />


  </main>;
};

export default Careers;
