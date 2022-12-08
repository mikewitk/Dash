import axios from 'axios';
import { baseURL } from '../config/variables';

const request = axios.create({
	baseURL,
	headers: {
		'Content-type': 'application/json',
	},
});

export default request;
