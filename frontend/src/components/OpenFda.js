import { useState } from 'react'
import { Modal, Button } from "react-bootstrap";

import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import CallOpenFda from "./CallOpenFda"
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import '../css/OpenFda.css'
import DrugAPI from "../api/DrugAPI"
import {Link} from 'react-router-dom';


function OpenFda (props) {

    const [redditData,setRedditData] = useState(null)
    const[show,setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const[brandName,setBrandName] = useState (null)

    const handleRedditSearch = async (event) => {
        event.preventDefault()
        
        const inputParams = {
            query: event.target.getAttribute("name")
        }
        setBrandName(event.target.getAttribute("name"))
        console.log(typeof(inputParams.query))
        const data = await DrugAPI.getReddit(inputParams)
        if (data) {
            // console.log("Reddit api search",data)
            console.log("results",data.data )
        setRedditData(data.data ? data.data : null )
            
        } else {
            console.log('Reddit Api failed to load')
        }
        setShow(true);

    }


    const RedditDataModal = ( {show}) => {
        return (
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                size="lg"
            >
                <Modal.Header closeButton>
        <Modal.Title>Reddit Responses for {brandName} </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="table-responsive">
                        <table className="table table-bodered" >
                        <thead>
                            <tr>
                                <th>Author</th>
                                <th>Title</th>
                            </tr>
                        </thead>
                            <th></th>
                            <tbody>
                                <RedditDetails/>
                            </tbody>
                       
                        </table>
                     </div>    
            
                </Modal.Body>
                <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                    Close
                </Button>
        
                </Modal.Footer>
            </Modal>

        );

    }  


   function RedditDetails() {
        return redditData.map((value,index) => (
             <tr>
                 <td> {value.author}</td>
                 <td><a target="_blank" href={value.full_link}>{value.title}</a></td>

             </tr>

         ));  
    } 
    
    const [fdaData, setFdaData] = useState(null)

    const renderFda = () => {
        console.log("Retrieved FDA data",fdaData)
        if(fdaData){
            return (
                
                <div style={{"margin-top":'10px'}}>
                    <table className="customers">
                        <TableHeaderRow />
                        <TableRow/>
                    </table>
            <RedditDataModal show={show}/>
                </div>    
                
            
            );        
        }
    }

    const TableHeaderRow = () => {
        return <tr><th>#</th><th>Brand Name</th><th>Manufacturer</th><th>Route</th></tr>;
    }

    const TableRow = () => {
        let returneddata = []
        for (let i = 0; i < fdaData.results.length; i++){
            const name = fdaData.results[i].products[0].brand_name
            const route = fdaData.results[i].products[0].route
            const sponsor_name = fdaData.results[i].sponsor_name
            returneddata.push(
                <tr>
                    <td>{i+1}</td>
                    <td name = {name}onClick ={handleRedditSearch}>{name}</td>
                    <td>{sponsor_name}</td>
                    <td>{route}</td>
                </tr> 
                )
        }
        return returneddata
    }

    return (
        <div >
       
            <CallOpenFda setFdaData={setFdaData} fdaData={fdaData} />
            <div>
                {renderFda()} 
            </div>
            
            
        </div>
    );
 
}

export default OpenFda  

