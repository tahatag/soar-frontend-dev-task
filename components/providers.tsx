"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

// icons
import DashboardIcon from "@/components/icons/nav/dashboard.svg";
import TransactionsIcon from "@/components/icons/nav/transactions.svg";
import AccountsIcon from "@/components/icons/nav/accounts.svg";
import InvestmentsIcon from "@/components/icons/nav/investments.svg";
import CreditCardsIcon from "@/components/icons/nav/credit-cards.svg";
import LoansIcon from "@/components/icons/nav/loans.svg";
import ServicesIcons from "@/components/icons/nav/services.svg";
import MyPrivilegesIcon from "@/components/icons/nav/my-privileges.svg";
import SettingsIcon from "@/components/icons/nav/settings.svg";

const sidebarItems = [
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

const queryClient = new QueryClient();

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <SidebarProvider>
        <AppSidebar items={sidebarItems} />
        <main className="flex-1 bg-white md:bg-background">{children}</main>
      </SidebarProvider>
    </QueryClientProvider>
  );
}
