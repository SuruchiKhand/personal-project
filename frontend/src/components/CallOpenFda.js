import DrugAPI from "../api/DrugAPI"
import {useState } from 'react'

import {Form, Button} from 'react-bootstrap'
import DatePicker from "react-datepicker";



function CallOpenFda (props) {


  const[startDate,setStartDate] = useState(new Date());
  
    const [fdaData,setFdaData] = useState(null)

    const handleFdaSearch = async (event) => {
        event.preventDefault()

        console.log(" I am insisde call open fda")
        
        const inputParams = {
            date: event.target.elements["date"].value
        }
        console.log(typeof(inputParams.date))
        const data = await DrugAPI.getOpenFda(inputParams)
        if (data) {
            console.log("open fda api search",data)
            console.log("results",data.results[0].products[0].brand_name )
          props.setFdaData(data ? data : null )
            
        } else {
            console.log('OpenFDA failed to load')
        }
 

    }

 


    return (

   

      <div className ="form">
          
                
         <Form onSubmit={handleFdaSearch}>
        <h3 style={{color: 'lightgray'}}>Search for recently approved drugs!!</h3>
          

          <Form.Group style={{"margin-bottom":'10px'}}>

            <Form.Control type="date" placeholder="date" name="date" style = {{width: '250px', display: 'inline-block'}} />

          </Form.Group>
          <Button variant="primary" type="submit">Search</Button>
        </Form> 


        </div>
        
    )
}

export default CallOpenFda