export enum Major {
  ComputerScience = 'Computer Science',
  // TODO: add more majors
}

export default interface User {
  id?: number;
  email: string;
  name: string;
  major: Major;
  graduationDate: string; // "Spring 2024"
}
