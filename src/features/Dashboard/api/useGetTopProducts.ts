import { useQuery } from 'react-query';
import Services from '../../../lib/services';
import { TopProductsData } from '../../../types';

interface IGetTopProducts {
	topProducts: TopProductsData | undefined;
	error: unknown;
	isLoadingTopProducts: boolean;
}

export function useGetTopProducts(): IGetTopProducts {
	const { data, error, isLoading } = useQuery(
		['top products'],
		async () => {
			const response = await Services.getTopProducts();
			return response.data;
		},
		{
			refetchOnMount: 'always',
			enabled: true,
		},
	);

	return {
		topProducts: data,
		error,
		isLoadingTopProducts: isLoading,
	};
}
