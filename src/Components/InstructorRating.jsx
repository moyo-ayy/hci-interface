// InstructorRating.jsx

import React, { useMemo } from 'react';

const InstructorRating = ({ data, filters }) => {
  const getScoreColor = (score) => {
    if (score < 2) return '#bc4b51'; // Red
    if (score < 3.5) return '#e6b655'; // Yellow
    return '#588157'; // Green
  };

  const filteredData = useMemo(() => {
    const { term, campus, college, department, courseNumber, courseTitle, search, type } = filters;

    // Start with all terms or filter by term if provided
    let termsToConsider = data.terms;
    if (term) {
      termsToConsider = data.terms.filter(t => t.term.toLowerCase() === term.toLowerCase());
    }

    // Flatten all courses from the selected terms
    let allCourses = termsToConsider.flatMap(t => t.courses);

    // Apply additional filters
    if (campus) {
      allCourses = allCourses.filter(course => course.campus.toLowerCase() === campus.toLowerCase());
    }

    if (college) {
      allCourses = allCourses.filter(course => course.college.toLowerCase() === college.toLowerCase());
    }

    if (department) {
      allCourses = allCourses.filter(course => course.department.toLowerCase() === department.toLowerCase());
    }

    if (courseNumber) {
      allCourses = allCourses.filter(course => course.course_name.toLowerCase().includes(courseNumber.toLowerCase()));
    }

    if (courseTitle) {
      // Assuming course_title is part of course_name; adjust if there's a separate title field
      allCourses = allCourses.filter(course => course.course_name.toLowerCase().includes(courseTitle.toLowerCase()));
    }

    // Apply type-specific filters
    if (type === 'instructor' && search) {
      allCourses = allCourses.filter(course => course.instructor.toLowerCase().includes(search.toLowerCase()));
    } else if (type === 'course' && search) {
      allCourses = allCourses.filter(course => 
        course.course_name.toLowerCase().includes(search.toLowerCase()) ||
        // If you have a separate course title, include it here
        (course.course_title && course.course_title.toLowerCase().includes(search.toLowerCase()))
      );
    } 
    // For 'advanced', all the above filters are already applied

    // Decide what to display based on type
    if (type === 'instructor' || type === 'course') {
      // Return data if there's exactly one match
      if (allCourses.length === 1) {
        return allCourses[0];
      }
      // If multiple matches, you can handle them differently (e.g., list all matches)
      // For simplicity, we'll return null here
      return null;
    } else if (type === 'advanced') {
      // Advanced search can have multiple criteria; decide how to handle multiple matches
      if (allCourses.length === 1) {
        return allCourses[0];
      }
      // Optionally, handle multiple matches by displaying a list
      // For now, return null if not exactly one
      return null;
    }

    // Default case
    return null;
  }, [data, filters]);

  if (!filteredData) {
    return <div className="rating-card">No matching data found</div>;
  }

  const evaluationArray = Object.entries(filteredData.evaluations).map(([key, value]) => ({
    category: value.category,
    score: value.average_score,
  }));

  return (
    <div className="rating-wrapper">
      <h2 className="instructor-name">
        { filteredData.instructor} : {filteredData.course_name}
      </h2>

      <div className="rating-card">
        <div className="ratings-container">
          {evaluationArray.map((evaluation, index) => (
            <div key={index} className="rating-row">
              <span className="rating-category">{evaluation.category}</span>
              <div className="score-container">
                <span
                  className="rating-score"
                  style={{ backgroundColor: getScoreColor(evaluation.score) }}
                >
                  {evaluation.score.toFixed(2)}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredData.noteworthy_comments && filteredData.noteworthy_comments.length > 0 && (
          <div className="comments-section">
            <h3>Student Comments</h3>
            <ul className="comments-list">
              {filteredData.noteworthy_comments.map((comment, index) => (
                <li key={index} className="comment-item">
                  "{comment}"
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default InstructorRating;
