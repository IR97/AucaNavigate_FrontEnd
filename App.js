import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import FAQ from './components/faq';
import Contact from './components/Contact';
import AdminLogin from './components/AdminLogin';
import StudentLoginSignup from './components/StudentLoginSignup';
import StudentDashboard from './components/StudentDashboard';
import AdminDashboard from './components/AdminDashboard';
import ManageEvents from './components/ManageEvents';
import EventAttendance from './components/EventAttendance';
import Announcements from './components/annoucements';

const App = () => (
  <Router>
    <Header />
    <Routes>
      {/* Public Routes */}
      <Route path="/announcements" element={<Announcements />} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/FAQs" element={<FAQ />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/student-login" element={<StudentLoginSignup />} />

      {/* Dashboard Routes */}
      <Route path="/student-dashboard/*" element={<StudentDashboard />} />
      <Route path="/admin-dashboard/*" element={<AdminDashboard />}>
        <Route path="manage-events" element={<ManageEvents />}>
          <Route path="event-attendance" element={<EventAttendance />} />
        </Route>
      </Route>
    </Routes>
  </Router>
);

export default App;
