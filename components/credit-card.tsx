import React from "react";

import { cn, formatNumberToThousands } from "@/lib/utils";

import ChipIcon from "./icons/chip.svg";
import MasterCardIcon from "./icons/master-card.svg";

interface ICreditCardProps {
  color: "black" | "white";
  balance: number;
  holder: string;
  expiryMonth: number;
  expiryYear: number;
  cardNumber: string | number | bigint;
  type: "mastercard";
}

const cardIcon: { [cardType in "mastercard"]: React.ReactNode } = {
  mastercard: <MasterCardIcon />,
};

export const CreditCard = ({
  color,
  balance,
  holder,
  expiryMonth,
  expiryYear,
  cardNumber,
  type,
}: ICreditCardProps) => {
  return (
    <div
      className={cn(
        "min-w-[265px] w-[265px] md:w-[350px] md:min-w-[350px] h-[170px] md:h-[235px] rounded-3xl flex flex-col justify-between font-lato",
        color === "black" &&
          "bg-gradient-to-r from-[#5B5A6F] to-black text-white",
        color === "white" && "bg-white border text-text-title"
      )}
    >
      <div className="px-5 pt-4 md:p-6 pb-0 w-full flex justify-between">
        <div>
          <p
            className={cn(
              "text-xs",
              color === "white" && "text-text-secondary"
            )}
          >
            Balance
          </p>
          <p className="md:text-xl font-semibold">
            ${formatNumberToThousands(balance, 2)}
          </p>
        </div>
        <ChipIcon className={cn("w-[34px] h-[34px]")} />
      </div>
      <div className="px-5 md:px-6 w-full flex items-center gap-8 md:gap-16">
        <div>
          <p
            className={cn(
              "text-xs",
              color === "black" && "text-white/70",
              color === "white" && "text-text-secondary"
            )}
          >
            CARD HOLDER
          </p>
          <p className="text-[13px] md:text-[15px] font-semibold">{holder}</p>
        </div>
        <div>
          <p
            className={cn(
              "text-xs",
              color === "black" && "text-white/70",
              color === "white" && "text-text-secondary"
            )}
          >
            VALID THRU
          </p>
          <p className="text-[13px] md:text-[15px] font-semibold">
            {expiryMonth > 9 ? expiryMonth : `0${expiryMonth}`}/{expiryYear}
          </p>
        </div>
      </div>
      <div
        className={cn(
          "h-[51px] md:h-[70px] w-full bg-gradient-to-b from-white/15 to-white/0 flex justify-between items-center px-5 md:px-6",
          color === "white" && "border-t"
        )}
      >
        <p className="text-[15px] md:text-[22px] font-semibold">{cardNumber}</p>
        {cardIcon[type]}
      </div>
    </div>
  );
};
