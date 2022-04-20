import request from './http-requests';
import { SummaryData } from '../types';
import { AxiosResponse } from 'axios';
import { ENDPOINT_GET_SUMMARY } from '../config/variables';

const getSummary = (): Promise<AxiosResponse<SummaryData>> => {
	return request.get<SummaryData>(`/${ENDPOINT_GET_SUMMARY}`);
};

const Services = {
	getSummary,
};

export default Services;
