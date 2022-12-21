enum EventCategory {
	sports = "sports",
	studying = "studying",
	
}

interface Event {
	id: number;
	hostid: number;
	name: string;
	description: string;
	location: string;
	startTimeStamp: Date;
	endTimeStamp: Date;
	categories: EventCategory[];
}