import { useQuery } from 'react-query';
import Services from '../../../lib/services';
import { ScheduleData } from '../../../types';

interface IGetSchedule {
	schedule: ScheduleData | undefined;
	error: unknown;
	isLoadingSchedule: boolean;
}

export function useGetTopProducts(): IGetSchedule {
	const { data, error, isLoading } = useQuery(
		['schedule'],
		async () => {
			const response = await Services.getSchedule();
			return response.data;
		},
		{
			refetchOnMount: 'always',
			enabled: true,
		},
	);

	return {
		schedule: data,
		error,
		isLoadingSchedule: isLoading,
	};
}
