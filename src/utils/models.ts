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
};
export class Member {
  crewId: number;
  id: number;
  image: string;
  name: string;
  userId: number;
};
export class filData { 
  startDate!: string;
  string!: string;
  type!: string; 
};
