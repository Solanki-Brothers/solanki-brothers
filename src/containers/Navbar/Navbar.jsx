import Image from "next/image";
import { NavLink } from "@/components";
function Navbar() {
  return (
    <div className="border-b border-secondary h-24 w-full flex items-center justify-between px-40 py-8 fixed top-0  left-0 z-50 backdrop-blur-md">
      <Image className="" src="/logo.png" alt="logo" width={75} height={75} />
      <nav className="">
        <ul className="flex gap-10 text-lg">
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/news">News</NavLink>
          </li>
          <li>
            <NavLink href="/services">Services</NavLink>
          </li>
          <li>
            <NavLink href="/about">About</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
