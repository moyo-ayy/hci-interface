// InstructorRating.jsx
import { useState, useMemo } from 'react';

const InstructorRating = ({ data, termFilter, searchFilter, filterType = 'instructor' }) => {
  const getScoreColor = (score) => {
    if (score < 2) return '#bc4b51';
    if (score < 3.5) return '#e6b655';
    return '#588157';
  };

  const filteredData = useMemo(() => {
    const termData = data.terms.find(term => term.term === termFilter);
    if (!termData) return null;

    const filteredCourses = termData.courses.filter(course => {
      if (filterType === 'instructor') {
        return course.instructor.toLowerCase().includes(searchFilter.toLowerCase());
      } else {
        return course.course_name.toLowerCase().includes(searchFilter.toLowerCase());
      }
    });

    if (filteredCourses.length === 0) return null;
    return filteredCourses[0];
  }, [data, termFilter, searchFilter, filterType]);

  if (!filteredData) {
    return <div className="rating-card">No matching data found</div>;
  }

  const evaluationArray = Object.entries(filteredData.evaluations).map(([key, value]) => ({
    category: value.category,
    score: value.average_score
  }));

  return (
    <div className="rating-wrapper">
      <h2 className="instructor-name">
        {filterType === 'instructor' ? filteredData.instructor : filteredData.course_name}
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