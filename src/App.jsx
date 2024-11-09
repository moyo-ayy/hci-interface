import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import CourseForm from './Components/CourseForm'
import InstructorForm from './Components/InstructorForm'
import AdvancedSearchForm from './Components/AdvancedSearchForm'
import InstructorRating from './Components/InstructorRating'
function App() {

  const [currentMode, setCurrentMode] = useState(1)

  const evaluationData = {
    "terms": [
      {
        "term": "Fall 2022",
        "courses": [
          {
            "course_name": "COP 4530",
            "instructor": "Sarah Jensen",
            "evaluations": {
              "E1": {
                "category": "Description of Course Objectives & Assignments",
                "average_score": 3.5
              },
              "E2": {
                "category": "Communication of Ideas and Information",
                "average_score": 4.2
              },
              "E3": {
                "category": "Expression of Expectations for Performance",
                "average_score": 2.8
              },
              "E4": {
                "category": "Availability to Assist Students In or Out of Class",
                "average_score": 4.7
              },
              "E5": {
                "category": "Respect and Concern for the Students",
                "average_score": 3.9
              },
              "E6": {
                "category": "Stimulation of Interest in the Course",
                "average_score": 2.5
              },
              "E7": {
                "category": "Facilitation of Learning",
                "average_score": 4.0
              },
              "E8": {
                "category": "Overall Rating of the Instructor",
                "average_score": 3.8
              }
            },
            "noteworthy_comments": [
              "Jensen explained the material well, but the course was challenging.",
              "Some topics were hard to follow.",
              "She was helpful during office hours."
            ]
          },
          {
            "course_name": "COP 4510",
            "instructor": "Michael Lee",
            "evaluations": {
              "E1": {
                "category": "Description of Course Objectives & Assignments",
                "average_score": 2.5
              },
              "E2": {
                "category": "Communication of Ideas and Information",
                "average_score": 3.0
              },
              "E3": {
                "category": "Expression of Expectations for Performance",
                "average_score": 2.7
              },
              "E4": {
                "category": "Availability to Assist Students In or Out of Class",
                "average_score": 3.5
              },
              "E5": {
                "category": "Respect and Concern for the Students",
                "average_score": 2.9
              },
              "E6": {
                "category": "Stimulation of Interest in the Course",
                "average_score": 2.0
              },
              "E7": {
                "category": "Facilitation of Learning",
                "average_score": 3.2
              },
              "E8": {
                "category": "Overall Rating of the Instructor",
                "average_score": 2.8
              }
            },
            "noteworthy_comments": [
              "Lee's lectures were sometimes confusing.",
              "Course objectives were not clear.",
              "He was approachable for questions."
            ]
          },
          {
            "course_name": "COT 4210",
            "instructor": "Emily Torres",
            "evaluations": {
              "E1": {
                "category": "Description of Course Objectives & Assignments",
                "average_score": 4.8
              },
              "E2": {
                "category": "Communication of Ideas and Information",
                "average_score": 4.9
              },
              "E3": {
                "category": "Expression of Expectations for Performance",
                "average_score": 4.7
              },
              "E4": {
                "category": "Availability to Assist Students In or Out of Class",
                "average_score": 4.6
              },
              "E5": {
                "category": "Respect and Concern for the Students",
                "average_score": 4.8
              },
              "E6": {
                "category": "Stimulation of Interest in the Course",
                "average_score": 4.7
              },
              "E7": {
                "category": "Facilitation of Learning",
                "average_score": 4.9
              },
              "E8": {
                "category": "Overall Rating of the Instructor",
                "average_score": 4.8
              }
            },
            "noteworthy_comments": [
              "Torres made the course very engaging.",
              "Assignments were challenging but rewarding.",
              "She always encouraged participation."
            ]
          },
          {
            "course_name": "CAP 3300",
            "instructor": "Jonathan Black",
            "evaluations": {
              "E1": {
                "category": "Description of Course Objectives & Assignments",
                "average_score": 1.5
              },
              "E2": {
                "category": "Communication of Ideas and Information",
                "average_score": 1.8
              },
              "E3": {
                "category": "Expression of Expectations for Performance",
                "average_score": 2.0
              },
              "E4": {
                "category": "Availability to Assist Students In or Out of Class",
                "average_score": 2.5
              },
              "E5": {
                "category": "Respect and Concern for the Students",
                "average_score": 1.9
              },
              "E6": {
                "category": "Stimulation of Interest in the Course",
                "average_score": 1.7
              },
              "E7": {
                "category": "Facilitation of Learning",
                "average_score": 2.2
              },
              "E8": {
                "category": "Overall Rating of the Instructor",
                "average_score": 1.8
              }
            },
            "noteworthy_comments": [
              "Course content was not well organized.",
              "Black was often unavailable for help.",
              "Lectures lacked clarity."
            ]
          }
        ]
      },
      {
        "term": "Spring 2023",
        "courses": [
          {
            "course_name": "COP 4600",
            "instructor": "Alex Smith",
            "evaluations": {
              "E1": {
                "category": "Description of Course Objectives & Assignments",
                "average_score": 4.0
              },
              "E2": {
                "category": "Communication of Ideas and Information",
                "average_score": 4.2
              },
              "E3": {
                "category": "Expression of Expectations for Performance",
                "average_score": 4.1
              },
              "E4": {
                "category": "Availability to Assist Students In or Out of Class",
                "average_score": 3.8
              },
              "E5": {
                "category": "Respect and Concern for the Students",
                "average_score": 4.3
              },
              "E6": {
                "category": "Stimulation of Interest in the Course",
                "average_score": 4.0
              },
              "E7": {
                "category": "Facilitation of Learning",
                "average_score": 4.1
              },
              "E8": {
                "category": "Overall Rating of the Instructor",
                "average_score": 4.2
              }
            },
            "noteworthy_comments": [
              "Smith provided practical examples.",
              "The course materials were helpful.",
              "He was responsive to emails."
            ]
          },
          {
            "course_name": "CEN 4020",
            "instructor": "Melissa Johnson",
            "evaluations": {
              "E1": {
                "category": "Description of Course Objectives & Assignments",
                "average_score": 2.8
              },
              "E2": {
                "category": "Communication of Ideas and Information",
                "average_score": 2.5
              },
              "E3": {
                "category": "Expression of Expectations for Performance",
                "average_score": 3.0
              },
              "E4": {
                "category": "Availability to Assist Students In or Out of Class",
                "average_score": 2.7
              },
              "E5": {
                "category": "Respect and Concern for the Students",
                "average_score": 2.9
              },
              "E6": {
                "category": "Stimulation of Interest in the Course",
                "average_score": 2.6
              },
              "E7": {
                "category": "Facilitation of Learning",
                "average_score": 2.8
              },
              "E8": {
                "category": "Overall Rating of the Instructor",
                "average_score": 2.7
              }
            },
            "noteworthy_comments": [
              "Johnson's lectures were dull.",
              "Assignments were not clear.",
              "Hard to get feedback on work."
            ]
          },
          {
            "course_name": "CDA 3101",
            "instructor": "David Brown",
            "evaluations": {
              "E1": {
                "category": "Description of Course Objectives & Assignments",
                "average_score": 3.5
              },
              "E2": {
                "category": "Communication of Ideas and Information",
                "average_score": 3.7
              },
              "E3": {
                "category": "Expression of Expectations for Performance",
                "average_score": 3.6
              },
              "E4": {
                "category": "Availability to Assist Students In or Out of Class",
                "average_score": 3.8
              },
              "E5": {
                "category": "Respect and Concern for the Students",
                "average_score": 3.9
              },
              "E6": {
                "category": "Stimulation of Interest in the Course",
                "average_score": 3.5
              },
              "E7": {
                "category": "Facilitation of Learning",
                "average_score": 3.7
              },
              "E8": {
                "category": "Overall Rating of the Instructor",
                "average_score": 3.6
              }
            },
            "noteworthy_comments": [
              "Brown was helpful but the course was tough.",
              "He explained concepts clearly.",
              "Could improve on providing more examples."
            ]
          },
          {
            "course_name": "CIS 4360",
            "instructor": "Rachel Green",
            "evaluations": {
              "E1": {
                "category": "Description of Course Objectives & Assignments",
                "average_score": 4.9
              },
              "E2": {
                "category": "Communication of Ideas and Information",
                "average_score": 4.8
              },
              "E3": {
                "category": "Expression of Expectations for Performance",
                "average_score": 4.7
              },
              "E4": {
                "category": "Availability to Assist Students In or Out of Class",
                "average_score": 5.0
              },
              "E5": {
                "category": "Respect and Concern for the Students",
                "average_score": 4.9
              },
              "E6": {
                "category": "Stimulation of Interest in the Course",
                "average_score": 4.8
              },
              "E7": {
                "category": "Facilitation of Learning",
                "average_score": 4.9
              },
              "E8": {
                "category": "Overall Rating of the Instructor",
                "average_score": 4.9
              }
            },
            "noteworthy_comments": [
              "Green is an excellent instructor.",
              "She made the course very interesting.",
              "Always willing to help students."
            ]
          }
        ]
      },
      {
        "term": "Summer 2023",
        "courses": [
          {
            "course_name": "CNT 4504",
            "instructor": "Daniel Wilson",
            "evaluations": {
              "E1": {
                "category": "Description of Course Objectives & Assignments",
                "average_score": 2.2
              },
              "E2": {
                "category": "Communication of Ideas and Information",
                "average_score": 2.0
              },
              "E3": {
                "category": "Expression of Expectations for Performance",
                "average_score": 1.9
              },
              "E4": {
                "category": "Availability to Assist Students In or Out of Class",
                "average_score": 2.5
              },
              "E5": {
                "category": "Respect and Concern for the Students",
                "average_score": 2.1
              },
              "E6": {
                "category": "Stimulation of Interest in the Course",
                "average_score": 1.8
              },
              "E7": {
                "category": "Facilitation of Learning",
                "average_score": 2.0
              },
              "E8": {
                "category": "Overall Rating of the Instructor",
                "average_score": 2.0
              }
            },
            "noteworthy_comments": [
              "Wilson's teaching style was not effective.",
              "Course content was disorganized.",
              "Had difficulty understanding lectures."
            ]
          },
          {
            "course_name": "COP 3330",
            "instructor": "Laura Martinez",
            "evaluations": {
              "E1": {
                "category": "Description of Course Objectives & Assignments",
                "average_score": 4.5
              },
              "E2": {
                "category": "Communication of Ideas and Information",
                "average_score": 4.6
              },
              "E3": {
                "category": "Expression of Expectations for Performance",
                "average_score": 4.4
              },
              "E4": {
                "category": "Availability to Assist Students In or Out of Class",
                "average_score": 4.7
              },
              "E5": {
                "category": "Respect and Concern for the Students",
                "average_score": 4.6
              },
              "E6": {
                "category": "Stimulation of Interest in the Course",
                "average_score": 4.5
              },
              "E7": {
                "category": "Facilitation of Learning",
                "average_score": 4.6
              },
              "E8": {
                "category": "Overall Rating of the Instructor",
                "average_score": 4.6
              }
            },
            "noteworthy_comments": [
              "Martinez made learning enjoyable.",
              "She explained concepts clearly.",
              "Very supportive and helpful."
            ]
          },
          {
            "course_name": "CIS 4301",
            "instructor": "James Anderson",
            "evaluations": {
              "E1": {
                "category": "Description of Course Objectives & Assignments",
                "average_score": 3.0
              },
              "E2": {
                "category": "Communication of Ideas and Information",
                "average_score": 3.2
              },
              "E3": {
                "category": "Expression of Expectations for Performance",
                "average_score": 3.1
              },
              "E4": {
                "category": "Availability to Assist Students In or Out of Class",
                "average_score": 3.3
              },
              "E5": {
                "category": "Respect and Concern for the Students",
                "average_score": 3.0
              },
              "E6": {
                "category": "Stimulation of Interest in the Course",
                "average_score": 3.2
              },
              "E7": {
                "category": "Facilitation of Learning",
                "average_score": 3.1
              },
              "E8": {
                "category": "Overall Rating of the Instructor",
                "average_score": 3.1
              }
            },
            "noteworthy_comments": [
              "Anderson's lectures were average.",
              "Could have been more engaging.",
              "Provided useful resources."
            ]
          },
          {
            "course_name": "COP 4710",
            "instructor": "Patricia Taylor",
            "evaluations": {
              "E1": {
                "category": "Description of Course Objectives & Assignments",
                "average_score": 4.9
              },
              "E2": {
                "category": "Communication of Ideas and Information",
                "average_score": 5.0
              },
              "E3": {
                "category": "Expression of Expectations for Performance",
                "average_score": 4.8
              },
              "E4": {
                "category": "Availability to Assist Students In or Out of Class",
                "average_score": 5.0
              },
              "E5": {
                "category": "Respect and Concern for the Students",
                "average_score": 4.9
              },
              "E6": {
                "category": "Stimulation of Interest in the Course",
                "average_score": 4.8
              },
              "E7": {
                "category": "Facilitation of Learning",
                "average_score": 5.0
              },
              "E8": {
                "category": "Overall Rating of the Instructor",
                "average_score": 4.9
              }
            },
            "noteworthy_comments": [
              "Taylor is one of the best instructors.",
              "She is very passionate about teaching.",
              "Made complex topics understandable."
            ]
          }
        ]
      },
      {
        "term": "Fall 2023",
        "courses": [
          {
            "course_name": "CDA 4312",
            "instructor": "Mark Thomas",
            "evaluations": {
              "E1": {
                "category": "Description of Course Objectives & Assignments",
                "average_score": 3.2
              },
              "E2": {
                "category": "Communication of Ideas and Information",
                "average_score": 3.0
              },
              "E3": {
                "category": "Expression of Expectations for Performance",
                "average_score": 3.5
              },
              "E4": {
                "category": "Availability to Assist Students In or Out of Class",
                "average_score": 3.1
              },
              "E5": {
                "category": "Respect and Concern for the Students",
                "average_score": 3.3
              },
              "E6": {
                "category": "Stimulation of Interest in the Course",
                "average_score": 2.9
              },
              "E7": {
                "category": "Facilitation of Learning",
                "average_score": 3.0
              },
              "E8": {
                "category": "Overall Rating of the Instructor",
                "average_score": 3.1
              }
            },
            "noteworthy_comments": [
              "Thomas was average overall.",
              "Course materials could be improved.",
              "Fair in grading."
            ]
          },
          {
            "course_name": "CEN 3031",
            "instructor": "Barbara Moore",
            "evaluations": {
              "E1": {
                "category": "Description of Course Objectives & Assignments",
                "average_score": 4.7
              },
              "E2": {
                "category": "Communication of Ideas and Information",
                "average_score": 4.5
              },
              "E3": {
                "category": "Expression of Expectations for Performance",
                "average_score": 4.6
              },
              "E4": {
                "category": "Availability to Assist Students In or Out of Class",
                "average_score": 4.8
              },
              "E5": {
                "category": "Respect and Concern for the Students",
                "average_score": 4.7
              },
              "E6": {
                "category": "Stimulation of Interest in the Course",
                "average_score": 4.6
              },
              "E7": {
                "category": "Facilitation of Learning",
                "average_score": 4.7
              },
              "E8": {
                "category": "Overall Rating of the Instructor",
                "average_score": 4.7
              }
            },
            "noteworthy_comments": [
              "Moore is an excellent instructor.",
              "She made the course engaging.",
              "Always available to assist students."
            ]
          },
          {
            "course_name": "COP 4020",
            "instructor": "Jennifer Jackson",
            "evaluations": {
              "E1": {
                "category": "Description of Course Objectives & Assignments",
                "average_score": 2.0
              },
              "E2": {
                "category": "Communication of Ideas and Information",
                "average_score": 2.2
              },
              "E3": {
                "category": "Expression of Expectations for Performance",
                "average_score": 2.1
              },
              "E4": {
                "category": "Availability to Assist Students In or Out of Class",
                "average_score": 1.9
              },
              "E5": {
                "category": "Respect and Concern for the Students",
                "average_score": 2.0
              },
              "E6": {
                "category": "Stimulation of Interest in the Course",
                "average_score": 1.8
              },
              "E7": {
                "category": "Facilitation of Learning",
                "average_score": 2.0
              },
              "E8": {
                "category": "Overall Rating of the Instructor",
                "average_score": 2.0
              }
            },
            "noteworthy_comments": [
              "Jackson's lectures were hard to follow.",
              "Not very responsive to questions.",
              "Course lacked clear objectives."
            ]
          },
          {
            "course_name": "COP 4610",
            "instructor": "Christopher White",
            "evaluations": {
              "E1": {
                "category": "Description of Course Objectives & Assignments",
                "average_score": 4.0
              },
              "E2": {
                "category": "Communication of Ideas and Information",
                "average_score": 4.2
              },
              "E3": {
                "category": "Expression of Expectations for Performance",
                "average_score": 4.1
              },
              "E4": {
                "category": "Availability to Assist Students In or Out of Class",
                "average_score": 3.9
              },
              "E5": {
                "category": "Respect and Concern for the Students",
                "average_score": 4.0
              },
              "E6": {
                "category": "Stimulation of Interest in the Course",
                "average_score": 3.8
              },
              "E7": {
                "category": "Facilitation of Learning",
                "average_score": 4.0
              },
              "E8": {
                "category": "Overall Rating of the Instructor",
                "average_score": 4.0
              }
            },
            "noteworthy_comments": [
              "White's teaching was good overall.",
              "Could improve on providing examples.",
              "Assignments were relevant."
            ]
          }
        ]
      }
    ]
  }
  
  

  return (
    <>
      <div>
        <Navbar mode={currentMode} setMode={setCurrentMode}/>
      </div>
      <div className='main-content'>
        {currentMode == 1 && <CourseForm/>}
        {currentMode == 2 && <InstructorForm/>}
        {currentMode == 3 && <AdvancedSearchForm/>}
        <InstructorRating 
          data={evaluationData}
          termFilter="Fall 2024"
          searchFilter="Michael"
          filterType="instructor"
      />
      </div>
    </>
  )
}

export default App
