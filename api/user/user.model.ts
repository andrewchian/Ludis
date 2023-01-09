export enum Major {
  ComputerScience = "Computer Science",
}

export interface User {
  id?: number;
  email: string;
  name: string;
  major: Major;
  graduationDate: string; // "Spring 2024"
}
