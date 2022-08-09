export interface SummaryData {
	totalRevenue: number;
	totalTransactions: number;
	totalProducts: number;
	totalUsers: number;
}

export interface TopProductsData {
	id: number;
	product_name: string;
	quantity: number;
}

export interface ScheduleData {
	id: number;
	name: string;
	time: Date;
	location: string;
}
