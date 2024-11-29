"use client";

import { useEffect } from "react";

import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { z } from "zod";

import { EditProfileForm } from "../components/edit-profile-form";
import { editProfileFormSchema } from "@/lib/validation";
import useFetchData from "@/hooks/use-fetch-data";
import { myAccounyKey } from "@/lib/queryKeys";
import { AccountDataRequest, AccountDataResponse } from "@/lib/types";
import { useUserStore } from "@/stores/userStore";
import useSendData from "@/hooks/use-send-data";
import { useQueryClient } from "@tanstack/react-query";

export const EditProfile = () => {
  const queryClient = useQueryClient();

  const { data, isSuccess } = useFetchData<AccountDataResponse>({
    url: "/me",
    queryKey: [myAccounyKey],
    options: {
      enabled: !queryClient.getQueryData([myAccounyKey]),
      initialData: queryClient.getQueryData([myAccounyKey]),
    },
  });
  const { user, setUser } = useUserStore();

  const { mutate } = useSendData<AccountDataResponse, AccountDataRequest>({
    url: "/me",
    method: "put",
    options: {
      onSuccess: (response) => {
        toast.success("Profile Successfully Updated.");
        setUser({ ...user, ...response.account });
      },
    },
  });

  const handleSubmit = (data: z.infer<typeof editProfileFormSchema>) => {
    mutate({ account: data });
  };

  useEffect(() => {
    if (isSuccess) {
      setUser(data.account);
    }
  }, [isSuccess]);

  return (
    <div className="pt-10">
      {data?.account ? (
        <EditProfileForm initialValues={user ?? {}} onSubmit={handleSubmit} />
      ) : (
        <div className="w-full py-9 flex justify-center">
          <Loader2 className="animate-spin w-12 h-12" />
        </div>
      )}
    </div>
  );
};
