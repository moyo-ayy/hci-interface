import React, { useState } from 'react';

const CourseForm = ({ onSearch, data }) => {
  const [semester, setSemester] = useState('');
  const [courseNumber, setCourseNumber] = useState('');
  const [showSemesterSuggestions, setShowSemesterSuggestions] = useState(false);
  const [showCourseSuggestions, setShowCourseSuggestions] = useState(false);

  // Extract unique semesters
  const semesters = Array.from(new Set(data.terms.map(term => term.term)));

  // Get courses based on selected semester
  const getFilteredCourses = () => {
    if (!semester) {
      // If no semester selected, show all courses
      return Array.from(
        new Set(
          data.terms.flatMap(term =>
            term.courses.map(course => course.course_name)
          )
        )
      );
    }
    
    // Find the specific term object that matches the selected semester
    const selectedTerm = data.terms.find(term => 
      term.term.toLowerCase() === semester.toLowerCase()
    );
    
    // If term found, return its courses, otherwise return empty array
    return selectedTerm 
      ? Array.from(new Set(selectedTerm.courses.map(course => course.course_name)))
      : [];
  };

  // Filtered suggestions
  const filteredSemesters = semesters.filter(sem =>
    sem.toLowerCase().includes(semester.toLowerCase())
  );

  const filteredCourses = getFilteredCourses().filter(course =>
    course.toLowerCase().includes(courseNumber.toLowerCase())
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({
      term: semester,
      search: courseNumber,
      type: 'course',
    });
  };

  const handleSemesterSelect = (selectedSemester) => {
    setSemester(selectedSemester);
    setShowSemesterSuggestions(false);
    // Reset course number when semester changes
    setCourseNumber('');
  };

  return (
    <div className="search-form-container">
      <div className="search-form-card">
        <form onSubmit={handleSubmit} className="search-form">
          {/* Semester Field */}
          <div>
            <label className="form-label">COURSE TERM</label>
            <div className="input-container">
              <input
                type="text"
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
                onFocus={() => setShowSemesterSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSemesterSuggestions(false), 200)}
                className="form-input"
                placeholder="Enter semester..."
              />
              {showSemesterSuggestions && semester && filteredSemesters.length > 0 && (
                <div className="suggestions-container">
                  {filteredSemesters.map((sem) => (
                    <div
                      key={sem}
                      className="suggestion-item"
                      onClick={() => handleSemesterSelect(sem)}
                    >
                      {sem}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Course Number/Title Field */}
          <div>
            <label className="form-label">COURSE TITLE AND NUMBER</label>
            <div className="input-container">
              <input
                type="text"
                value={courseNumber}
                onChange={(e) => setCourseNumber(e.target.value)}
                onFocus={() => setShowCourseSuggestions(true)}
                onBlur={() => setTimeout(() => setShowCourseSuggestions(false), 200)}
                className="form-input"
                placeholder="Enter course number or title..."
              />
              {showCourseSuggestions && courseNumber && filteredCourses.length > 0 && (
                <div className="suggestions-container">
                  {filteredCourses.map((course) => (
                    <div
                      key={course}
                      className="suggestion-item"
                      onClick={() => {
                        setCourseNumber(course);
                        setShowCourseSuggestions(false);
                      }}
                    >
                      {course}
                    </div>
                  ))}
                </div>
              )}
            </div>
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