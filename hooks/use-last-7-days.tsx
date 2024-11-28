import { useMemo } from "react";

const useLastSevenDays = () => {
  return useMemo(() => {
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const today = new Date();
    const last7Days: string[] = [];

    Array.from({ length: 7 }).forEach((_, index) => {
      const date = new Date(today);
      date.setDate(today.getDate() - (7 - index - 1));
      last7Days.push(weekdays[date.getDay()]);
    });

    return last7Days;
  }, []);
};

export default useLastSevenDays;
