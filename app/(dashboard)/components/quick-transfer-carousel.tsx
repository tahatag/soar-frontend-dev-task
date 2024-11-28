"use client";

import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from "@/components/ui/carousel";
import CarouselNextIcon from "./icons/carousel-next.svg";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Person } from "@/lib/types";

export const QuickTransferCarousel = ({
  people,
  selected,
  onClick,
}: {
  people: Person[];
  selected: number | null;
  onClick: (id: number) => void;
}) => {
  return (
    <Carousel
      className="h-full [&>div]:h-full [&>div]:w-full flex items-center"
      opts={{
        loop: true,
      }}
    >
      <CarouselContent className="h-full">
        {people.map((person) => (
          <CarouselItem
            key={person.id}
            className="basis-1/3 cursor-pointer"
            onClick={() => onClick(person.id)}
          >
            <div className="flex flex-col justify-center items-center h-full">
              <div className="min-w-[50px] w-[50px] h-[50px] md:min-w-[70px] md:w-[70px] md:h-[70px] rounded-full">
                <Image
                  src={person.image}
                  fill
                  alt={person.name}
                  className="object-cover rounded-full !relative"
                />
              </div>
              <p
                className={cn(
                  "mt-4 text-primary text-center line-clamp-1 text-xs md:text-base",
                  person.id === selected && "font-black"
                )}
              >
                {person.name}
              </p>
              <p
                className={cn(
                  "mt-1 text-text-secondary text-xs md:text-[15px]",
                  person.id === selected && "font-bold"
                )}
              >
                {person.role}
              </p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext
        render={({ scrollNext }) => (
          <Button
            onClick={scrollNext}
            className="bg-white min-w[40px] w-[40px] h-[40px] md:min-w[50px] md:w-[50px] md:h-[50px] shadow-carousel-button rounded-full hover:bg-white md:hover:bg-text-secondary/10 md:hover:shadow-none"
          >
            <CarouselNextIcon />
          </Button>
        )}
      />
    </Carousel>
  );
};
