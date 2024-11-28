import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { CreditCard } from "../components/credit-card";

export const CreditCards = () => {
  return (
    <ScrollArea className="whitespace-nowrap pb-4">
      <div className="mt-5 flex gap-[30px]">
        <CreditCard
          color="black"
          balance={5756}
          holder="Eddy Cusuma"
          expiryMonth={12}
          expiryYear={24}
          cardNumber="3778 **** **** 1234"
          type="mastercard"
        />
        <CreditCard
          color="white"
          balance={5214}
          holder="Eddy Cusuma"
          expiryMonth={12}
          expiryYear={24}
          cardNumber="3778 **** **** 1234"
          type="mastercard"
        />
        <CreditCard
          color="white"
          balance={5214}
          holder="Eddy Cusuma"
          expiryMonth={12}
          expiryYear={24}
          cardNumber="3778 **** **** 1234"
          type="mastercard"
        />
      </div>
      <ScrollBar orientation="horizontal" className="[&>div]:bg-black/10" />
    </ScrollArea>
  );
};
