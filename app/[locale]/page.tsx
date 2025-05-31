import { getI18n } from "@/locales/server";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getI18n();
    return {
        title: `${t('home')} | AlexM00n 🌙`,
        description: "Just AlexM00n's Website"
    };
}

export default async function Home() {
  const t = await getI18n();
  return (
    <>
      <div>
        <img src="/animated.gif" className="rounded-full home-img w-auto" alt="profile-picture"/>
        <br />
        <h1 className="font-extrabold text-xl mb-1 text-center">{t("hometxt")}<p className="inline-flex hover:underline text-sm underline-offset-2">alexm00n.tv</p></h1>
      </div>
    </>
  );
}
