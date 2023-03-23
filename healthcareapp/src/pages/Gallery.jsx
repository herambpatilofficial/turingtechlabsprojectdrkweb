import React from 'react';
import '../styles/Gallery.css';

import doctor1 from '../images/gallery/drk(2).jpeg'
import doctor2 from '../images/gallery/drk(3).jpeg'
import doctor3 from '../images/gallery/drk(4).jpeg'
import doctor4 from '../images/gallery/drk(5).jpeg'
import doctor5 from '../images/gallery/drk(6).jpeg'
import doctor6 from '../images/gallery/drk(7).jpeg'
import doctor7 from '../images/gallery/MAINIMAGE.jpeg'


const Gallery = () => {
  return (
    <div className="gallery">
      <div className="gallery-heading">
        <h1 className="gallery-heading-1">
          People pay the doctor for his trouble;
        </h1>
        <h1 className="gallery-heading-2">
          for his kindness, they still remain in his debt
        </h1>
      </div>
      <div className="gallery-main-heading">
        <h1>Short Glimpses</h1>
      </div>

      <div className="gallery-container">
        <div className="gallery-content">
          <div className="gallery-content-image">
            <img src={doctor7} alt="doctor" />
          </div>

        </div>
        <div className="gallery-content">

          <div className="gallery-content-image">
            <img src={doctor2} alt="doctor" />
          </div>
        </div>
        <div className="gallery-content">
          <div className="gallery-content-image">
            <img src={doctor3} alt="doctor" />
          </div>
     
        </div>
        <div className="gallery-content">
  
          <div className="gallery-content-image">
            <img src={doctor4} alt="doctor" />
          </div>
        </div>
        <div className="gallery-content">
          <div className="gallery-content-image">
            <img src={doctor5} alt="doctor" />
          </div>
         
        </div>
      </div>
      
      

      <div className="gallery-container">
        <div className="gallery-content">
          <div className="gallery-content-image">
            <img src={doctor6} alt="doctor" />
          </div>
    
        </div>
        <div className="gallery-content">
      
          <div className="gallery-content-image">
            <img src={doctor1} alt="doctor" />
          </div>
        </div>
        <div className="gallery-content">
          <div className="gallery-content-image">
            <img src={doctor3} alt="doctor" />
          </div>
       
        </div>
        <div className="gallery-content">
   
          <div className="gallery-content-image">
            <img src={doctor4} alt="doctor" />
          </div>
        </div>
        <div className="gallery-content">
          <div className="gallery-content-image">
            <img src={doctor5} alt="doctor" />
          </div>
          
        </div>
      </div>
    </div>
    

    
  );
};

export default Gallery;
