import request from './http-requests';
import { SummaryData } from '../types';

const getSummary = () => {
	return request.get<SummaryData>('/summary.json');
};

const Services = {
	getSummary,
};

export default Services;
