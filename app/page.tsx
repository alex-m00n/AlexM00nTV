import { Button, buttonVariants } from "@/components/ui/button";
import { HomeIcon } from "@radix-ui/react-icons";
import clsx from "clsx";
import { } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <head>
        <title>Home | AlexM00n 🌙</title>
      </head>

      <div className="max-w-lg m-4">
        <img src="/animated.gif" className="rounded-full home-img w-auto"/>
        <br />
        <h1 className="max-w-lg font-extrabold text-xl mb-1">Bienvenue sur mon site <Button variant={"link"} >alexm00n.tv</Button></h1>
      </div>
    </>
  );
}
