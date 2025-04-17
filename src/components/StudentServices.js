// src/pages/Services.js
import React from 'react';
import '../components/styles/StudentServices.css'; // Import your CSS for styling

import healthImage from '../images/health.jpg'; // Example
import evangelismImage from '../images/Fellowship.jpg'; // Example
import therapistImage from '../images/Therapist.jpg'; // Example
import socialImage from '../images/social1.jpg'; // Example
import mortgageImage from '../images/mortgage1.png'; // Example


const Services = () => {
  const services = [
    {
      title: "Health Services",
      description: "We provide healthcare services for our community while inside school to help them achieve their academic goals in a healthy way.",
      contact: {
        phone: "0788111222",
        email: "health@auca.ac.rw",
      },
      image: healthImage,
    },
    {
      title: "Evangelism Services",
      description: "We provide evangelism services for our community while inside and outside school to help them connect with God in order to live a fruitful life.",
      contact: {
        phone: "0788111222",
        email: "evangelism@auca.ac.rw",
      },
      image: evangelismImage,
    },
    {
      title: "Therapist Services",
      description: "Our therapist services offer counseling and mental health support for students. Whether you're facing academic or personal challenges.",
      contact: {
        phone: "0788111222",
        email: "therapist@auca.ac.rw",
      },
      image: therapistImage,
    },
    {
      title: "Social Services",
      description: "Our social services team is dedicated to promoting community engagement by organizing various social activities for students.",
      contact: {
        phone: "0788111222",
        email: "social@auca.ac.rw",
      },
      image: socialImage,
    },
    {
      title: "Mortgage Services",
      description: "We provide guidance on mortgage options for students and staff. Our team can assist with applications and financial advice.",
      contact: {
        phone: "0788111222",
        email: "mortgage@auca.ac.rw",
      },
      image: mortgageImage,
    },
  ];

  return (
    <div className="page-container">
      <h5>School Services</h5>
      <h2>Available School Services</h2>
      <div className="service-grid"> {/* Use a grid for card layout */}
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.image} alt={service.title} className="service-image" /> {/* Add image */}
            <div className="service-content"> {/* Content wrapper */}
              <strong className="service-title">{service.title}:</strong>
              <p>{service.description}</p>
              <div className="contact-info">
                <div className="phone">
                  <i className="fas fa-phone-alt"></i>
                  <strong className="service-phone">{service.contact.phone}</strong>
                </div>
                <a href={`mailto:${service.contact.email}`} className="email">
                  <i className="fas fa-envelope"></i>
                  <strong className="service-email">{service.contact.email}</strong>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Services;
