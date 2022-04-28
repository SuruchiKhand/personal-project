import Cookies from 'js-cookie'
import {Link, useNavigate} from 'react-router-dom'
import DrugAPI from '../api/DrugAPI'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import '../App.css'

function NavBar (props){

    const navigate = useNavigate()

    const logOut = async () => {
        const data = DrugAPI.logOut()
        if (data){
            Cookies.remove("csrftoken")
            localStorage.clear()
            props.setUserCookie("")
            props.setUserName("")
            props.setUserID("")
            
            navigate('/')
            // console.log(document.cookie)
            
        }
    }

    const renderAuthOptions = () => {
       
        if (props.userName === ""){
            return (
             
              <div> 

                    <br />
                     
                        <div className="front-page">
                        <h1 className="blockquote" style={{color: 'lightgray'}}>PHARMIT</h1>
                        <br/>
                        <br/>
    
                        <div class="front-page-image">

                        <img src="/pharmit_logo.png" alt="MISSING GIF"/>
                        </div>

                        </div>
                
            </div>
            ) 
        } else {
            return (
            <div>      
                       
 

              <div class="topnav">
                <a class="active" href="#/">Home</a>
                <div class="topnav-right">
                  <a href="#" onClick={logOut}>Log out</a>
                </div>
              </div>



                  
              </div>


              
            )
        }
    }

    return (
        <div id='navBar'>
            {renderAuthOptions()}

        </div>
    ) 
}


export default NavBar