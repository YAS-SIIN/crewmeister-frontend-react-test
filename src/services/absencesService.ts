 

/**
 * service method to retrieve absences
 * @returns list of absences 
 */
const getAbsences = async () => {
  const response = await fetch("http://localhost:8080/Api/getAbsences");
    return response.json();
};
  
/**
 * service method to retrieve members
 * @returns list of members 
 */
const getMembers = async () => {
  const response = await fetch("http://localhost:8080/Api/getMembers");
    return response.json();
};
 
const absencesService = {
  getAbsences, getMembers
};

export default absencesService;