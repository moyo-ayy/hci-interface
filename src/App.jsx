import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import CourseForm from './Components/CourseForm'
import InstructorForm from './Components/InstructorForm'
import AdvancedSearchForm from './Components/AdvancedSearchForm'
function App() {

  const [currentMode, setCurrentMode] = useState(1)

  return (
    <>
      <div>
        <Navbar mode={currentMode} setMode={setCurrentMode}/>
      </div>
      <div className='main-content'>
        {currentMode == 1 && <CourseForm/>}
        {currentMode == 2 && <InstructorForm/>}
        {currentMode == 3 && <AdvancedSearchForm/>}
      </div>
    </>
  )
}

export default App
