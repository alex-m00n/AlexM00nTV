import { buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "@/src/theme/ThemeToggle";
import Link from "next/link";
import { LocaleSelect } from "@/app/[locale]/localeSelect";

export const Header = async () => {
  return (
    <>
      <div>
        <div className="z-30 flex justify-between container py-2 gap-1 fixed top-0 left-0 right-0 bg-background m-auto border-b-2 border-accent">
          <h2 className="text-2xl font-bold mr-auto flex"><Link href={"/"} className="hover:underline">alexm00n.tv</Link></h2>
          <div className="containerLink"><Link href={"/my-projects"} className={buttonVariants({ variant: "link" })}>/my-projects</Link><Link href={"/stream-schedule"} className={buttonVariants({ variant: "link" })}>/stream-schedule</Link><Link href={"/profile"} className={buttonVariants({ variant: "link" })}>/profile</Link></div>
          <ThemeToggle />
          <LocaleSelect />
        </div>
      </div>
    </>
  );
}