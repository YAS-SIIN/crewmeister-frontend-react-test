
/**
 * Absence
 * @typedef Absence
 * @type {object}
 * @property {number} admitterId -  admitterId
 * @property {string} admitterNote - Admitter note
 * @property {Date} confirmedAt - Confirmed date
 * @property {Date} createdAt - Created date
 * @property {number} crewId - crewId
 * @property {Date} endDate - Absenc end date
 * @property {number} id - id
 * @property {string} memberNote - Member note
 * @property {Date} rejectedAt - Rejected date
 * @property {string} startDate - Absenc start date
 * @property {string} type - Absenc type {vacation , sickness}
 * @property {number} userId - userId
 * @property {string} memberName - Member name
 */
export class Absence {
  /**
   * admitterId
   */
  admitterId: number;
  /**
   * Admitter note
   */
  admitterNote: string;
  /**
   * Confirmed date
   */
  confirmedAt: Date;
  /**
   * Created date
   */
  createdAt: Date;
  /**
   * crewId
   */
  crewId: number;
  /**
   * Absenc end date
   */
  endDate: string;
  /**
   * id
   */
  id: number;
  /**
   * Member note
   */
  memberNote: string;
  /**
   * Rejected date
   */
  rejectedAt: Date;
  /**
   * Absenc start date
   */
  startDate: string;
  /**
   * Absenc type {vacation , sickness}
   */
  type: string;
  /**
   * userId
   */
  userId: number;
  /**
   * Member name
   */
  memberName: string;
};


/**
 * Absence
 * @typedef Member
 * @type {object}
 * @property {number} crewId - crewId
 * @property {number} id - id
 * @property {string} image - Member image
 * @property {string} name - Member name
 * @property {number} userId - userId
 */
export class Member {
  /**
   * crewId
   */
  crewId: number;
  /**
   * id
   */
  id: number;
  /**
   * Member image
   */
  image: string;
  /**
   * Member name
   */
  name: string;
  /**
   * userId
   */
  userId: number;
};


/**
 * Absence
 * @typedef filData
 * @type {object}
 * @property {string} startDate - Absenc start date
 * @property {Date} endDate - Absenc end date
 * @property {string} type - Absenc type {vacation , sickness}
 */
export class filData { 
  /**
   * Absenc start date
   */
  startDate!: string;
  /**
   * Absenc end date
   */
  endDate!: string;
  /**
   * Absenc type {vacation , sickness}
   */
  type!: string; 
};
