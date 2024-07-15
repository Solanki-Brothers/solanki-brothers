"use client";
import Link from "next/link";

import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={
        "border-transparent border  hover:border-primary hover:border-b-secondary hover:border-r-secondary block px-6 py-1 rounded-full transition-all duration-500 ease-in-out " +
        (isActive ? "bg-primary text-white shadow-md shadow-gray-400" : "")
      }
    >
      {children}
    </Link>
  );
};

export default NavLink;
