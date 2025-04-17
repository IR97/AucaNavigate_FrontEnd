import React, { useState, useEffect } from 'react';
import './styles/Header.css';
import logo from '../images/auca_logo.jpg';
import { FaBullhorn } from 'react-icons/fa';

const Header = () => {
  const [announcements, setAnnouncements] = useState([
    // ... (your demo data or initial empty array for API fetch)
    {
      id: 1,
      title: 'Orientation Schedule',
      content: 'Welcome to AUCA! Find the detailed orientation schedule here...',
      read: false,
    },
    {
      id: 2,
      title: 'Important Information for New Students',
      content: 'Key information regarding student ID cards, housing, and more...',
      read: false,
    },
    {
      id: 3,
      title: 'Library Orientation Session',
      content: 'Join us for a tour of the library and learn about library resources...',
      read: false,
    },
  ]);

  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    calculateUnreadCount();
  }, [announcements]);

  const calculateUnreadCount = () => {
    const unread = announcements.filter((announcement) => !announcement.read).length;
    setUnreadCount(unread);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="App Logo" className="logo" />
        <h1>AUCA Navigate</h1>
        <a href="/announcements" className="nav-link">
          <div className="icon-wrapper">
            <FaBullhorn className="announcement-icon" />
            {unreadCount > 0 && <span className="unread-count">{unreadCount}</span>}
          </div>
        </a>
      </div>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About & Policies</a>
        <a href="/FAQs">FAQs</a>
        <a href="/contact">Contact & Feedbacks</a>
      </nav>
    </header>
  );
};

export default Header;