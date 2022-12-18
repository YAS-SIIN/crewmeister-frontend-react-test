 

/**
 * service method to retrieve absences
 * @returns paginated list of absences 
 */
const getAbsences = async () => {
  const response = await fetch("http://localhost:8080/Api/getAbsences?");
    return response.json();
};
 
const absencesService = {
  getAbsences
};

export default absencesService;