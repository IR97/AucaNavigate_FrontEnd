import React, { useState } from 'react';
import './styles/EventAttendance.css';

const EventAttendance = () => {
  // Mock data for events and students
  const events = [
    { id: 1, name: 'Tech Conference 2025' },
    { id: 2, name: 'Art Exhibition' },
    { id: 3, name: 'Sports Meet' },
  ];

  const initialStudents = [
    { id: 1, name: 'Alice', events: [1, 2] },
    { id: 2, name: 'Bob', events: [1, 3] },
    { id: 3, name: 'Charlie', events: [2] },
    { id: 4, name: 'Diana', events: [3] },
  ];

  // State
  const [students, setStudents] = useState(initialStudents);
  const [selectedEventId, setSelectedEventId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Handle event assignment/removal
  const toggleEventForStudent = (studentId, eventId) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) => {
        if (student.id === studentId) {
          const isAttending = student.events.includes(eventId);
          const updatedEvents = isAttending
            ? student.events.filter((id) => id !== eventId) // Remove event
            : [...student.events, eventId]; // Add event
          return { ...student, events: updatedEvents };
        }
        return student;
      })
    );
  };

  // Get students attending the selected event
  const studentsForSelectedEvent = selectedEventId
    ? students.filter((student) => student.events.includes(selectedEventId))
    : [];

  // Get events for the searched student
  const eventsForSearchedStudent = searchQuery
    ? students
        .filter((student) =>
          student.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .flatMap((student) => student.events)
        .map((eventId) => events.find((event) => event.id === eventId))
    : [];

  return (
    <div style={{ padding: '20px', fontFamily: 'Poppins, sans-serif',color: 'black' }}>
      <h20>Orientation Event Attendance</h20>

      {/* Event List */}
      <div style={{ marginBottom: '20px' }}>
        <h22>Event List</h22>
        <ul>
          {events.map((event) => (
            <li key={event.id} style={{ margin: '10px 0' }}>
              <button
                style={{
                  padding: '8px 16px',
                  backgroundColor: selectedEventId === event.id ? '#4caf50' : '#f0f0f0',
                  border: '1px solid #ccc',
                  cursor: 'pointer',
                  borderRadius: '4px',
                  color: selectedEventId === event.id ? '#fff' : '#000',
                }}
                onClick={() => setSelectedEventId(event.id)}
              >
                {event.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Students for Selected Event */}
      <div style={{ marginBottom: '20px' }}>
        <h22>Students Attending Selected Event</h22>
        {selectedEventId ? (
          studentsForSelectedEvent.length > 0 ? (
            <ul>
              {studentsForSelectedEvent.map((student) => (
                <li key={student.id}>{student.name}</li>
              ))}
            </ul>
          ) : (
            <p>No students attending this event.</p>
          )
        ) : (
          <p>Please select an event to see the attendees.</p>
        )}
      </div>

      {/* Search Student */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search by student name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            padding: '8px',
            width: '300px',
            marginBottom: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />
        {searchQuery && (
          <div>
            <h3>Events for "{searchQuery}"</h3>
            {eventsForSearchedStudent.length > 0 ? (
              <ul>
                {eventsForSearchedStudent.map((event) => (
                  <li key={event.id}>{event.name}</li>
                ))}
              </ul>
            ) : (
              <p>No events found for this student.</p>
            )}
          </div>
        )}
      </div>

      {/* Modify Events for Students */}
      <div style={{ marginBottom: '20px' }}>
        <h22>Modify Events for Students</h22>
        {students.map((student) => (
          <div key={student.id} style={{ marginBottom: '10px' }}>
            <h21>{student.name}</h21>
            <div>
              {events.map((event) => (
                <label key={event.id} style={{ marginRight: '10px' }}>
                  <input
                    type="checkbox"
                    checked={student.events.includes(event.id)}
                    onChange={() => toggleEventForStudent(student.id, event.id)}
                  />{' '}
                  {event.name}
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventAttendance;
