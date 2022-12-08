import { AxiosResponse } from 'axios';
import { ENDPOINT_POST_SIGNUP } from '../../../config/variables';
import request from '../../../lib/http-requests';
import { UserAccountCreationProps } from '../types';

const createAccount = async (
	accountInfo: UserAccountCreationProps,
): Promise<AxiosResponse> =>
	await request.post<UserAccountCreationProps>(
		ENDPOINT_POST_SIGNUP,
		accountInfo,
	);

const Services = {
	createAccount,
};

export default Services;
