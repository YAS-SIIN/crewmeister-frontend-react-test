export type Absence = {
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
export type Member = {
  crewId: number;
  id: number;
  image: string;
  name: string;
  userId: number;
};
