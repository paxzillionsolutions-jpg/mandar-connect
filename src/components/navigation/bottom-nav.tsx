"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  House,
  Search,
  BriefcaseBusiness,
  MessageCircleMore,
  UserRound,
} from "lucide-react";

const navItems = [
  {
    label: "Home",
    href: "/home",
    icon: House,
  },
  {
    label: "Explore",
    href: "/explore",
    icon: Search,
  },
  {
    label: "Leads",
    href: "/leads",
    icon: BriefcaseBusiness,
  },
  {
    label: "Chats",
    href: "/chat",
    icon: MessageCircleMore,
  },
  {
    label: "Profile",
    href: "/profile",
    icon: UserRound,
  },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md border-t border-[#ebe4d8] bg-[#fcfbf8]/95 backdrop-blur">
      
      <div className="flex items-center justify-around py-3">

        {navItems.map((item) => {
          const Icon = item.icon;

          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-1 transition-all ${
                active
                  ? "text-[#c67c2e]"
                  : "text-gray-400"
              }`}
            >
              <Icon
                size={21}
                strokeWidth={active ? 2.5 : 2}
              />

              <span
                className={`text-[10px] ${
                  active
                    ? "font-semibold"
                    : "font-medium"
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}

      </div>
    </div>
  );
}