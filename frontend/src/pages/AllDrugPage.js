import Cookies from 'js-cookie'
import {useState, useEffect} from 'react'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import DrugAPI from '../api/DrugAPI'
 


function AllDrugPage(props){
    // state
    const [posts, setDrugss] = useState([])
    const [drugsBeingRendered, setDrugsBeingRendered] = useState([])
    
    // effects
    useEffect(() => {
        loadDrugs()
    }, [props.userName])


    // useEffect(() => {
    //     renderPosts()
    // }, [])

    const loadDrugs = async () => {
        const data = await DrugAPI.getAllDrugs()
        setDrugs(data ? data : [])
        setDrugsBeingRendered(data ? data : [])
    }

  
    const renderDrugs = (drugs) => {
        let output = []
        for (let pdrugost of drugs){
            if (drug.creator != props.userID){
                output.push(
                <div key={drug.id} className="all-drug-page-detail" >
                <span>  {checkIsHelped(post)} <Link to={`/all-drugs/${post.id}`}>{post.title}
                <br></br>
                favor-owner:{post.creator} </Link></span> 
                <p>category: {checkPostCategory(post)}</p>
             
                </div> )
            } else {
                output.push(
                    <div key={post.id} className="all-post-page-detail"  id="all-post-page-detail-my-post">
                    
                    <span> <Link to={`/all-posts/${post.id}`}>   {checkIsHelped(post)} {post.title} 
                    &nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                     </Link>  </span> 
                    <p>category: {checkPostCategory(post)}</p>
               
                    </div> )
      
                }
            }
         return output
          
    }

//  filter posts from posts state value  (take in category param)
    const filterPosts = (category) => {
        if (category == 0){     // category (all) has value '0'
            setPostsBeingRendered(posts)    // show all
        } else if (category){  // if given category
            
            const sameCategoryPosts = posts.filter(post => post.category == category)  // filter out all posts in same cateogry

            if (sameCategoryPosts.length === 0){  // if no posts found from same cateogry 
                setPostsBeingRendered([])            // set the post being rendered to the original post object (render original post obj)
                return <h1>this category does not has any posts yet</h1>
            } else {
                setPostsBeingRendered(sameCategoryPosts)    // found posts in same category, set to updated render value 
                
            }
     
        } else {
            console.log('no category given ')
            setPostsBeingRendered(posts)       // no category selected (initial render)  render all posts
        }
       
      
           
        }

    const handleFilter = (event) => {
        let category = event.target.value
        filterPosts(category)

    }


   

    return (

        <div id='all-post-page' >  
                  
              
                <div>
                {/* <div id='all-post-page-header'>
                    <h2>All Post Page</h2>
                </div>   */}

                <div all-post-page-header>
                <Form.Select id="all-post-page-select" onChange={handleFilter}>
                <option id="delivery"   value={0}>All</option>
                <option id="delivery" value={1}>Delivery</option>
                <option id="repair" value={2}>Repair</option>
                <option id="other" value={3}>Other</option>
                </Form.Select>
           
                </div>

                <div >
                {renderPosts(postsBeingRendered)}  
                
                </div>
                </div>
            



               

        </div>
    )
}

export default AllPostPage