import { useNavigate } from "react-router-dom"
import DrugAPI from "../api/DrugAPI"
import { Button, Form, FormGroup,   Input } from 'reactstrap';
import '../App.css'
import "bootstrap/dist/css/bootstrap.min.css";

function SignUpPage() {

    const navigate = useNavigate()

    const handleSignUp = async (event) => {
        event.preventDefault()
        const signUpData = {
            username: event.target.elements["username"].value,
            password: event.target.elements["password"].value,
        }

        console.log("Sign Up info:", signUpData)

        const data = await DrugAPI.signUp(signUpData)
        console.log("signupdata",data)
        if (data){
          console.log("Inisde dign up data")
            navigate("/login")
        }
    } 



    return (
       <div>
                    <div class="login-form">
                        <Form method="POST" onSubmit={handleSignUp}>
                            <h2 class="text-center">Sign Up</h2>       
                            <div class="form-group">
                                <Input type="text" class="form-control" name="username" placeholder="Username" required="required"/>
                            </div>
                            <div class="form-group">
                                <Input type="password" class="form-control" name="password" placeholder="Password" required="required"/>
                            </div>
                            <div class="form-group">
                            <button type="submit" class="sign-up-button">Sign Up</button>
                            </div>
                              
                        </Form>
                
                     </div>

        </div>
    )
}

export default SignUpPage