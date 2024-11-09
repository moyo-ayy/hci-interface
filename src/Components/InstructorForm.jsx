import React, { useState, useMemo } from 'react';

const InstructorForm = ({ onSearch, data }) => {
  const [semester, setSemester] = useState('');
  const [instructor, setInstructor] = useState('');
  const [showSemesterSuggestions, setShowSemesterSuggestions] = useState(false);
  const [showInstructorSuggestions, setShowInstructorSuggestions] = useState(false);

  // Extract unique semesters
  const semesters = useMemo(() => {
    return Array.from(new Set(data.terms.map(term => term.term))).sort();
  }, [data]);

  // Get instructors based on selected semester
  const getFilteredInstructors = () => {
    if (!semester) {
      // If no semester selected, show all instructors
      return Array.from(
        new Set(
          data.terms.flatMap(term =>
            term.courses.map(course => course.instructor)
          )
        )
      ).sort();
    }
    
    // Find the specific term object that matches the selected semester
    const selectedTerm = data.terms.find(term => 
      term.term.toLowerCase() === semester.toLowerCase()
    );
    
    // If term found, return its instructors, otherwise return empty array
    return selectedTerm 
      ? Array.from(new Set(selectedTerm.courses.map(course => course.instructor))).sort()
      : [];
  };

  // Filtered suggestions
  const filteredSemesters = semesters.filter(sem =>
    sem.toLowerCase().includes(semester.toLowerCase())
  );

  const filteredInstructors = getFilteredInstructors().filter(instr =>
    instr.toLowerCase().includes(instructor.toLowerCase())
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({
      term: semester,
      search: instructor,
      type: 'instructor',
    });
  };

  const handleSemesterSelect = (selectedSemester) => {
    setSemester(selectedSemester);
    setShowSemesterSuggestions(false);
    // Reset instructor when semester changes
    setInstructor('');
  };

  return (
    <div className="search-form-container">
      <div className="search-form-card">
        <form onSubmit={handleSubmit} className="search-form">
          {/* Semester Field */}
          <div className="form-group">
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

          {/* Instructor Field */}
          <div className="form-group">
            <label className="form-label">COURSE INSTRUCTOR</label>
            <div className="input-container">
              <input
                type="text"
                value={instructor}
                onChange={(e) => setInstructor(e.target.value)}
                onFocus={() => setShowInstructorSuggestions(true)}
                onBlur={() => setTimeout(() => setShowInstructorSuggestions(false), 200)}
                className="form-input"
                placeholder="Enter instructor name..."
              />
              {showInstructorSuggestions && instructor && filteredInstructors.length > 0 && (
                <div className="suggestions-container">
                  {filteredInstructors.map((instr) => (
                    <div
                      key={instr}
                      className="suggestion-item"
                      onClick={() => {
                        setInstructor(instr);
                        setShowInstructorSuggestions(false);
                      }}
                    >
                      {instr}
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

export default InstructorForm;