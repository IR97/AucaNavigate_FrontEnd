import React from 'react';
import './styles/About.css'; // Ensure the CSS has styles for new elements
import { FaFilePdf } from 'react-icons/fa'; // Install react-icons using npm if needed

const About = () => (
  <div className="about-container">
    <h2>FAQs - AUCA (Mostly For Masters Program)</h2>
    <p>
      Adventist University of Central Africa (AUCA) is a private institution of higher learning located in Rwanda.
      Established in 2001, the university aims to provide quality education and foster spiritual growth among students.
    </p>

    <h3>How much is application fee?</h3>
    <p>
    Application fee is a non-refundable Twenty Thousand Rwandan Francs (Frw 30,000) for nationals (Rwandan applicants) and Fifty US Dollars ($50) for the international applicants. The fees are subject to revision from time to time, based on fluctuations of the national currency.
    </p>

    <h3>What do I need to apply?</h3>
    <p>
    Applicants are required to have a recognized degree offered by institution of higher learning in order to qualify for admission in masters programme. Also detailed list of required application documents is found on AUCA website (https://auca.ac.rw/admissions/graduate-requirements/)
    </p>

    <h3>How do I apply?</h3>
    <p>
    Apply to the office of the Registrar or directly to the department (Office of the Director of Graduate Studies). Take note of the list of requirements provided on the department website.
    </p>

    <h3>When can I expect a response regarding admission?</h3>
    <p>
    Admission can take maximum one week to be ready, upon receiving complete application file.
    </p>

    <h3>Who is eligible for AUCA’s Master of Science in Big Data Analytics?</h3>
    <p>1. To be admitted to a Master of Science in Big Data Analytics degree at AUCA, an applicant is required to have a recognized degree in Computer Sciences, with at least a cumulative GPA of 2.4 on a 4 points scale or on 12/20 at undergraduate level offered by an accredited institution of higher learning in order to qualify for admission.</p>
    <p>2. Applicants from IT related studies, Mathematics, Statistics, Education with IT Major and Economics will be admitted upon completion of prerequisites if any.</p>
    <p>3. Applicants with foreign academic qualifications shall obtain an equivalence of their degree certificates from Rwanda High Education Council.</p>

    <h3>Can I transfer credits from another university?</h3>
    <p>
    An applicant can be accepted on transfer basis by transferring a maximum of 50% credits from accredited university offering MSc in Big Data Analytics, if those courses are equivalent to courses offered by AUCA.
    </p>

    <h3>What is required of international applicants?</h3>
    <p>
    International applicants will be required to fulfill the aforementioned requirements and obtain a student visa from the Government of Rwanda as well as the equivalence of the Bachelor’s Degree from High Education Council (HEC) in Rwanda.
    </p>

    <h3>Does a prior registration to a module really matter?</h3>
    <p>
    Students are required to register for module/ course/module prior to attending classes. Any module/course studied without having registered to it will automatically be subject to the repeat.
    </p>

    <h3>Can a student suspend studies anytime?</h3>
    <p>
    No student shall be allowed to suspend studies after one month of effective start of a semester, except under special circumstances. Permission to suspend studies shall be considered after producing satisfactory evidences of the reason for suspension. Besides, the suspension after one month of commencement of the semester will not be bound to one’s funds refund. 
    </p>

    
  <div className="contact-container">
    <h1 className="contact-title">Any Question</h1>
    <p11>If you have any questions or need assistance, reach out!</p11>
    <form className="contact-form">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" required />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required />

      <label htmlFor="message">Ask your question:</label>
      <textarea id="message" name="message" rows="5" required />

      <button type="submit" className="submit-button">Send Question</button>
    </form>
  </div>
  </div>
);

export default About;
