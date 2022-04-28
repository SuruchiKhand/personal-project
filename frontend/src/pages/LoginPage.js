import Cookies from "js-cookie"
import { useNavigate } from "react-router-dom"
import DrugAPI from "../api/DrugAPI"
 
import React from 'react';
import { Button, Form, FormGroup,   Input } from 'reactstrap';
import '../App.css'
import "bootstrap/dist/css/bootstrap.min.css";
 
 

function LoginPage(props) {

    const navigate = useNavigate()

    const handleLogin = async (event) => {
        event.preventDefault()
        console.log("loginpage",event.target.value)
        const loginData = {
            username: event.target.elements["username"].value,
            password: event.target.elements["password"].value,
        }

        console.log("login info to backend:", loginData)

        const data = await DrugAPI.login(loginData)
        console.log("login data",data)
        if (data){
            console.log("data!!!!!!!!!!!!!!!!!", data)
            props.setUserName(data.username)
            localStorage.setItem('user', loginData.username)
            localStorage.setItem('userID', data.userID)
            props.setUserID(data.userID)
            props.setUserCookie(Cookies.get("csrftoken"))

            // console.log(document.cookie)
            // console.log("login data came back:", data)     // includes username   and   userID
            navigate("/")
        }
    } 

   

    return (
        <div>
        
        <div class="login-form">
            <Form method="POST" onSubmit={handleLogin}>
                <h2 class="text-center">Login</h2>       
                <div class="form-group">
                    <Input type="text" class="form-control" name="username" placeholder="Username" required="required"/>
                </div>
                <div class="form-group">
                    <Input type="password" class="form-control" name="password" placeholder="Password" required="required"/>
                </div>
                <div class="form-group">
                <button type="submit" class="sign-up-button">Login</button>
                </div>
                  
            </Form>
    
        </div>
                  



</div>
    )
}

export default LoginPage