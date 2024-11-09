// AdvancedSearchForm.jsx

import React, { useState, useMemo } from 'react';

const AdvancedSearchForm = ({ onSearch, data }) => {
  // State variables for each form field
  const [semester, setSemester] = useState('');
  const [campus, setCampus] = useState('');
  const [college, setCollege] = useState('');
  const [department, setDepartment] = useState('');
  const [courseNumber, setCourseNumber] = useState('');
  const [courseTitle, setCourseTitle] = useState('');

  // State variables to control suggestions visibility
  const [showSemesterSuggestions, setShowSemesterSuggestions] = useState(false);
  const [showCampusSuggestions, setShowCampusSuggestions] = useState(false);
  const [showCollegeSuggestions, setShowCollegeSuggestions] = useState(false);
  const [showDepartmentSuggestions, setShowDepartmentSuggestions] = useState(false);
  const [showCourseNumberSuggestions, setShowCourseNumberSuggestions] = useState(false);
  const [showCourseTitleSuggestions, setShowCourseTitleSuggestions] = useState(false);

  // Extract unique values for each field from the data
  const semesters = useMemo(() => {
    return Array.from(new Set(data.terms.map(term => term.term))).sort();
  }, [data]);

  const campuses = useMemo(() => {
    return Array.from(
      new Set(
        data.terms.flatMap(term =>
          term.courses.map(course => course.campus)
        )
      )
    ).sort();
  }, [data]);

  const colleges = useMemo(() => {
    return Array.from(
      new Set(
        data.terms.flatMap(term =>
          term.courses.map(course => course.college)
        )
      )
    ).sort();
  }, [data]);

  const departments = useMemo(() => {
    return Array.from(
      new Set(
        data.terms.flatMap(term =>
          term.courses.map(course => course.department)
        )
      )
    ).sort();
  }, [data]);

  const courseNumbers = useMemo(() => {
    return Array.from(
      new Set(
        data.terms.flatMap(term =>
          term.courses.map(course => course.course_name)
        )
      )
    ).sort();
  }, [data]);

  const courseTitles = useMemo(() => {
    // Assuming course_title is different from course_name; if not, adjust accordingly
    // Here, we assume course_title is derived from course_name
    return Array.from(
      new Set(
        data.terms.flatMap(term =>
          term.courses.map(course => course.course_name) // Adjust if you have separate titles
        )
      )
    ).sort();
  }, [data]);

  // Filtered suggestions based on user input
  const filteredSemesters = useMemo(() => {
    return semesters.filter(sem =>
      sem.toLowerCase().includes(semester.toLowerCase())
    );
  }, [semester, semesters]);

  const filteredCampuses = useMemo(() => {
    return campuses.filter(camp =>
      camp.toLowerCase().includes(campus.toLowerCase())
    );
  }, [campus, campuses]);

  const filteredColleges = useMemo(() => {
    return colleges.filter(col =>
      col.toLowerCase().includes(college.toLowerCase())
    );
  }, [college, colleges]);

  const filteredDepartments = useMemo(() => {
    return departments.filter(dep =>
      dep.toLowerCase().includes(department.toLowerCase())
    );
  }, [department, departments]);

  const filteredCourseNumbers = useMemo(() => {
    return courseNumbers.filter(num =>
      num.toLowerCase().includes(courseNumber.toLowerCase())
    );
  }, [courseNumber, courseNumbers]);

  const filteredCourseTitles = useMemo(() => {
    return courseTitles.filter(title =>
      title.toLowerCase().includes(courseTitle.toLowerCase())
    );
  }, [courseTitle, courseTitles]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Prepare the filters object
    const filters = {
      term: semester,
      campus,
      college,
      department,
      courseNumber,
      courseTitle,
      search: '', // No specific search term; handled via multiple fields
      type: 'advanced',
    };
    onSearch(filters);
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
                      onClick={() => {
                        setSemester(sem);
                        setShowSemesterSuggestions(false);
                      }}
                    >
                      {sem}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Campus Field */}
          <div className="form-group">
            <label className="form-label">CAMPUS</label>
            <div className="input-container">
              <input
                type="text"
                value={campus}
                onChange={(e) => setCampus(e.target.value)}
                onFocus={() => setShowCampusSuggestions(true)}
                onBlur={() => setTimeout(() => setShowCampusSuggestions(false), 200)}
                className="form-input"
                placeholder="Enter campus..."
              />
              {showCampusSuggestions && campus && filteredCampuses.length > 0 && (
                <div className="suggestions-container">
                  {filteredCampuses.map((camp) => (
                    <div
                      key={camp}
                      className="suggestion-item"
                      onClick={() => {
                        setCampus(camp);
                        setShowCampusSuggestions(false);
                      }}
                    >
                      {camp}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* College Field */}
          <div className="form-group">
            <label className="form-label">COLLEGE</label>
            <div className="input-container">
              <input
                type="text"
                value={college}
                onChange={(e) => setCollege(e.target.value)}
                onFocus={() => setShowCollegeSuggestions(true)}
                onBlur={() => setTimeout(() => setShowCollegeSuggestions(false), 200)}
                className="form-input"
                placeholder="Enter college..."
              />
              {showCollegeSuggestions && college && filteredColleges.length > 0 && (
                <div className="suggestions-container">
                  {filteredColleges.map((col) => (
                    <div
                      key={col}
                      className="suggestion-item"
                      onClick={() => {
                        setCollege(col);
                        setShowCollegeSuggestions(false);
                      }}
                    >
                      {col}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Department Field */}
          <div className="form-group">
            <label className="form-label">DEPARTMENT</label>
            <div className="input-container">
              <input
                type="text"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                onFocus={() => setShowDepartmentSuggestions(true)}
                onBlur={() => setTimeout(() => setShowDepartmentSuggestions(false), 200)}
                className="form-input"
                placeholder="Enter department..."
              />
              {showDepartmentSuggestions && department && filteredDepartments.length > 0 && (
                <div className="suggestions-container">
                  {filteredDepartments.map((dep) => (
                    <div
                      key={dep}
                      className="suggestion-item"
                      onClick={() => {
                        setDepartment(dep);
                        setShowDepartmentSuggestions(false);
                      }}
                    >
                      {dep}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Course Number Field */}
          <div className="form-group">
            <label className="form-label">COURSE NUMBER AND TITLE</label>
            <div className="input-container">
              <input
                type="text"
                value={courseNumber}
                onChange={(e) => setCourseNumber(e.target.value)}
                onFocus={() => setShowCourseNumberSuggestions(true)}
                onBlur={() => setTimeout(() => setShowCourseNumberSuggestions(false), 200)}
                className="form-input"
                placeholder="Enter course number..."
              />
              {showCourseNumberSuggestions && courseNumber && filteredCourseNumbers.length > 0 && (
                <div className="suggestions-container">
                  {filteredCourseNumbers.map((num) => (
                    <div
                      key={num}
                      className="suggestion-item"
                      onClick={() => {
                        setCourseNumber(num);
                        setShowCourseNumberSuggestions(false);
                      }}
                    >
                      {num}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Course Title Field
          <div className="form-group">
            <label className="form-label">COURSE TITLE</label>
            <div className="input-container">
              <input
                type="text"
                value={courseTitle}
                onChange={(e) => setCourseTitle(e.target.value)}
                onFocus={() => setShowCourseTitleSuggestions(true)}
                onBlur={() => setTimeout(() => setShowCourseTitleSuggestions(false), 200)}
                className="form-input"
                placeholder="Enter course title..."
              />
              {showCourseTitleSuggestions && courseTitle && filteredCourseTitles.length > 0 && (
                <div className="suggestions-container">
                  {filteredCourseTitles.map((title) => (
                    <div
                      key={title}
                      className="suggestion-item"
                      onClick={() => {
                        setCourseTitle(title);
                        setShowCourseTitleSuggestions(false);
                      }}
                    >
                      {title}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div> */}

          {/* Search Button */}
          <button type="submit" className="search-button">
            SEARCH
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdvancedSearchForm;
