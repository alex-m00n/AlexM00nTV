import { Button, buttonVariants } from "@/components/ui/button";
import { getI18n } from "@/locales/server";
import { HomeIcon } from "@radix-ui/react-icons";
import clsx from "clsx";
import { } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const t = await getI18n();
  return (
    <>
      <head>
        <title>{clsx(t("home"), " | AlexM00n 🌙")}</title>
      </head>

      <div>
        <img src="/animated.gif" className="rounded-full home-img w-auto" alt="profile-picture"/>
        <br />
        <h1 className="font-extrabold text-xl mb-1 text-center">{t("hometxt")}<p className="inline-flex hover:underline text-sm underline-offset-2">alexm00n.tv</p></h1>
      </div>
    </>
  );
}
