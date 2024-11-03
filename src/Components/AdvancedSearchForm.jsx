import React, { useState } from 'react';

const AdvancedSearchForm = () => {
 const [semester, setSemester] = useState('');
 const [campus, setCampus] = useState('');
 const [college, setCollege] = useState('');
 const [department, setDepartment] = useState('');
 const [courseNumber, setCourseNumber] = useState('');
 const [courseTitle, setCourseTitle] = useState('');
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
   console.log({ 
     semester, 
     campus,
     college,
     department,
     courseNumber,
     courseTitle 
   });
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

         {/* Campus Section */}
         <div>
           <label className="form-label">
             CAMPUS
           </label>
           <input
             type="text"
             value={campus}
             onChange={(e) => setCampus(e.target.value)}
             className="form-input"
             placeholder="Enter campus..."
           />
         </div>

         {/* College Section */}
         <div>
           <label className="form-label">
             COLLEGE
           </label>
           <input
             type="text"
             value={college}
             onChange={(e) => setCollege(e.target.value)}
             className="form-input"
             placeholder="Enter college..."
           />
         </div>

         {/* Department Section */}
         <div>
           <label className="form-label">
             DEPARTMENT
           </label>
           <input
             type="text"
             value={department}
             onChange={(e) => setDepartment(e.target.value)}
             className="form-input"
             placeholder="Enter department..."
           />
         </div>

         {/* Course Number Section */}
         <div>
           <label className="form-label">
             COURSE NUMBER
           </label>
           <input
             type="text"
             value={courseNumber}
             onChange={(e) => setCourseNumber(e.target.value)}
             className="form-input"
             placeholder="Enter course number..."
           />
         </div>

         {/* Course Title Section */}
         <div>
           <label className="form-label">
             COURSE TITLE
           </label>
           <input
             type="text"
             value={courseTitle}
             onChange={(e) => setCourseTitle(e.target.value)}
             className="form-input"
             placeholder="Enter course title..."
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

export default AdvancedSearchForm;