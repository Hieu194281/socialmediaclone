"use client";

import { sidebarLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
function Menu() {
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-2">
      {sidebarLinks.map((link) => (
        <Link
          key={link.route}
          href={link.route}
          className={`${
            pathname.startsWith(link.route)
              ? "bg-purple-1 text-primary"
              : "text-light-1"
          } p-2 rounded-md flex gap-4 px-4 py-2 justify-start`}
        >
          {link.icon} <p className="text-light-1">{link.label}</p>
        </Link>
      ))}
    </div>
  );
}

export default Menu;
