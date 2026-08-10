import React, { useState, useEffect } from 'react';
import axios from "axios";
import Office1 from './Office1.jpg';
import People from './People.jpg';
import Corp from './Corp.jpg';
import Footer from './Footer';




const linkStyle = {
  color: '#ddd',
  textDecoration: 'none',
  transition: '0.3s ease',
  cursor: 'pointer',
};

const LifeAt = ({navigate}) => {
  
  
const [selectedImage, setSelectedImage] = useState(null);

const [activeTab, setActiveTab] = useState("activities");

const [galleryData, setGalleryData] = useState({
  activities: [],
  events: [],
  celebrations: [],
  meetup: [],
});

useEffect(() => {
  const fetchGallery = async () => {
    try {
      const [
        activities,
        events,
        celebrations,
        meetup,
      ] = await Promise.all([
        axios.get(
          "http://localhost:5000/api/gallery/category/Activities"
        ),
        axios.get(
          "http://localhost:5000/api/gallery/category/Events"
        ),
        axios.get(
          "http://localhost:5000/api/gallery/category/Celebrations"
        ),
        axios.get(
          "http://localhost:5000/api/gallery/category/Google Meetup"
        ),
      ]);

      setGalleryData({
        activities: activities.data,
        events: events.data,
        celebrations: celebrations.data,
        meetup: meetup.data,
      });
    } catch (error) {
      console.error(error);
    }
  };

  fetchGallery();
}, []);




  const GalleryCard = ({ image, onClick }) => (
  <div
    onClick={() => onClick(image)}
    style={{
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
      cursor: 'pointer',
      background: '#fff',
    }}
  >
    <img
      src={image}
      alt=""
      style={{
        width: '100%',
        height: '350px',
        objectFit: 'cover',
        display: 'block',
      }}
    />
  </div>
);

const ThreeCardRow = ({ children }) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '25px',
    }}
  >
    {children}
  </div>
);



  return (
    
    <>
      {/* Hero Section */}
      {/* About Hero Banner */}
           <section
             style={{
               backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(${Corp})`,
               backgroundSize: 'cover',
               backgroundPosition: 'center 28%',
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
                 Home / Life At
               </p>
             </div>
           </section>
      

      
<section style={{ padding: '70px 8vw 100px', background: '#fff' }}>
  <div className='container'>
  <div className="text-center mb-5">
   <h1
  style={{
    color: '#39a943',
    fontWeight: 650,
    fontSize: '1.5rem',
  }}
>
  Our Memory
</h1>
    <h2 style={{ fontWeight: '700', marginTop: '15px' }}>
      Bitech Global,Capture Memories
    </h2>
  </div>
  </div>
</section>














{/* Tabs + Gallery */}
<section
  style={{
    padding: '30px  70px',
    marginTop: '-110px',
  }}
>
  <div className="container">

    {/* Tabs */}
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '0',
        marginBottom: '40px',
      }}
    >
      {[
        { id: 'activities', label: 'Activities' },
        { id: 'events', label: 'Events' },
        { id: 'celebrations', label: 'Celebrations' },
        { id: 'meetup', label: 'Google Meetup' },
      ].map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          style={{
            background: '#fff',
            color:
              activeTab === tab.id
                ? '#4CAF50'
                : '#0d6efd',
            border: '1px solid #e5e5e5',
            borderBottom:
              activeTab === tab.id
                ? '3px solid #4CAF50'
                : '3px solid transparent',
            borderRadius: '8px 8px 0 0',
            padding: '16px 28px',
            fontWeight: '500',
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            minWidth: '170px',
            marginRight: '-1px',
          }}
        >
          {tab.label}
        </button>
      ))}
    </div>




    {/* Image Grid */}


    {/* Gallery Cards */}
{/* Gallery Cards */}
<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "25px",
  }}
>
  {galleryData[activeTab].map((image) => (
    <GalleryCard
      key={image.id}
      image={`http://localhost:5000${image.imageUrl}`}
      onClick={setSelectedImage}
    />
  ))}
</div>
  </div>
  

  
  
</section>







{/* Image Lightbox */}
{selectedImage && (
  <div
    onClick={() => setSelectedImage(null)}
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0,0,0,0.9)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 99999,
      padding: '50px',
    }}
  >
    <div
      onClick={(e) => e.stopPropagation()}
      style={{
        position: 'relative',
        maxWidth: '90%',
        maxHeight: '90%',
      }}
    >
      <button
        onClick={() => setSelectedImage(null)}
        style={{
          position: 'absolute',
          top: '-50px',
          right: '0',
          background: 'none',
          border: 'none',
          color: '#fff',
          fontSize: '2.5rem',
          cursor: 'pointer',
        }}
      >
        ×
      </button>

      <img
        src={selectedImage}
        alt="Preview"
        style={{
          maxWidth: '100%',
          maxHeight: '85vh',
          borderRadius: '12px',
          display: 'block',
        }}
      />
    </div>
  </div>
)}

<Footer navigate={navigate} />

    </>
  );
};

export default LifeAt;
