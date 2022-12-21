enum Major {
	ComputerScience = "Computer Science",
	
}

interface User {
	id: number;
	email: string;
	name: string;
	major: Major;
	graduationDate: string; // "Spring 2024"
}