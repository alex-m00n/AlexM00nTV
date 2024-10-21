import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/src/theme/ThemeToggle";

export const Header = async () => {
  return (
    <>
      <div>
        <div className="z-50 flex justify-between container py-2 gap-1 fixed top-0 left-0 right-0 bg-background max-w-lg m-auto border-b-2 border-accent">
          <h2 className="text-2xl font-bold mr-auto"><a href="/">AlexM00n</a></h2>
          <ThemeToggle />
        </div>
      </div>
    </>
  );
}