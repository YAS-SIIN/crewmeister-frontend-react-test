
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
  admitterId: number;
  admitterNote: string;
  confirmedAt: Date;
  createdAt: Date;
  crewId: number;
  endDate: string;
  id: number;
  memberNote: string;
  rejectedAt: Date;
  startDate: string;
  type: string;
  userId: number;
  memberName: string;
};

/**
 * Absence
 * @typedef Member
 * @type {object}
 * @property {number} crewId - crewId
 * @property {number} id - id
 * @property {string} name - Member name
 * @property {number} userId - userId
 */
export class Member {
  crewId: number;
  id: number;
  image: string;
  name: string;
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
  startDate!: string;
  endDate!: string;
  type!: string; 
};
