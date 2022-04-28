import './App.css';
import { HashRouter, Routes, Route, Link } from "react-router-dom"

import { useEffect, useState  } from 'react';

import NavBar from './components/NavBar';
import Container from 'react-bootstrap/Container';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import CheckLoginPage from './pages/CheckLoginPage';
import HomePage from './pages/HomePage';
import background from './img/background.jpeg'
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";


function App() {


  // login status
  const [userName, setUserName] = useState("")
  const [userID, setUserID] = useState("")
  const [userCookie, setUserCookie] = useState("")

  
 
  useEffect(() => {
      // checkLoginStatus()
      const loggedInUser = localStorage.getItem('user')
      const loggedInUserID = localStorage.getItem('userID')
      console.log("loggedinUserId",loggedInUserID)
      if (loggedInUser && loggedInUserID){
        setUserName(loggedInUser)
        setUserID(loggedInUserID)
      }
  }, [])

  return (
    <div className>
    <div className="App">


      <HashRouter>
      <Container > 
      {<NavBar userName={userName} setUserName={setUserName} userID={userID} setUserID={setUserID} userCookie={userCookie} setUserCookie={setUserCookie} />}
      </Container>

        <Routes>
   
        <Route path='/' element ={<CheckLoginPage userName={userName} actualApp = {() => <HomePage userName={userName} />} />} />
        <Route path='/login' element={<LoginPage setUserName={setUserName} setUserID={setUserID} setUserCookie={setUserCookie}   />}/>
        <Route path='/signup' element={<SignUpPage />}/>
        </Routes>

      </HashRouter>
  
    </div>
    </div>
  );
}

export default App;