import OpenFda from "../components/OpenFda"
 
import CallOpenFda from "../components/CallOpenFda"
import { Container } from "react-bootstrap";




function HomePage (props) {

  

    return (
        <div>
        <Container>
        <div id="homepage" style={{margin:'38px'}} >

            <h1 style={{"font-size": '3.5rem' ,color: 'lightgray'}}>PHARMIT</h1>
        </div>
        <div>
            <OpenFda/>
        </div>
        </Container>
        </div>
    )
}



export default HomePage;