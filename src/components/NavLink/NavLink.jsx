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
        "border-transparent border  hover:border-primary hover:border-b-secondary hover:border-r-secondary block px-6 py-1 rounded-full transition-all duration-500 ease-out shadow-sm shadow-gray-400 " +
        (isActive ? "bg-primary text-white " : "")
      }
    >
      {children}
    </Link>
  );
};

export default NavLink;
