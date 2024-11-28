import { useState } from "react";

import { QuickTransferCarousel } from "../components/quick-transfer-carousel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SendIcon from "../components/icons/send.svg";

import { dummyQuickTransferPeople } from "@/lib/dummyData";

export const QuickTransfer = () => {
  const [selectedPerson, setSelectedPerson] = useState<number | null>(null);

  const setPerson = (id: number) => {
    setSelectedPerson((prev) => (prev === id ? null : id));
  };

  return (
    <div className="mt-5 bg-white rounded-3xl h-[195px] md:h-[276px] p-5 md:p-6 flex flex-col justify-center">
      <QuickTransferCarousel
        people={dummyQuickTransferPeople}
        selected={selectedPerson}
        onClick={setPerson}
      />
      <div className="mt-7 flex gap-7 items-center">
        <p className="text-text-secondary text-xs md:text-base">Write Amount</p>
        <div className="flex flex-1 h-[40px] md:h-[50px]">
          <Input
            className="rounded-full h-full bg-input-secondary border-none pl-[15px] pr-[30px] md:pl-[30px] md:pr-[60px] text-text-title placeholder:text-text-secondary text-xs md:text-base"
            placeholder="525.50"
          />
          <Button className="rounded-full -ml-10 h-full px-6">
            Send <SendIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};
