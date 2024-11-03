import React, { useState } from 'react';

const CourseForm = () => {
  const [semester, setSemester] = useState('');
  const [instructor, setInstructor] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const semesters = [
    'Fall 2024',
    'Spring 2025',
    'Summer 2025',
    'Fall 2025'
  ];

  const filteredSemesters = semesters.filter(sem =>
    sem.toLowerCase().includes(semester.toLowerCase())
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ semester, instructor });
  };

  return (
    <div className="search-form-container">
      <div className="search-form-card">
        <form onSubmit={handleSubmit} className="search-form">
          {/* Course Term Section */}
          <div>
            <label className="form-label">
              COURSE TERM
            </label>
            <div className="input-container">
              <input
                type="text"
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                className="form-input"
                placeholder="Enter semester..."
              />
              {showSuggestions && semester && filteredSemesters.length > 0 && (
                <div className="suggestions-container">
                  {filteredSemesters.map((sem) => (
                    <div
                      key={sem}
                      className="suggestion-item"
                      onClick={() => {
                        setSemester(sem);
                        setShowSuggestions(false);
                      }}
                    >
                      {sem}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Course Instructor Section */}
          <div>
            <label className="form-label">
              COURSE TITLE AND NUMBER
            </label>
            <input
              type="text"
              value={instructor}
              onChange={(e) => setInstructor(e.target.value)}
              className="form-input"
              placeholder="Enter instructor name..."
            />
          </div>

          {/* Search Button */}
          <button type="submit" className="search-button">
            SEARCH
          </button>
        </form>
      </div>
    </div>
  );
};

export default CourseForm;