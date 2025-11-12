'use client';
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/constant";
import Link from "next/link";
import React from "react";

const Navitems = () => {
    const pathname = usePathname()
    const isActive = (path: string) => {
      if (!pathname) return false;
      return pathname === path || pathname.startsWith(path + '/');
    }
  return (
    <ul className="flex flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-medium">
      {NAV_ITEMS.map(({ href, label }) => (
        <li key={href} className="inline-block mr-6">
          <Link
            href={href}
            className={`hover:text-yellow-500 transition-colors ${
              isActive(href) ? "text-gray-100" : ""
            }`}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navitems;
