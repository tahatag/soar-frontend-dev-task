"use client";

import Image from "next/image";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useSidebar } from "./ui/sidebar";
import { useUserStore } from "@/stores/userStore";

import NotificationsIcon from "./icons/notifications.svg";
import SettingsOutlinedIcon from "./icons/settings-outlined.svg";
import SearchIcon from "./icons/search.svg";
import MenuIcon from "./icons/menu.svg";
import Link from "next/link";

export const Header = ({ title }: { title: string }) => {
  const { setOpenMobile } = useSidebar();
  const { user } = useUserStore();

  const handleSearch = () => {
    // handle search here
  };

  return (
    <header className="w-full md:h-header md:border-b bg-white p-[25px] pb-5 md:px-10 md:py-5 flex flex-col gap-5">
      <div className="w-full md:h-header flex justify-between items-center gap-5">
        <div className="md:hidden w-[35px]">
          <Button
            variant="ghost"
            className="p-0"
            onClick={() => setOpenMobile(true)}
          >
            <MenuIcon />
          </Button>
        </div>
        <h1 className="text-[20px] md:text-[28px] text-text-title font-semibold">
          {title}
        </h1>
        <div className="md:w-full justify-end flex md:gap-3 lg:gap-[30px] h-full items-center">
          <div className="relative hidden md:flex">
            <Input
              className="w-full max-w-64 h-[50px] rounded-full bg-background border-none pl-[60px] text-text-secondary !text-[15px]"
              placeholder="Search for something"
            />
            <SearchIcon
              className="absolute left-[25px] top-[15px] cursor-pointer text-text-secondary"
              onClick={handleSearch}
            />
          </div>
          <Button variant="icon" className="text-text-secondary hidden md:flex">
            <SettingsOutlinedIcon />
          </Button>
          <Button variant="icon" className="hidden md:flex">
            <NotificationsIcon />
          </Button>
          <Link
            href="/settings"
            className="rounded-full w-[35px] h-[35px] md:min-w-[60px] md:w-[60px] md:h-[60px] md:ml-[5px]"
          >
            <Image
              fill
              src={
                user?.profile_picture
                  ? user?.profile_picture
                  : "/pfp-placeholder.png"
              }
              alt="Profile Picture"
              className="object-cover !relative rounded-full"
            />
          </Link>
        </div>
      </div>
      <div className="relative flex md:hidden">
        <Input
          className="w-full h-[40px] rounded-full bg-background border-none pl-[45px] text-text-secondary !text-[13px]"
          placeholder="Search for something"
        />
        <SearchIcon
          className="absolute left-[19px] top-[13px] cursor-pointer text-text-secondary h-[15px]"
          onClick={handleSearch}
        />
      </div>
    </header>
  );
};
