import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumberToThousands(number: number, toFixed?: number) {
  return (toFixed ? number.toFixed(2) : number.toString()).replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ","
  );
}
