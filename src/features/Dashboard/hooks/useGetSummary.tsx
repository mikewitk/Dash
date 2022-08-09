import { useQuery } from 'react-query';
import Services from '../../../lib/services';
import { SummaryData } from '../../../types';

interface IGetSummary {
	summary: SummaryData | undefined;
	error: unknown;
	isLoadingSummary: boolean;
}

export function useGetSummary(): IGetSummary {
	const { data, error, isLoading } = useQuery(
		['summary'],
		async () => {
			const response = await Services.getSummary();
			return response.data;
		},
		{
			refetchOnMount: 'always',
			enabled: true,
		},
	);

	return {
		summary: data,
		error,
		isLoadingSummary: isLoading,
	};
}
