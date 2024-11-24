"use client";

import { Header } from "@/components/header";
import { useSidebar } from "@/components/ui/sidebar";

export default function Home() {
  const { setOpenMobile } = useSidebar();

  return (
    <>
      <Header openMenu={() => setOpenMobile(true)} />
      hi
    </>
  );
}
