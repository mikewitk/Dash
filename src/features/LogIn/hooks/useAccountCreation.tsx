import { AxiosResponse } from 'axios';
import { useMutation, UseMutateFunction } from 'react-query';
import Services from '../api/accountCreation';
import { UserAccountCreationProps } from '../types';

interface useAccountCreationReturnProps {
	mutate: UseMutateFunction<
		AxiosResponse,
		unknown,
		UserAccountCreationProps,
		unknown
	>;
	isError: boolean;
	isLoading: boolean;
}

export function useAccountCreation(): useAccountCreationReturnProps {
	const { mutate, isError, isLoading } = useMutation(Services.createAccount);

	return {
		mutate,
		isError,
		isLoading,
	};
}
