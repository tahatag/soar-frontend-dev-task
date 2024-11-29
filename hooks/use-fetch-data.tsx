import { api } from "@/lib/apiClient";
import { FALLBACK_ERROR_MESSAGE } from "@/lib/constants";
import { ApiErrorResponse } from "@/lib/types";
import {
  UseQueryOptions,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useEffect } from "react";
import { toast } from "sonner";

interface FetchDataConfig<T> {
  url: string;
  queryKey: string[];
  options?: Omit<UseQueryOptions<T, AxiosError<ApiErrorResponse>>, "queryKey">;
}

const fetchData = async <T,>(url: string): Promise<T> => {
  const response = await api.get<T>(url);
  return response;
};

const useFetchData = <T,>({ url, queryKey, options }: FetchDataConfig<T>) => {
  const queryClient = useQueryClient();

  const { data, isLoading, isSuccess, isError, error, refetch, dataUpdatedAt } =
    useQuery<T, AxiosError<ApiErrorResponse>>({
      // eslint-disable-next-line @tanstack/query/exhaustive-deps
      queryKey: queryKey,
      queryFn: () => fetchData<T>(url),
      initialData: queryClient.getQueryData(queryKey),
      refetchInterval: 30000, // Refetch after 5 minutes
      ...options,
    });

  useEffect(() => {
    if (isError) {
      toast.error(error.response?.data?.message ?? FALLBACK_ERROR_MESSAGE);
    }
  }, [isError, error]);

  if (isSuccess) {
    return { data: data as T, isLoading, isSuccess, isError, refetch };
  }

  return {
    data: isSuccess ? (data as T) : undefined,
    isLoading,
    isSuccess,
    isError,
    refetch,
    dataUpdatedAt,
  };
};

export default useFetchData;
