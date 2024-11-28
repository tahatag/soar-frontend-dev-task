import React, { ChangeEvent, useState } from "react";

import { QuickTransferCarousel } from "../components/quick-transfer-carousel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SendIcon from "../components/icons/send.svg";

import useFetchData from "@/hooks/use-fetch-data";
import { QuickTransferListResponse } from "@/lib/types";
import { quickTransferPeopleKey } from "@/lib/queryKeys";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";
import { formatNumberToThousands } from "@/lib/utils";

export const QuickTransfer = () => {
  const { data, isSuccess } = useFetchData<QuickTransferListResponse>({
    url: "/quick-transfer",
    queryKey: [quickTransferPeopleKey],
  });

  const [selectedPerson, setSelectedPerson] = useState<number | null>(null);
  const [amount, setAmount] = useState("");

  const setPerson = (id: number) => {
    setSelectedPerson((prev) => (prev === id ? null : id));
  };

  const handleChangeAmount = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleSend = () => {
    const transferTarget = data?.people.find(
      (person) => person.id === selectedPerson
    );

    toast.success(
      `Successfully transfered $${formatNumberToThousands(Number(amount))} to ${
        transferTarget?.name
      }!`
    );

    setSelectedPerson(null);
    setAmount("");
  };

  return (
    <div className="mt-5 bg-white rounded-3xl h-[195px] md:h-[276px] p-5 md:p-6 flex flex-col justify-center">
      {isSuccess ? (
        <QuickTransferCarousel
          people={data.people}
          selected={selectedPerson}
          onClick={setPerson}
        />
      ) : (
        <div className="flex gap-[30px] pl-4 pr-20 h-full">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              className="flex flex-col justify-center items-center h-full basis-1/3"
              key={i}
            >
              <Skeleton className="min-w-[50px] w-[50px] h-[50px] md:min-w-[70px] md:w-[70px] md:h-[70px] rounded-full" />
              <Skeleton className="w-full mt-4 h-6" />
              <Skeleton className="w-3/4 mt-1 h-4" />
            </div>
          ))}
        </div>
      )}

      <div className="mt-7 flex gap-7 items-center">
        <p className="text-text-secondary text-xs md:text-base">Write Amount</p>
        <div className="flex flex-1 h-[40px] md:h-[50px]">
          <Input
            className="rounded-full h-full bg-input-secondary border-none pl-[15px] pr-[30px] md:pl-[30px] md:pr-[60px] text-text-title placeholder:text-text-secondary text-xs md:text-base"
            placeholder="525.50"
            type="number"
            value={amount}
            disabled={!selectedPerson}
            onChange={handleChangeAmount}
          />
          <Button
            variant="default"
            className="rounded-full -ml-10 h-full px-6 z-10"
            disabled={!selectedPerson || !amount}
            onClick={handleSend}
          >
            Send <SendIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};
