import Link from "next/link";
import React from "react";

export const DashboardSection = ({
  className,
  title,
  action,
  actionUrl,
  children,
}: {
  className: string;
  title: string;
  action?: string;
  actionUrl?: string;
  children: React.ReactNode;
}) => {
  return (
    <section className={className}>
      <div className="w-full flex justify-between items-center">
        <h3 className="text-text-title text-base md:text-[22px] font-semibold line-clamp-1">
          {title}
        </h3>
        {action && actionUrl && (
          <Link
            href={actionUrl}
            className="text-text-title hover:text-text-secondary text-sm md:text-[17px] font-semibold"
          >
            {action}
          </Link>
        )}
      </div>
      {children}
    </section>
  );
};
