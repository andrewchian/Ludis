export enum EventCategory {
  sports = 'Sports',
  studying = 'Studying',
  // TODO: add more categories
}

export default interface Event {
  id?: number;
  hostid: number;
  name: string;
  description: string;
  location: string;
  startTimeStamp: string;
  endTimeStamp: string;
  categories: EventCategory[];
}
