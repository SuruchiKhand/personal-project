import { Link } from "react-router-dom"
import { Jumbotron, Button } from 'reactstrap';

function CheckLoginPage(props) {

    if (props.userName === ""){
        return (
            <div id="checkLogin">
                 <p style={{color: 'lightgray'}}> You are not logged in, please <Link to='/login'>Login</Link> or <Link to='/signup'>Sign up</Link> </p>
                {/* <div id="welcomePage"> */}
        
                {/* </div> */}
            </div>
        )
    }  
    return (
        <div >
            {props.actualApp()}
           
        </div>
    ) 
}

export default CheckLoginPage