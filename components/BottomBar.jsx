"use client";

import { sidebarLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
function BottomBar() {
  const pathname = usePathname();
  return (
    <div className="flex bottom-0 z-20 w-full bg-dark-1 px-6 py-3 items-center justify-between md:hidden">
      {sidebarLinks.map((link) => (
        <Link
          key={link.route}
          href={link.route}
          className={`${
            pathname.startsWith(link.route)
              ? "bg-purple-1 text-primary"
              : "text-light-1"
          } p-2 rounded-md flex gap-2 px-4 py-2 items-center`}
        >
          {link.icon}{" "}
          <p className="text-small-semibold text-light-1 max-sm:hidden">
            {link.label}
          </p>
        </Link>
      ))}
    </div>
  );
}

export default BottomBar;
