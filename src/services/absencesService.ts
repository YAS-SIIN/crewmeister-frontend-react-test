import { filData } from "../utils/models";

 

/** 
 * call getAbsences Rest Api from back-end server to retrieve list of absences  
 * @param _filData - object of filter data : {stardate, enddate, type}
 * @returns list of absences 
 */
const getAbsences = async (_filData: filData = new filData()) => {
  console.log(process.env.REACT_APP_API_URL);
  //call getAbsences Rest API from server
  const response = await fetch(`${process.env.REACT_APP_API_URL}/Api/getAbsences`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(_filData)
  });
    return response.json(); 
};
  
/**
 * call getMembers Rest Api from back-end server to retrieve list of members 
 * @returns list of Members 
 */
const getMembers = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/Api/getMembers`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });
    return response.json(); 
};
  
/**
 * call getMember Rest Api from back-end server to retrieve member by userId
 * @param id - userId of member
 * @returns member 
 */
const getMember = async (id: Number) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/Api/getMember/${id}`);
    return response.json();
};
 
const absencesService = {
  getAbsences, getMember, getMembers
};

export default absencesService;