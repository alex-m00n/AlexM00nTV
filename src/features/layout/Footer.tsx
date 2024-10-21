import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/src/theme/ThemeToggle";
import clsx from "clsx";
import { Calendar, Home, PenSquare, User } from "lucide-react";
import Link from "next/link";

export const Footer = async () => {
    return (
        <>
            <footer className="z-50 py-2 flex justify-between container gap-1 fixed bottom-0 left-0 right-0 bg-background max-w-lg m-auto border-t-2 border-accent">
                
                <Link href="/" className={clsx(buttonVariants({
                    variant: "ghost",
                }),
                    "flex-1"
                )}>
                    <Home size={16} />
                </Link>
                
                <Link href="/schedule" className={clsx(buttonVariants({
                    variant: "ghost",
                }),
                    "flex-1"
                )}>
                    <Calendar size={16} />
                </Link>
                
                <Link href="/profile" className={clsx(buttonVariants({
                    variant: "ghost",
                }),
                    "flex-1"
                )}>
                    <User size={16} />
                </Link>

            </footer>
        </>
    );
}