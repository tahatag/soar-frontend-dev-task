import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumberToThousands(number: number) {
  return number.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
