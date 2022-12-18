import { filData } from "../utils/models";

 

/**
 * call getAbsences method from service to retrieve list of absences 
 * @param _filData - object of filter data : {stardate, enddate, type}
 * @returns list of absences 
 */
const getAbsences = async (_filData: filData) => {
  const response = await fetch("http://localhost:8080/Api/getAbsences", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({a: 1, b: 'Textual content'})
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
  getAbsences, getMember
};

export default absencesService;