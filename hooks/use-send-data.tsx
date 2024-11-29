import { api } from "@/lib/apiClient";
import { FALLBACK_ERROR_MESSAGE } from "@/lib/constants";
import { ApiErrorResponse } from "@/lib/types";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";

interface SendDataConfig<T, R> {
  url: string;
  method: "post" | "put" | "patch" | "delete";
  data?: R;
  options?: UseMutationOptions<T, AxiosError<ApiErrorResponse>, R>;
}

const sendData = async <T, R>(
  url: string,
  method: "post" | "put" | "patch" | "delete",
  data?: R
): Promise<T> => {
  const response = await (method === "delete"
    ? api.delete<T>(url)
    : api[method]<T>?.(url, data));
  return response;
};

const useSendData = <T, R>({ url, method, options }: SendDataConfig<T, R>) => {
  const { mutate, isPending, isSuccess, isError, error } = useMutation<
    T,
    AxiosError<ApiErrorResponse>,
    R
  >({
    mutationFn: (data) => sendData<T, R>(url, method, data),
    onError: (err) => {
      toast.error(err.response?.data?.message ?? FALLBACK_ERROR_MESSAGE);
    },
    ...options,
  });

  const sendRequest = (inputData: R) => mutate(inputData);

  return {
    mutate: sendRequest,
    isPending,
    isSuccess,
    isError,
    error,
  };
};

export default useSendData;
