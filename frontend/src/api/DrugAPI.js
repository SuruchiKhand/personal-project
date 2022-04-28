import axios from 'axios'
import ApiHelpers from './ApiHelpers'

const BASE_URL = "http://localhost:8000/api"


const DrugAPI = {}

// DRUGS-----------------------------------------------------------------------------------------------------------------------------

// get
DrugAPI.getAllDrugs = async () => {
    return await ApiHelpers.tryFetchCatch(() => axios.get(`${BASE_URL}/drugs/`,ApiHelpers.getCsrfConfig()))
}
// get
DrugAPI.getDrugByID = async (drugID) => {
    return await ApiHelpers.tryFetchCatch(() => axios.get(`${BASE_URL}/drugs/${drugID}`, ApiHelpers.getCsrfConfig()))
  
}

// create
DrugAPI.createPost = async (drugData) => {
    return await ApiHelpers.tryFetchCatch(() => axios.post(`${BASE_URL}/drugs/`, drugData, ApiHelpers.getCsrfConfig()))
}

// Update
DrugAPI.editDrugByID = async (drugID, editedDrugData) => {
    return await ApiHelpers.tryFetchCatch(() => axios.patch(`${BASE_URL}/drugs/${drugID}/`, editedDrugData, ApiHelpers.getCsrfConfig()))
}

// delete
DrugAPI.deleteDrugByID = async(drugID) => {
  return await ApiHelpers.tryFetchCatch(() => axios.delete(`${BASE_URL}/drugs/${drugID}`,ApiHelpers.getCsrfConfig()))
  
}

// COMMENTS ---------------------------------------------------------------------------------------------------------------

DrugAPI.getAllComments = async () => {
  return await ApiHelpers.tryFetchCatch(() => axios.get(`${BASE_URL}/comments/`,ApiHelpers.getCsrfConfig()))
}
// Read
DrugAPI.getCommentsByID = async (commentID) => {
  return await ApiHelpers.tryFetchCatch(() => axios.get(`${BASE_URL}/comments/${commentID}`, ApiHelpers.getCsrfConfig()))
}
// Create
DrugAPI.createComment = async (commentData) => {
  return await ApiHelpers.tryFetchCatch(() => axios.post(`${BASE_URL}/comments/`, commentData, ApiHelpers.getCsrfConfig()))
}
// Update
DrugAPI.editCommentByID = async (commentID,editedCommentData) => {
 return await ApiHelpers.tryFetchCatch(() => axios.patch(`${BASE_URL}/comments/${commentID}/`, editedCommentData, ApiHelpers.getCsrfConfig()))
}
// Delete
DrugAPI.deleteCommentByID = async (commentID) => {
  return await ApiHelpers.tryFetchCatch(() => axios.delete(`${BASE_URL}/comments/${commentID}`, ApiHelpers.getCsrfConfig()))
}


// Authentication ---------------------------------------------------------------------------------------------------------------
DrugAPI.login = async (loginData) => {
  console.log("Inisde login authetication")
  return await ApiHelpers.tryFetchCatch(
      () => axios.post(`${BASE_URL}/login/`, loginData, ApiHelpers.getCsrfConfig())
  )
}

DrugAPI.signUp = async (signUpData) => {
  console.log("Inside signup")
  return await ApiHelpers.tryFetchCatch(
      () => axios.post(`${BASE_URL}/users/`, signUpData, ApiHelpers.getCsrfConfig())
  )
}

DrugAPI.logOut = async() => {
  return await ApiHelpers.tryFetchCatch(
      () => axios.post(`${BASE_URL}/logout/`, null, ApiHelpers.getCsrfConfig())
  )
}

// Open FDA Api-------------------------------------------------------------------
DrugAPI.getOpenFda = async (inputParams) => {
  console.log("Inside Open FDA drug api")
  return await ApiHelpers.tryFetchCatch(
      () => axios.get(`${BASE_URL}/openfda_api/?date=${inputParams.date}&limit=10`, inputParams, ApiHelpers.getCsrfConfig())
  )
}

DrugAPI.getReddit = async (inputParams) => {
  console.log("Inside Open Reddit api")
  return await ApiHelpers.tryFetchCatch(
      () => axios.get(`${BASE_URL}/reddit_api/?q=${inputParams.query}&limit=5`, inputParams, ApiHelpers.getCsrfConfig())
  )
}




export default DrugAPI
