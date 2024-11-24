"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

// icons
import Logo from "./icons/logo.svg";
import DashboardIcon from "./icons/nav/dashboard.svg";
import TransactionsIcon from "./icons/nav/transactions.svg";
import AccountsIcon from "./icons/nav/accounts.svg";
import InvestmentsIcon from "./icons/nav/investments.svg";
import CreditCardsIcon from "./icons/nav/credit-cards.svg";
import LoansIcon from "./icons/nav/loans.svg";
import ServicesIcons from "./icons/nav/services.svg";
import MyPrivilegesIcon from "./icons/nav/my-privileges.svg";
import SettingsIcon from "./icons/nav/settings.svg";

const menuItems = [
  { title: "Dashboard", href: "/", icon: <DashboardIcon /> },
  {
    title: "Transactions",
    href: "/transactions",
    icon: <TransactionsIcon />,
  },
  { title: "Accounts", href: "/accounts", icon: <AccountsIcon /> },
  { title: "Investments", href: "/investments", icon: <InvestmentsIcon /> },
  {
    title: "Credit Cards",
    href: "/credit-cards",
    icon: <CreditCardsIcon />,
  },
  { title: "Loans", href: "/loans", icon: <LoansIcon /> },
  { title: "Services", href: "/services", icon: <ServicesIcons /> },
  {
    title: "My Privileges",
    href: "/my-privileges",
    icon: <MyPrivilegesIcon />,
  },
  { title: "Settings", href: "/settings", icon: <SettingsIcon /> },
];

export function AppSidebar() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Desktop Sidebar */}
      <Sidebar className="hidden md:flex">
        <SidebarHeader className="h-header justify-center items-center">
          <Link href="/" className="flex gap-[10px] items-center">
            <Logo className="text-primary" />
            <h1 className="text-[25px] font-extrabold text-text-title">
              Soar Task
            </h1>
          </Link>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu className="mt-[30px]">
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  asChild
                  className={cn(
                    "h-[60px] justify-center p-0",
                    pathname === item.href
                      ? "text-primary"
                      : "text-muted hover:text-primary"
                  )}
                >
                  <div>
                    {pathname === item.href && (
                      <div className="w-[6px] absolute left-0 h-[60px] bg-primary rounded-tr-[10px] rounded-br-[10px]" />
                    )}
                    <div className="w-full px-11 h-full">
                      <Link
                        href={item.href}
                        className="h-full w-full flex items-center gap-7"
                      >
                        {item.icon}
                        <p className="text-lg font-medium">{item.title}</p>
                      </Link>
                    </div>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>

      {/* Mobile Hamburger Menu */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" className="md:hidden" size="icon">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0">
          <VisuallyHidden>
            <SheetTitle>Menu</SheetTitle>
          </VisuallyHidden>
          <ScrollArea className="h-full w-full">
            <div className="flex flex-col space-y-4 py-4">
              <div className="px-3 py-2">
                <Link href="/" className="flex items-center space-x-2">
                  <span className="text-2xl font-bold">MyApp</span>
                </Link>
              </div>
              <div className="flex-1">
                <nav className="flex flex-col space-y-1">
                  {menuItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex items-center px-3 py-2 text-sm font-medium",
                        pathname === item.href
                          ? "bg-accent text-accent-foreground"
                          : "hover:bg-accent hover:text-accent-foreground"
                      )}
                    >
                      {item.title}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </>
  );
}
