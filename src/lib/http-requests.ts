import axios from 'axios';
import { baseUrl } from '../config/variables';

const request = axios.create({
	baseURL: baseUrl,
	headers: {
		'Content-type': 'application.json',
		'X-API-Key': `${process.env.REACT_APP_MOCKAROO_API_KEY}`,
	},
});

export default request;
