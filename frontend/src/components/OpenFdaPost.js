import { useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap'
 
 
import DrugAPI from '../api/DrugAPI'


function OpenFdaPost (props) {
    const [fdaData, setFdaData] = useState(null)


    useEffect(()=> {
        loadFdaData()
    }, [props.currentPost])

    //  api call 
    const loadFdaData = async () =>{
        if (props.currentPost){
            console.log("currest post: ",props.currentPost, )
            const inputParams = {
                date: props.currentPost.date,
                limit: 5,
            
            }
            const data = await DrugAPI.getOpenFda(inputParams)
            if (data) {
                console.log("open Fdasearch!!!!!",data)
                props.setFdaData(data ? data : null )
            } else {
                console.log('Failed to load')
            }
        }
      
 
    }



    // show yelp store found near by
    const renderFda = () => {
        const output = []
      
        if (fdaData){
            if (!fdaData.error) {
               
                for (let i = 0; i < fdaData.results.length; i++){
                 
                    const name = fdaData.results[0].products[0].brand_name
                 
        
                   
                    output.push(
    
                            <Carousel.Item interval={5000} id="carouselItem" key={i}>
                         
                            <Carousel.Caption>
                            <h3>{name}</h3>
                
                            
          

                            </Carousel.Caption>
                            </Carousel.Item>
                         
                    )
                }
            } else {
                output.push(<h1 key={'not found'} >not found</h1>)
            }
          
            return output
        
        } else {
            console.log("Waiting for user input!!!!!!!!")
        }
      
    }




    return (
        <div  >
             
            <Carousel variant="dark" > 
             {renderFda()} 
             </Carousel>
            
        </div>
    )



}

export default OpenFdaPost