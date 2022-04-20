import request from './http-requests';
import { SummaryData } from '../types';
import { AxiosResponse } from 'axios';

const getSummary = (): Promise<AxiosResponse<SummaryData>> => {
	return request.get<SummaryData>('/summary.json');
};

const Services = {
	getSummary,
};

export default Services;
