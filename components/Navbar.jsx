"use client";
import { signOut, useSession } from "next-auth/react";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "./theme-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function Navbar() {
  const { data: session, status } = useSession();

  return (
    <nav className="p-4 md:p-6 shadow-md border-b">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <Link href="/" className="text-3xl font-bold mb-4 md:mb-0">
          Dandeli Info
        </Link>

        <div className="flex gap-8 items-center">
          <ModeToggle />
          {status === "authenticated" ? (
            <DropdownMenu>
              <DropdownMenuTrigger className="border-none">
                <Avatar>
                  <AvatarImage
                    src={session.user?.image || "https://github.com/shadcn.png"}
                    alt="@shadcn"
                  />
                  <AvatarFallback>
                    @{session.user?.email?.split("@")[0]}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem
                  className="text-center"
                  onClick={() => signOut()}
                >
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/login">
              <Button className="w-full md:w-auto">Login</Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}