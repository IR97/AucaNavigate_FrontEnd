import React, { useState, useEffect } from 'react';
import './styles/Announcement.css'; // Import your CSS file for Announcements

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([
    // ... (your demo or API fetched announcements data)
    {
      id: 1,
      title: 'Orientation Schedule',
      content: (
        <> {/* Use a React Fragment to wrap multiple elements */}
          Welcome to AUCA! Find the detailed orientation schedule here, this link below will guide you where we shceduled an online session to get students to be {' '} 
          <p><a href="https://meet.google.com/phr-ftpp-nfc" target="_blank" class="meet-link" rel="noopener noreferrer">
        https://meet.google.com/phr-ftpp-nfc
          </a></p>
        </>
      ),
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

  const markAsRead = (id) => {
    setAnnouncements((prevAnnouncements) =>
      prevAnnouncements.map((announcement) =>
        announcement.id === id ? { ...announcement, read: true } : announcement
      )
    );
  };

  return (
    <div className="announcements-container"> {/* Added a container div */}
      <h2>School Announcements</h2> {/* Heading for the announcements section */}
      <ul>
        {announcements.map((announcement) => (
          <li key={announcement.id}>
            <h7>{announcement.title}</h7>
            <p>{announcement.content}</p>
            {!announcement.read && (
              <button onClick={() => markAsRead(announcement.id)}>Mark as Read</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Announcements;