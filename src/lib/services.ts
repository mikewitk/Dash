import request from './http-requests';
import { SummaryData, TopProductsData, ScheduleData } from '../types';
import { AxiosResponse } from 'axios';
import {
	ENDPOINT_GET_SUMMARY,
	ENDPOINT_GET_TOP_PRODUCTS,
	ENDPOINT_GET_SCHEDULE,
} from '../config/variables';

const getSummary = (): Promise<AxiosResponse<SummaryData>> =>
	request.get<SummaryData>(`/${ENDPOINT_GET_SUMMARY}`);

const getTopProducts = (): Promise<AxiosResponse<TopProductsData>> =>
	request.get<TopProductsData>(`/${ENDPOINT_GET_TOP_PRODUCTS}`);

const getSchedule = (): Promise<AxiosResponse<ScheduleData>> =>
	request.get<ScheduleData>(`/${ENDPOINT_GET_SCHEDULE}`);

const Services = {
	getSummary,
	getTopProducts,
	getSchedule,
};

export default Services;
