import { filData } from "../utils/models";

 

/**
 * call getAbsences method from service to retrieve list of absences 
 * @param _filData - object of filter data : {stardate, enddate, type}
 * @returns list of absences 
 */
const getAbsences = async (_filData: filData = new filData) => {
  const response = await fetch("http://localhost:8080/Api/getAbsences", {
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
 * call getAbsences method from service to retrieve list of absences 
 * @returns list of absences 
 */
const getMembers = async () => {
  const response = await fetch("http://localhost:8080/Api/getMembers", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });
    return response.json(); 
};
  
/**
 * call getMember method from service to retrieve member
 * @param id - id of member
 * @returns member 
 */
const getMember = async (id: Number) => {
  const response = await fetch(`http://localhost:8080/Api/getMember/${id}`);
    return response.json();
};
 
const absencesService = {
  getAbsences, getMember, getMembers
};

export default absencesService;