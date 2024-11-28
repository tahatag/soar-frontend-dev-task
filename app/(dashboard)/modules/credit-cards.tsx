"use client";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { CreditCard } from "../components/credit-card";
import { myCardsKey } from "@/lib/queryKeys";
import { CreditCardsResponse } from "@/lib/types";
import useFetchData from "@/hooks/use-fetch-data";
import { Skeleton } from "@/components/ui/skeleton";

export const CreditCards = () => {
  const { data, isSuccess } = useFetchData<CreditCardsResponse>({
    url: "/my-cards",
    queryKey: [myCardsKey],
  });

  return (
    <ScrollArea className="whitespace-nowrap pb-4">
      <div className="mt-5 flex gap-[30px]">
        {isSuccess
          ? data.cards.map((card) => (
              <CreditCard
                key={card.id}
                color={card.color}
                balance={card.balance}
                holder={card.holder}
                expiryMonth={card.expiryMonth}
                expiryYear={card.expiryYear}
                cardNumber={card.cardNumber}
                type={card.type}
              />
            ))
          : Array.from({ length: 3 }).map((_, index) => (
              <Skeleton
                key={index}
                className="min-w-[265px] w-[265px] md:w-[350px] md:min-w-[350px] h-[170px] md:h-[235px] rounded-3xl"
              />
            ))}
      </div>
      <ScrollBar orientation="horizontal" className="[&>div]:bg-black/10" />
    </ScrollArea>
  );
};
