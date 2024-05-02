
// App.js
import React from 'react';
// import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import Slists from './SelectLists/Slists.jsx';
// import AttendanceRecord from './attendence/AttendenceRecord.jsx'
// import Grades from './studentgrades/Grades.jsx';
// import Home from './attendence/Home.jsx';
import Header1 from './Control/Header1.jsx';
import Home from './Control/Home.jsx';
import ControlAdmin from './Control/ControlAdmin.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Control/Login';

const App = () => {
  return (
      <Router>
      <div>
        <Header1></Header1>
        <Routes>
          <Route path="/"  element={<Home/>} /> 
          <Route path="/Home"  element={<Home/>} /> 
          <Route path="/login" element={<Login/>} /> 
          <Route path="/ControlAdmin" element={<ControlAdmin/>} /> 
        </Routes>
      </div>
      </Router>
    
      
    // <Router>
    //   <div>
    //     <Routes>
    //       <Route path="/attendance-record" element={<AttendanceRecord/>} />
    //       <Route path="/student-grade" element={<Grades/>} />
    //       <Route path="/" element={<Slists/>} />
    //     </Routes>
    //   </div>
    // </Router>
  );
};

export default App;
